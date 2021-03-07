<template>
	<div class="tab-detail">
		<goods-list :goods="categoryDetail"/>
	</div>
</template>

<script>
	import GoodsList from 'components/content/goods/GoodsList.vue'
	
	export default {
		components: {
			GoodsList
		},
		props: {
			categoryDetail: {
				type: Array,
				default() {
					return []
				}
			}
		}
	}
</script>

<style>
</style>
