import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

let indexRoutes = {
	mode: 'history',
	routes: [{
		path: '/',
		redirect: '/my-cv'
	},{
		path: '/animation-test',
		component: () => import("@/pages/animation-test")
	},{
		path: '/my-cv',
		component: () => import("@/pages/my-cv")
	}]
}


const router = new VueRouter(indexRoutes)

router.addRoutes([{
	path: '*',
	redirect: "/"
}])
export default router