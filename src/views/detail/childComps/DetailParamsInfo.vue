<template>
	<div class="params-info" v-if="Object.keys(paramsInfo).length !== 0">
		<table v-for="table in paramsInfo.rule.tables" class="info-size">
			<tr v-for="tr in table">
				<td v-for="td in tr">{{td}}</td>
			</tr>
		</table>
		
		<table class="info-param">
			<tr v-for="item in paramsInfo.info.set">
				<td class="param-key">{{item.key}}</td>
				<td class="param-value">{{item.value}}</td>
			</tr>
		</table>
		
		<div class="info-img" v-if="paramsInfo.info.images">
			<img :src="paramsInfo.info.images[0]" alt="" />
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			paramsInfo: {
				type: Object,
				default() {
					return {}
				}
			}
		}
	}
</script>

<style scoped>
	.params-info {
		padding: 20px 5px;
		font-size: 14px;
		border-bottom: 5px solid #f2f5f8;
	}
	.params-info table {
		width: 100%;
		border-collapse: collapse;
	}
	.params-info table tr {
		height: 42px;
	}
	.params-info table tr td {
		border-bottom: 1px solid rgba(0,0,0,.1);
	}
	.param-key {
		width: 95px;
	}
	.param-value {
		color: #e0620d;
	}
	.info-img img {
		width: 100%;
	}
</style>
