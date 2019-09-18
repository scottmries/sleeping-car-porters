import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _057b70ba = () => interopDefault(import('../pages/cues.vue' /* webpackChunkName: "pages/cues" */))
const _2b46a494 = () => interopDefault(import('../pages/zodiac.vue' /* webpackChunkName: "pages/zodiac" */))
const _038d0928 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
      path: "/cues",
      component: _057b70ba,
      name: "cues"
    }, {
      path: "/zodiac",
      component: _2b46a494,
      name: "zodiac"
    }, {
      path: "/",
      component: _038d0928,
      name: "index"
    }],

  fallback: false
}

export function createRouter() {
  return new Router(routerOptions)
}
