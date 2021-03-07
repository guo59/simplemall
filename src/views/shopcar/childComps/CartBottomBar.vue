<template>
	<div class="bottom-bar">
		<div class="check-content">
			<check-botton
			 class="check-botton" 
			 :isChecked='isSelectAll' @click.native='checkClick' />
			<span>全选</span>
		</div>
		<div class="price">
			合计：￥{{totalPrice}}
		</div>
		<div class="caculate" @click="calcClick">
			去结算（{{checkLength}}）
		</div>
	</div>
</template>

<script>
	import CheckBotton from 'components/content/checkBotton/CheckBotton.vue'
	import {mapGetters} from 'vuex'
	import { toast } from 'components/common/toast/index.js';
	export default {
		components: {
			CheckBotton
		},
		computed: {
			...mapGetters(['cartList']),
			totalPrice() {
				return this.cartList.filter(item => {
					return item.checked
				}).reduce((preValue, item) => {
					return preValue + item.price * item.count
				},0).toFixed(2)
			},
			checkLength() {
				return this.cartList.filter(item => {
					return item.checked
				}).reduce((preValue, item) => {
					return preValue + item.count
				},0)
			},
			isSelectAll() {
				if(this.cartList.length === 0) return false
				return !this.cartList.find(item => !item.checked)
			}
		},
		methods: {
			checkClick() {
				if(this.isSelectAll) {
					this.cartList.forEach(item => item.checked = false)
				} else {
					this.cartList.forEach(item => item.checked = true)
				}
			},
			calcClick() {
				if(!this.isSelectAll) {
					toast('请选择购买的商品')
				}
			}
		}
	}
</script>

<style scoped>
	.bottom-bar {
		height: 40px;
		position: relative;
		z-index: 9;
		background-color: #eee;
		display: flex;
		justify-content: space-between;
		line-height: 40px;
	}
	.check-content {
		display: flex;
	}
	.check-botton {
		margin: 2px 5px 0;
	}
	.caculate {
		background-color: #e0620d;
		height: 100%;
		text-align: center;
		color: #fff;
		padding: 0 5px;
	}
</style>
