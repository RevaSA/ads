import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
    },
    {
        path: '/ad/:id',
        name: 'ad',
        props: true,
        component: () => import(/* webpackChunkName: "ad" */ '@/views/Ad/Ad.vue'),
    },
    {
        path: '/new',
        name: 'newAd',
        component: () => import(/* webpackChunkName: "new-ad" */ '@/views/Ad/New.vue'),
    },
    {
        path: '/list',
        name: 'list',
        component: () => import(/* webpackChunkName: "list" */ '@/views/Ad/List.vue'),
    },
    {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "login" */ '@/views/Auth/Login.vue'),
    },
    {
        path: '/registration',
        name: 'reg',
        component: () => import(/* webpackChunkName: "reg" */ '@/views/Auth/Registration.vue'),
    },
    {
        path: '/orders',
        name: 'orders',
        component: () => import(/* webpackChunkName: "orders" */ '@/views/User/Orders.vue'),
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

export default router
