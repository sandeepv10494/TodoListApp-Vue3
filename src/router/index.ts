import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue'
import List from '../views/List.vue'
import All from '../views/All.vue'
import Work from '../views/Work.vue'
import Music from '../views/Music.vue'
import Travel from '../views/Travel.vue'
import Study from '../views/Study.vue'
import Sport from '../views/Sport.vue'
import Shopping from '../views/Shopping.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/lists'
  },
  {
    path: '/lists',
    name: 'Lists',
    component: List
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/all',
    name: 'All',
    component: All
  },
  {
    path: '/work',
    name: 'Work',
    component: Work
  },
  {
    path: '/music',
    name: 'Music',
    component: Music
  },
  {
    path: '/travel',
    name: 'Travel',
    component: Travel
  },
  {
    path: '/study',
    name: 'Study',
    component: Study
  },
  {
    path: '/sport',
    name: 'Sport',
    component: Sport
  },
  {
    path: '/shopping',
    name: 'Shopping',
    component: Shopping
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
