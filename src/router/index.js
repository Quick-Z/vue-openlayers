import Vue from 'vue'
import VueRouter from 'vue-router'
import FirstMap from '../views/firstMap/FirstMap.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'FirstMap',
    component: FirstMap
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
