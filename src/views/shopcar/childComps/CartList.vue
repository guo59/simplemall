<template>
	<div class="cart-list">
		<scroll class="content" ref='scroll'>
			<cart-list-item :product="item"
			 v-for="(item, index) in cartList" 
			 :key='index' />
		</scroll>
		
	</div>
</template>

<script>
	import CartListItem from './CartListItem.vue'
	import Scroll from 'components/common/scroll/Scroll.vue'
	import {mapGetters} from 'vuex'
	
	export default {
		components: {
			Scroll,
			CartListItem
		},
		computed: {
			...mapGetters(['cartList'])
		},
		activated() {
			this.$refs.scroll.refresh()
		}
	}
</script>

<style scoped>
	.cart-list {
		height: calc(100% - 44px - 49px - 40px);
	}
	.content {
		height: 100%;
		overflow: hidden;
	}
</style>
