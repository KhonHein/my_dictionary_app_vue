import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import PostDetail from '../views/PostDetail.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'homePage',
    component: HomePage
  },
  {
    path:'/postDetail',
    name:'PostDetail',
    component:PostDetail
  },
  {
    path:'/login',
    name:'loginPage',
    component: ()=> import('../views/LoginPage.vue')
    //component:LoginPage// need to import the component
  },
  {
    path:'/register',
    name:'RegisterForm',
    component: ()=> import('../views/RegisterForm.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
