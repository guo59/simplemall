<template>
  <div class="profile">
		<nav-bar class="nav-bar">
			<div slot='center'>我的信息</div>
		</nav-bar>
		<user-info/>
		<account/>
		<list-view :listData="orderList"/>
		<list-view :listData="serviceList"/>
	</div>
</template>

<script>
	import NavBar from 'components/common/navbar/NavBar.vue'
	
	import UserInfo from './childComps/UserInfo.vue'
	import Account from './childComps/Account.vue'
	import ListView from './childComps/ListView.vue'
	
	export default {
		components: {
			NavBar,
			UserInfo,
			Account,
			ListView
		},
		data() {
			return {
				orderList: [
					{icon: 'comment-o', 'iconColor': '#ff8198', 'info': '我的消息'},
				    {icon: 'gift-o', iconColor: '#fc7b53', info: '积分商城'},
				    {icon: 'vip-card-o', iconColor: '#ffc636', info: '会员卡'}
				],
				serviceList: [
				  {icon: 'shopping-cart-o', iconColor: '#ff8198', info: '我的购物车'},
				  {icon: 'down', iconColor: '#ff8198', info: '下载购物APP'},
				]
			}
		}
	}
</script>

<style scoped>
	.nav-bar {
		background-color: var(--color-tint);
		color: #fff;
	}
</style>
