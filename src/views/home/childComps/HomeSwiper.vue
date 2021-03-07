<template>
	<swiper>
		<swiper-item v-for="item in banners" :key="item.value">
			<a href="#">
				<img :src="item.image" alt="" @load="imageLoad" />
			</a>
		</swiper-item>
	</swiper>
</template>

<script>
	import Swiper from 'components/common/swiper/Swiper.vue'
	import SwiperItem from 'components/common/swiper/SwiperItem.vue'
	
	export default {
		name: 'HomeSwiper',
		components: {
			Swiper,
			SwiperItem
		},
		data() {
			return {
				isLoad: false
			}
		},
		props: {
			banners: {
				type: Array,
				default() {
					return []
				}
			}
		},
		methods: {
			imageLoad() {
				if(!this.isLoad) {
					this.$emit('swiperImageLoad')
					this.isLoad = true
				}
			}
		}
	}
</script>

<style>
</style>
