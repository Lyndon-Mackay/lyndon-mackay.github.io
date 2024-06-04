import { createMemoryHistory, createRouter } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/rust', name: 'rust', component: () => import('../views/RustView.vue') },
  { path: '/csharp', name: 'csharp', component: () => import('../views/CsharpView.vue') },
  { path: '/database', name: 'database', component: () => import('../views/DatabaseView.vue') },
  { path: '/web', name: 'web', component: () => import('../views/WebdevelopmentView.vue') },
  {
    path: '/construction',
    name: 'construction',
    component: () => import('../views/ConstructionView.vue')
  }
]
const router = createRouter({
  history: createMemoryHistory(),
  routes
})
export default router
