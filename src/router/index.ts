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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
