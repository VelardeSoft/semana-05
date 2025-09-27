import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../shared/presentation/main-layout.component.vue'

const routes = [
  {
    path: '/', component: MainLayout,
    children: [
      {
        path: '', name: 'Home', component: () => import('../views/Home.vue')
      }
      // Aquí puedes agregar más rutas hijo que se mostrarán dentro del layout
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
