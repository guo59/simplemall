<template>
	<div class="bottom-bar">
		<div class="bar-left bar-item">
			<div>
				<van-icon name="service-o" class='icon service' />
				<span>客服</span>
			</div>
			<div>
				<van-icon name="shop-o" class='icon' />
				<span>店铺</span>
			</div>
			<div>
				<van-icon name="star-o" class='icon' />
				<span>收藏</span>
			</div>
		</div>
		
		<div class="bar-right bar-item">
			<div class="cart" @click="cartClick">加入购物车</div>
			<div class="buy">立即购买</div>
		</div>
	</div>
</template>

<script>
	export default {
		methods: {
			cartClick() {
				this.$emit('cartClick')
			}
		}
	}
</script>

<style scoped>
	.bottom-bar {
		height: 49px;
		background-color: #fff;
		display: flex;
		text-align: center;
	}
	.bar-item {
		flex: 1;
		display: flex;
	}
	.bar-item>div {
		flex: 1;
	}
	.bar-left span {
		font-size: 13px;
	}
	.bar-left .icon {
		display: block;
		width: 22px;
		margin: 8px auto 3px;
	}
	.bar-left .service {
		color: #e0620d;
	}
	.bar-right {
		font-size: 15px;
		line-height: 49px;
	}
	.bar-right .cart {
		background-color: #ffe817;
		color: #333;
	}
	.bar-right .buy {
		background-color: #e0620d;
		color: #fff;
	}
</style>
