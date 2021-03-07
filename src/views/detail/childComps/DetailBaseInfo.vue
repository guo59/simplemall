<template>
	<div v-if="Object.keys(goods).length !== 0" class="detail-base">
		<div class="title">
			{{goods.title}}
		</div>
		<div class="price">
			<span class="newprice">{{goods.price}}</span>
			<span class="oldprice">{{goods.oldPrice}}</span>
			<span class="discount"
			 :style="{backgroundColor: goods.discountBg}"
			 v-if="goods.discount">{{goods.discount}}</span>
		</div>
		<div class="columns">
			<span>{{goods.columns[0]}}</span>
			<span>{{goods.columns[1]}}</span>
			<span>{{goods.service[goods.service.length-1].name}}</span>
		</div>
		<div class="service">
			<span v-for="index in goods.service.length-1"
			  class="service-item">
				<img :src="goods.service[index-1].icon" />
				<span>{{goods.service[index-1].name}}</span>
			</span>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			goods: {
				type: Object,
				default() {
					return {}
				}
			}
		}
	}
</script>

<style scoped>
	.detail-base {
		padding: 8px;
		border-bottom: 5px solid #f2f5f8;
	}
	.title {
		font-size: 16px;
		margin-bottom: 10px;
		color: #222;
	}
	.newprice {
		color: var(--color-high-text);
		font-size: 24px;
	}
	.oldprice {
		text-decoration: line-through;
		margin-left: 5px;
		font-size: 13px;
	}
	.discount {
		border-radius: 4px;
		padding: 2px 5px;
		font-size: 13px;
		color: #fff;
		margin-left: 5px;
		position: relative;
		top: -8px;
	}
	.columns {
		margin-top: 10px;
		display: flex;
		justify-content: space-between;
		font-size: 13px;
		border-bottom: 3px solid rgba(100,100,100,.1);
		line-height: 30px;
	}
	.service {
		display: flex;
		justify-content: space-between;
		line-height: 60px;
	}
	.service img {
		width: 14px;
		position: relative;
		top: 2px;
	}
	.service-item {
		font-size: 12px;
		color: #333;
	}
</style>
