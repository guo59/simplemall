<template>
	<div class="list-view">
		<div v-for="item in listData" class="list-item">
			<span class="icon">
				<van-icon :name="item.icon" :color='item.iconColor' size='24' />
			</span>
			<span>{{item.info}}</span>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			listData: {
				type: Array,
				default() {
					return []
				}
			}
		}
	}
</script>

<style scoped>
	.list-view {
		border-top: 20px solid #f8f8f8;
		color: #333;
	}
	.list-item {
		padding: 10px 20px;
		vertical-align: middle;
		border-bottom: solid 1px #f8f8f8;
	}
	.list-item:last-child {
		border: none;
	}
	.icon {
		margin-right: 14px;
		position: relative;
		top: 7px;
	}
</style>
