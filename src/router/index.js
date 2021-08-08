import { createRouter, createWebHistory } from 'vue-router'
import Feeds from '../pages//feeds/feeds.vue'

const routes = [
    {
        path: '/',
        name: 'Feeds',
        component: Feeds
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
