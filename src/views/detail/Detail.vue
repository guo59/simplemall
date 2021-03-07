<template>
	<div class="detail">
		<detail-nav-bar class="detail-nav" @titleClick='titleClick' ref='nav' />
		<scroll class="content" ref='scroll'
		  @scroll='contentScroll'
			:probeType='3'>
			<detail-swiper :top-images='topImages' />
			<detail-base-info :goods="goodsInfo" />
			<detail-shop-info :shop="shopInfo" />
			<detail-image-info :detailInfo="detailInfo" @detailImgLoad='detailImgLoad' />
			<detail-params-info ref='params' :paramsInfo="itemParams"/>
			<detail-comment-info ref='comment' :commentInfo="commentInfo" />
			<goods-list :goods="recommend" ref='recommend' />
		</scroll>
		<back-top @click.native='backClick' v-show="isShowBackTop" />
		<detail-bottom-bar @cartClick='addToCart' />
	</div>
</template>

<script>
	import DetailNavBar from './childComps/DetailNavBar.vue'
	import DetailSwiper from './childComps/DetailSwiper.vue'
	import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
	import DetailShopInfo from './childComps/DetailShopInfo.vue'
	import DetailImageInfo from './childComps/DetailImageInfo.vue'
	import DetailParamsInfo from './childComps/DetailParamsInfo.vue'
	import DetailCommentInfo from './childComps/DetailCommentInfo.vue'
	import GoodsList from 'components/content/goods/GoodsList.vue'
	import DetailBottomBar from './childComps/DetailBottomBar.vue'
	
	import {getDetail, Goods, getRecommend} from 'network/detail.js'
	import {itemListenerMixin, backTopMixin} from 'common/mixin.js'
	import {debounce} from 'common/utils.js'
	import {mapActions} from 'vuex'
	import { toast } from 'components/common/toast/index.js';
	
	import Scroll from 'components/common/scroll/Scroll.vue'

	export default {
		name: 'Detail',
		components: {
			DetailNavBar,
			DetailSwiper,
			DetailBaseInfo,
			DetailShopInfo,
			DetailImageInfo,
			DetailParamsInfo,
			DetailCommentInfo,
			GoodsList,
			DetailBottomBar,
			Scroll
		},
		data() {
			return {
				iid: null,
				topImages: [],
				goodsInfo: {},
				shopInfo: {},
				detailInfo: {},
				itemParams: {},
				commentInfo: {},
				recommend: [],
				themeYopY: [],
				getThemeTopY: null,
				currentIndex: 0
			}
		},
		mixins: [itemListenerMixin, backTopMixin],
		created() {
			this.iid = this.$route.params.iid
			
			getDetail(this.iid).then(res => {
				console.log(res)
				const data = res.data.result
				this.topImages = data.itemInfo.topImages
				
				this.goodsInfo = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
				this.shopInfo = data.shopInfo
				this.detailInfo = data.detailInfo
				this.itemParams = data.itemParams
				
				if(data.rate.cRate !== 0) {
					this.commentInfo = data.rate.list[0]
				}
			})
			
			getRecommend().then(res => {
				console.log(res)
				this.recommend = res.data.data.list
			})
			
			this.getThemeTopY = debounce(() => {
				this.themeYopY = []
				this.themeYopY.push(0)
				this.themeYopY.push(this.$refs.params.$el.offsetTop-44)
				this.themeYopY.push(this.$refs.comment.$el.offsetTop-44)
				this.themeYopY.push(this.$refs.recommend.$el.offsetTop-44)
				this.themeYopY.push(Number.MAX_VALUE)
			})
		},
		methods: {
			...mapActions(['addCart']),
			titleClick(index) {
				this.$refs.scroll.scrollTo(0, -(this.themeYopY[index]), 200)
			},
			detailImgLoad() {
				this.getThemeTopY()
			},
			contentScroll(position) {
				this.isShowBackTop = (-position.y) >1000
				
				const positionY = -position.y
				let length = this.themeYopY.length
				for(let i=0; i < length - 1; i++) {
					if(this.currentIndex !== i && (i < length - 1 && positionY >= this.themeYopY[i] && positionY < this.themeYopY[i+1])) {
						this.currentIndex = i;
						this.$refs.nav.currentIndex = this.currentIndex
					}
				}
			},
			addToCart() {
				const product = {}
				product.image = this.topImages[0]
				product.title = this.goodsInfo.title
				product.desc = this.goodsInfo.desc
				product.price = this.goodsInfo.realPrice
				product.iid = this.iid
				console.log(product)
				
				this.addCart(product).then(res => {
					console.log(res)
					toast(res);
				})
			}
		}
	}
</script>

<style scoped>
	.detail {
		position: relative;
		z-index: 1;
		background-color: #fff;
		height: 100vh;
	}
	.detail-nav {
		background-color: #fff;
		z-index: 9;
	}
	.content {
		height: calc(100% - 44px - 49px);
		overflow: hidden;
	}
</style>
