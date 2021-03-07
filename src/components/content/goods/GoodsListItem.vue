<template>
	<div class="goods-item" @click="itemClick">
		<img v-lazy="showImage" alt="" @load="imageLoad" />
		<div class="goods-info">
			<p>{{goodsItem.title}}</p>
			<span class="price">{{goodsItem.price}}</span>
			<span class="collect">{{goodsItem.cfav}}</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'GoodListItem',
		props: {
			goodsItem: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		computed: {
			showImage() {
				return this.goodsItem.image || this.goodsItem.img || this.goodsItem.show.img
			}
		},
		methods: {
			imageLoad() {
				this.$bus.$emit('itemImageLoad')
			},
			itemClick() {
				this.$router.push('/detail'+this.goodsItem.iid)
			}
		}
	}
</script>

<style scoped>
	.goods-item {
		width: 48%;
		padding-bottom: 20px;
		position: relative;
	}
	.goods-item img {
		width: 100%;
		border-radius: 2px;
	}
	.goods-info {
		overflow: hidden;
		font-size: 12px;
	}
	.goods-info p {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.price {
		color: var(--color-high-text);
		margin-right: 25px;
	}
	.collect {
		position: relative;
	}
	.collect::before {
		content: '';
		position: absolute;
		width: 14px;
		height: 14px;
		left: -15px;
		top: -1px;
		background: url('../../../assets/img/common/collect.svg') 0 0/14px 14px;
	}
</style>
