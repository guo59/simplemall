<template>
	<div class="content-category">
		<div v-for="(item, index) in subcategories.list" :key='index' class="item">
			<img :src="item.image"/>
			<div class="title">{{item.title}}</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			subcategories: {
				type: Object,
				default() {
					return []
				}
			}
		}
	}
</script>

<style scoped>
	.content-category {
		display: flex;
		flex-wrap: wrap;
		text-align: center;
	}
	.item {
		width: 33%;
		padding: 13px 5px;
	}
	.item img {
		width: 80%;
	}
	.title {
		margin-top: 10px;
		font-size: 14px;
	}
</style>
