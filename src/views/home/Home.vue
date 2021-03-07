<template>
	<div id="home">
		<nav-bar class="home-nav">
			<template v-slot:center><div>购物商城</div></template>
		</nav-bar>
		<tab-control :titles="['流行','新款','精选']" class="tab-control"
		  @tabClick='tabClick' v-show="isTabShow" ref='tabControl1'></tab-control>
		<scroll class="content"
		  ref='scroll'
			:probeType='3'
			@scroll='contentScroll'
			:pullUpLoad="true"
			@pullingUp='loadMore'>
			<home-swiper
			 :banners="banners" 
			 @swiperImageLoad='swiperImageLoad' 
			 ref="hSwiper"></home-swiper>
			<recommend-view :recommends="recommends"></recommend-view>
			<feature-view></feature-view>
			<tab-control :titles="['流行','新款','精选']"
			  @tabClick='tabClick'
				ref='tabControl2'></tab-control>
			<goods-list :goods="showGoods"></goods-list>
		</scroll>
		
		<back-top @click.native='backClick' v-show="isShowBackTop" />
	</div>
</template>

<script>
	import NavBar from 'components/common/navbar/NavBar.vue'
	import {getHomeMultidata, getHomeGoods} from 'network/home.js'
	import HomeSwiper from './childComps/HomeSwiper.vue'
	import RecommendView from './childComps/RecommendView.vue'
	import FeatureView from './childComps/FeatureView.vue'
	import TabControl from 'components/content/tabcontrol/TabControl.vue'
	import GoodsList from 'components/content/goods/GoodsList.vue'
	import Scroll from 'components/common/scroll/Scroll.vue'
	import {itemListenerMixin, backTopMixin} from 'common/mixin.js'
	
	export default {
		name: 'Home',
		components: {
			NavBar,
			HomeSwiper,
			RecommendView,
			FeatureView,
			TabControl,
			GoodsList,
			Scroll
		},
		data() {
			return {
				banners: [],
				recommends: [],
				goods: {
					'pop': {page: 0, list: []},
					'new': {page: 0, list: []},
					'sell': {page: 0, list: []},
				},
				currentType: 'pop',
				isTabShow:false,
				tabOfferSet: 0,
			}
		},
		computed: {
			showGoods() {
				return this.goods[this.currentType].list;
			}
		},
		mixins: [itemListenerMixin, backTopMixin],
		created() {
			this.getHomeMultidata()
			this.getHomeGoods('pop')
			this.getHomeGoods('new')
			this.getHomeGoods('sell')
		},
		activated() {
			this.$bus.$on('itemImageLoad', this.itemImgLinstener)
			this.$refs.hSwiper.startTimer
		},
		deactivated() {
			this.$refs.hSwiper.stopTimer
			this.$bus.$off('itemImageLoad')
		},
		methods: {
			// 网络请求
			getHomeMultidata() {
				getHomeMultidata().then(res => {
					this.banners = res.data.data.banner.list;
					this.recommends = res.data.data.recommend.list;
				})
			},
			getHomeGoods(type) {
				const page = this.goods[type].page + 1;
				getHomeGoods(type, page).then(res => {
					this.goods[type].list.push(...res.data.data.list);
					this.goods[type].page += 1
					
					this.$refs.scroll.finishPullUp()
				})
			},
			
			// 事件监听
			tabClick(index) {
				switch(index) {
					case 0:
					  this.currentType = 'pop'
						break
					case 1:
					  this.currentType = 'new'
						break
					case 2:
					  this.currentType = 'sell'
						break
				}
				this.$refs.tabControl1.currentIndex = index
				this.$refs.tabControl2.currentIndex = index
				
			},
			contentScroll(position) {
				this.isShowBackTop = (-position.y) >1000
				
				this.isTabShow = (-position.y) > this.tabOfferSet
			},
			loadMore() {
				this.getHomeGoods(this.currentType)
			},
			swiperImageLoad() {
				this.tabOfferSet = this.$refs.tabControl2.$el.offsetTop
			}
		}
	}
</script>

<style scoped>
	#home {
		height: 100vh;
		position: relative;
	}
 .home-nav {
	 z-index: 9;
	 background-color: #E0620D;
 }
 .tab-control {
	 position: relative;
	 z-index: 9;
	 background-color: #fff;
 }
 .content {
	 overflow: hidden;
	 position: absolute;
	 top: 44px;
	 bottom: 49px;
	 left: 0;
	 right: 0;
 }
</style>
