import {debounce} from './utils.js'
import {POP, NEW, SELL} from './const.js' 
import BackTop from 'components/content/backTop/BackTop.vue'

export const itemListenerMixin = {
	data() {
		return {
			itemImgLinstener: null
		}
	},
	mounted() {
		let refresh = debounce(this.$refs.scroll.refresh, 200)
		this.itemImgLinstener = () => {
			refresh()
		}
		this.$bus.$on('itemImageLoad', this.itemImgLinstener)
	}
}

export const backTopMixin = {
	components: {
		BackTop
	},
	data() {
		return {
			isShowBackTop: false
		}
	},
	methods: {
		backClick() {
			this.$refs.scroll.scrollTo(0, 0)
		}
	}
}

export const tabControlMixin = {
	data() {
		return {
			currentType: POP
		}
	},
	methods: {
		tabClick(index) {
			switch(index) {
				case 0:
					this.currentType = POP
					break
				case 1:
					this.currentType = NEW
					break
				case 2:
					this.currentType = SELL
					break
			}
		}
	}
}