import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

let indexRoutes = {
	mode: 'history',
	routes: [{
		path: '/',
		redirect: '/ky-test'
	},{
		path: '/animation-test',
		component: () => import("@/pages/animation-test")
	},{
		path: '/my-cv',
		component: () => import("@/pages/my-cv")
	},{
		path: '/ky-test',
		component: () => import("@/pages/ky-test")
	}]
}


const router = new VueRouter(indexRoutes)

router.addRoutes([{
	path: '*',
	redirect: "/"
}])
export default router