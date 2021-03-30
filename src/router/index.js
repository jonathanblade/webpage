import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CV from '../views/CV.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cv',
    name: 'CV',
    component: CV
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
