<template>
	<div class="check-botton">
		<van-icon name="success" class='check-icon' :class='{check: isChecked}' />
	</div>
</template>

<script>
	export default {
		props: {
			isChecked: {
				type: Boolean,
				default: false
			}
		}
	}
</script>

<style scoped>
	.check-icon {
		border: 2px solid #aaa;
		border-radius: 50%;
		color: #fff;
	}
	.check {
		background-color: #e0620d;
	}
</style>
