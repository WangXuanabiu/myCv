import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "@/assets/fonts/iconfont.css"
import "@/assets/fonts/iconfont.js"

import "@/assets/scss/common.reset.scss"

Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
