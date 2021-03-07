<template>
	<div class="shop-info" v-if="Object.keys(shop).length !== 0">
		<div class="shop-top">
			<img :src="shop.shopLogo" />
			<span class="title">{{shop.name}}</span>
		</div>
		
		<div class="shop-middle">
			<div class="shop-middle-left shop-middle-item">
				<div class="info-sell">
					<div class="sell-count">
						{{shop.cSells | sellCountFilter}}
					</div>
					<div class="sell-text">总销量</div>
				</div>
				<div class="info-goods">
					<div class="goods-count">{{shop.cGoods}}</div>
					<div class="goods-text">全部宝贝</div>
				</div>
			</div>
			<div class="shop-middle-right shop-middle-item">
				<table>
					<tr v-for="(item, index) in shop.score">
						<td>{{item.name}}</td>
						<td class="score" :class="{'score-better': item.isBetter}">{{item.score}}</td>
						<td class="better" :class="{'better-more': item.isBetter}">
							<span>{{item.isBetter ? '高':'低'}}</span>
						</td>
					</tr>
				</table>
			</div>
		</div>
		
		<div class="shop-bottom">
			<div class="enter-shop">进店逛逛</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			shop: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		filters: {
			sellCountFilter(value) {
				let result = value;
				if(value > 10000) {
					result = (result / 10000).toFixed(1) + '万';
				}
				return result;
			}
		}
	}
</script>

<style scoped>
	.shop-info {
		padding: 25px 8px;
	}
	.shop-top {
		line-height: 45px;
		display: flex;
		align-items: center;
	}
	.shop-top img {
		width: 45px;
		border-radius: 50%;
		border: 1px solid rgba(0,0,0,.1);
	}
	.shop-top .title {
		margin-left: 10px;
	}
	.shop-middle {
		margin-top: 15px;
		display: flex;
		align-items: center;
		color: #333;
	}
	.shop-middle-item {
		flex: 1;
	}
	.shop-middle-left {
		display: flex;
		justify-content: space-evenly;
		border-right: 1px solid rgba(0,0,0,.1);
	}
	.sell-count, .goods-count {
		font-size: 18px;
	}
	.sell-text, .goods-text {
		margin-top: 10px;
		font-size: 13px;
	}
	.shop-middle-right {
		font-size: 13px;
	}
	.shop-middle-right table {
		width: 120px;
		margin-left: 30px;
	}
	.shop-middle-right table td {
		padding: 5px 0;
	}
	.shop-middle-right .score {
		color: #5ea732;
	}
	.shop-middle-right .score-better {
		color: #f13e3a;
	}
	.shop-middle-right .better span {
		background-color: #5ea732;
		color: #fff;
		text-align: center;
		padding: 2px;
		border-radius: 2px;
	}
	.shop-middle-right .better-more span {
		background-color: #f13e3a;
	}
	.shop-bottom {
		text-align: center;
		margin-top: 10px;
	}
	.enter-shop {
		display: inline-block;
		font-size: 14px;
		background-color: #f2f5f8;
		width: 150px;
		height: 30px;
		line-height: 30px;
		border-radius: 10px;
	}
</style>
