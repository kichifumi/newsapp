import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Headline from '../views/Headline.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Headline',
    component: Headline,
    props: true
  },
  {
    path: '/business',
    name: 'Business',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Business.vue'),
    props: true
  },
  {
    path: '/entertainment',
    name: 'Entertainment',
    component: () => import(/* webpackChunkName: "about" */ '../views/Entertainment.vue'),
    props: true
  },
  {
    path: '/general',
    name: 'General',
    component: () => import(/* webpackChunkName: "about" */ '../views/General.vue'),
    props: true
  },
  {
    path: '/health',
    name: 'Health',
    component: () => import(/* webpackChunkName: "about" */ '../views/Health.vue'),
    props: true
  },
  {
    path: '/science',
    name: 'Science',
    component: () => import(/* webpackChunkName: "about" */ '../views/Science.vue'),
    props: true
  },
  {
    path: '/sports',
    name: 'Sports',
    component: () => import(/* webpackChunkName: "about" */ '../views/Sports.vue'),
    props: true
  },
  {
    path: '/technology',
    name: 'Technology',
    component: () => import(/* webpackChunkName: "about" */ '../views/Technology.vue'),
    props: true
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
