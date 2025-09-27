import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../shared/presentation/main-layout.component.vue'
import BreweriesView from '../brewery/presentation/breweries-view.component.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: BreweriesView
      },
      {
        path: 'breweries',
        name: 'breweries',
        component: BreweriesView
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
