import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home/Home.vue'
import MainLayout from '../layout/Main/Index.vue'


const routes: Array<RouteRecordRaw> = [

  {
    path: '/',
    name: 'Home',
    component:MainLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      },
      {
        path: 'detail/:id',
        name: 'Detail',
        component: () => import(/* webpackChunkName: "about" */ '../views/Detail/Index.vue')
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
