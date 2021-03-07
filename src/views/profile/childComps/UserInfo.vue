<template>
	<div class="user-info">
		<div class="avatar">
			<img src="~assets/img/profile/avatar.png" />
		</div>
		<div class="login-info">
			<div class="login">登录/注册</div>
			<div class="phone">
				<van-icon name="phone-o" />
				<span>暂无绑定手机号</span>
			</div>
		</div>
		<div class="arrow">
			<van-icon name="arrow" size='30' />
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	.user-info {
		display: flex;
		background-color: #E0620D;
		color: #fff;
		padding: 20px;
		align-items: center;
	}
	.avatar {
		border-radius: 50%;
		background-color: #F2F2F2;
		margin-right: 20px;
	}
	.avatar img {
		width: 80px;
		height: 80px;
	}
	.login-info {
		flex: 1;
		line-height: 1.5;
	}
	.arrow {
		width: 60px;
		text-align: center;
	}
</style>
