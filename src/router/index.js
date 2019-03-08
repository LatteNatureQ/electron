import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const pageHome = ()=>import('../components/pageHome.vue')
const router = new VueRouter({
    routes: [{
            path: '/',
            component: pageHome
        },
        {
            path: '/pageHome',
            component: pageHome
        },
    ]
})
export default router