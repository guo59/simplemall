import {request} from './request.js'

export function getDetail(iid) {
	return request({
		url: '/detail',
		params: {
			iid
		}
	})
}

export function getRecommend() {
	return request({
		url: '/recommend'
	})
}

export class Goods {
	constructor(itemInfo, columns, service) {
	    this.title = itemInfo.title;
			this.price = itemInfo.price;
			this.oldPrice = itemInfo.oldPrice;
			this.discount = itemInfo.discountDesc;
			this.discountBg = itemInfo.discountBgColor;
			this.columns = columns;
			this.service = service;
			this.realPrice = itemInfo.lowNowPrice
			this.desc = itemInfo.desc
	}
}