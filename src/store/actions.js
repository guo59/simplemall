import {
	ADD_COUNTER,
	ADD_TO_CART
} from './mutation-types.js'

export default {
	addCart(context, payload) {
		return new Promise((resolve, reject) => {
			let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
			
			if(oldProduct) {
				context.commit(ADD_COUNTER, oldProduct)
				resolve('加入购物车成功')
			} else {
				payload.count = 1
				context.commit(ADD_TO_CART, payload)
				resolve('加入购物车成功')
			}
		})
	}
}