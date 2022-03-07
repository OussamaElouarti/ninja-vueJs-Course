import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About  from '../views/About.vue'
import Jobs  from '../views/Jobs/Jobs.vue'
import JobDetails  from '../views/Jobs/JobDetails.vue'
import notFound  from '../views/404.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs
  },
  {
    path: '/jobs/:id',
    name: 'JobDetails',
    component: JobDetails,
    props: true
  },
  {
    path: '/:catchAll(.*)',
    name: 'notFound',
    component: notFound,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
