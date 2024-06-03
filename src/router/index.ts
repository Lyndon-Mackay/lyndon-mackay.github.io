import { createMemoryHistory, createRouter } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  { path: '/', Name: 'Home', component: HomeView },
  { path: '/rust', component: () => import('../views/RustView.vue') },
  { path: '/csharp', component: () => import('../views/CsharpView.vue') },
  { path: '/database', component: () => import('../views/DatabaseView.vue') },
  { path: '/web', component: () => import('../views/WebdevelopmentView.vue') },
  { path: '/construction', component: () => import('../views/ConstructionView.vue') }
]
const router = createRouter({
  history: createMemoryHistory(),
  routes
})
export default router
