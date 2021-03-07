<template>
	<div class="cart-list-item">
		<div class="item-selector">
			<check-botton :isChecked=product.checked @click.native='checkClick' />
		</div>
		<div class="item-image">
			<img :src="product.image" alt="商品图片">
		</div>
		<div class="item-info">
			<div class="item-title">{{product.title}}</div>
			<div class="item-desc">{{product.desc}}</div>
			<div class="info-bottom">
				<div class="item-price">￥{{product.price}}</div>
				<div class="item-count">×{{product.count}}</div>
			</div>
		</div>
	</div>
</template>

<script>
	import CheckBotton from 'components/content/checkBotton/CheckBotton.vue'
	
	export default {
		components: {
			CheckBotton
		},
		props: {
			product: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		methods: {
			checkClick() {
				this.product.checked = !this.product.checked
			}
		}
	}
</script>

<style scoped>
	.cart-list-item {
		padding: 5px;
		width: 100%;
		border-bottom: 1px solid #ccc;
		display: flex;
	}
	.item-selector {
		width: 20px;
		display: flex;
		align-items: center;
	}
	.item-image {
		padding: 5px;
	}
	.item-image img {
		width: 80px;
		display: block;
		border-radius: 5px;
	}
	.item-info {
		font-size: 17px;
		color: #333;
		padding: 5px 10px;
		position: relative;
		overflow: hidden;
	}
	.item-title, .item-desc {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.item-desc {
		font-size: 14px;
		color: #666;
		margin-top: 15px;
	}
	.info-bottom {
		margin-top: 10px;
		position: absolute;
		bottom: 10px;
		left: 10px;
		right: 10px;
		display: flex;
		justify-content: space-between;
	}
	.info-bottom .item-price {
		color: orangered;
	}
</style>
