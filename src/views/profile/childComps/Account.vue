<template>
	<div class="account">
		<div class="account-item">
			<div class="number">
				<span class="balance">0.00</span>元
			</div>
			<div>我的余额</div>
		</div>
		<div class="account-item">
			<div class="number">
				<span class="balance">0</span>个
			</div>
			<div>我的优惠</div>
		</div>
		<div class="account-item">
			<div class="number">
				<span class="balance">0</span>分
			</div>
			<div>我的积分</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	.account {
		display: flex;
		text-align: center;
		font-size: 16px;
	}
	.account-item {
		flex: 1;
		border-right: solid 1px #F2F2F2;
		padding: 20px;
	}
	.account-item:last-child {
		border: none;
	}
	.number {
		margin-bottom: 5px;
	}
	.balance {
		color: #E0620D;
		font-weight: 700;
		font-size: 24px;
	}
</style>
