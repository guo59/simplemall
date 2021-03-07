<template>
	<scroll class='tab-menu' ref='scroll'>
		<div class="menu-list">
			<div class="menu-list-item"
			:class="{active: index===currentIndex}"
					 v-for="(item, index) in menuList"
					 :key='index'
					 @click="itemClick(index)">
				{{item.title}}
			</div>
		</div>
	</scroll>
</template>

<script>
	import Scroll from 'components/common/scroll/Scroll.vue'
	export default {
		components: {
			Scroll
		},
		props: {
			menuList: Array
		},
		data() {
			return {
				currentIndex: 0
			}
		},
		mounted() {
			setTimeout(() => {
				this.$refs.scroll.refresh()
			}, 2000)
		},
		methods: {
			itemClick(index) {
				this.currentIndex = index
				this.$emit('selectItem', index)
			}
		}
	}
</script>

<style scoped>
	.tab-menu {
		background-color: #F6F6F6;
		width: 100px;
		height: 100%;
		overflow: hidden;
	}
	.menu-list {
		text-align: center;
		height: 100%;
	}
	.menu-list-item {
		height: 50px;
		line-height: 50px;
	}
	.active {
		background-color: #fff;
		color: #E0620D;
		border-left: 3px solid #E0620D;
		font-weight: 700;
	}
</style>
