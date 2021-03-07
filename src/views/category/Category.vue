<template>
	<div class="category">
		<nav-bar class="nav-bar">
			<div slot='center'>商品分类</div>
		</nav-bar>
		<div class="content">
			<tab-menu :menuList="menuList" @selectItem='selectItem'/>
			
			<scroll id="tab-content" ref='scroll'>
				<tab-content-category :subcategories='showSubcategory'/>
				<tab-control :titles="['流行','新款','精选']" @tabClick = 'tabClick'/>
				<tab-content-detail :categoryDetail="showCategoryDetail"/>
			</scroll>
		</div>
	</div>
</template>

<script>
	import NavBar from 'components/common/navbar/NavBar.vue'
	import Scroll from 'components/common/scroll/Scroll.vue'
	import TabControl from 'components/content/tabcontrol/TabControl.vue'
	
	import TabMenu from './childComps/TabMenu.vue'
	import TabContentCategory from'./childComps/TabContentCategory.vue'
	import TabContentDetail from './childComps/TabContentDetail.vue'
	
	import { getCategory, getSubCategory, getCategoryDetail} from 'network/category.js'
	import { POP, NEW, SELL} from 'common/const.js'
	import { tabControlMixin, itemListenerMixin} from 'common/mixin.js'
	export default {
		name: 'Category',
		components: {
			NavBar,
			Scroll,
			TabControl,
			TabMenu,
			TabContentCategory,
			TabContentDetail
		},
		mixins: [tabControlMixin, itemListenerMixin],
		data() {
			return {
				menuList: [],
				categoryData: {},
				currentIndex: -1
			}
		},
		computed: {
			showSubcategory() {
				if(this.currentIndex === -1) return {}
				return this.categoryData[this.currentIndex].subcategories
			},
			showCategoryDetail() {
				if(this.currentIndex === -1) return []
				return this.categoryData[this.currentIndex].categoryDetail[this.currentType]
			}
		},
		activated() {
			this.$bus.$on('itemImageLoad', this.itemImgLinstener)
		},
		deactivated() {
			this.$bus.$off('itemImageLoad')
		},
		created() {
			this._getCategory()
		},
		methods: {
			_getCategory() {
				getCategory().then(res => {
					this.menuList = res.data.data.category.list
					
					for(let i = 0; i < this.menuList.length; i++) {
						this.categoryData[i] = {
							subcategories: {},
							categoryDetail: {
								'pop': [],
								'new': [],
								'sell': []
							}
						}
					}
					
					this._getSubCategory(0)
				})
			},
			_getSubCategory(index) {
				this.currentIndex = index
				const mailKey = this.menuList[index].maitKey
				getSubCategory(mailKey).then(res => {
					this.categoryData[index].subcategories = res.data.data
					this.categoryData = {...this.categoryData}
					this._getCategoryDetail(POP)
					this._getCategoryDetail(NEW)
					this._getCategoryDetail(SELL)
				})
			},
			_getCategoryDetail(type) {
				const miniWallkey = this.menuList[this.currentIndex].miniWallkey
				getCategoryDetail(miniWallkey, type).then(res => {
					this.categoryData[this.currentIndex].categoryDetail[type] = res.data
					this.categoryData = {...this.categoryData}
				})
			},
			selectItem(index) {
				this._getSubCategory(index)
			}
		}
	}
</script>

<style scoped>
	.category {
		height: 100vh;
	}
	.nav-bar {
		background-color: var(--color-tint);
		color: #fff;
	}
	.content {
		display: flex;
		position: absolute;
		top: 44px;
		bottom: 49px;
		left: 0;
		right: 0;
	}
	#tab-content {
		height: 100%;
		flex: 1;
		overflow: hidden;
	}
</style>
