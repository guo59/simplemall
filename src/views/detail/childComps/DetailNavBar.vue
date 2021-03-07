<template>
	<div class="detail-navbar">
		<nav-bar>
			<div slot='left' class="back" @click="backClick">
				<img src='~assets/img/common/back.svg' />
			</div>
			<div slot='center' class="title">
				<div v-for="(item, index) in titles" class="title-item"
				  :class="{active: currentIndex == index}"
					@click="itemClick(index)">{{item}}</div>
			</div>
		</nav-bar>
	</div>
</template>

<script>
	import NavBar from 'components/common/navbar/NavBar'	
	
	export default {
		components: {
			NavBar
		},
		data() {
			return {
				titles: ['商品', '参数', '评论', '推荐'],
				currentIndex: 0
			}
		},
		methods: {
			backClick() {
				this.$router.back()
			},
			itemClick(index) {
				this.currentIndex =index
				this.$emit('titleClick', index)
			}
		}
	}
</script>

<style scoped>
	.title {
		display: flex;
	}
	.title-item {
		color: #000;
		flex: 1;
	}
	.back {
		margin-top: 6px;
		margin-left: 10px;
	}
	.active {
		color: var(--color-high-text);
	}
</style>
