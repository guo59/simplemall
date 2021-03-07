import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

Vue.use(Vant);
Vue.use(VueLazyLoad, {
	loading: require('./assets/img/common/placeholder.png')
})

FastClick.attach(document.body)

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

new Vue({
  router,
	store,
  render: h => h(App)
}).$mount('#app')
