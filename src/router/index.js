import { createRouter, createWebHistory } from 'vue-router'
import Feeds from '../pages/feeds/feeds.vue'
import Auth from '../pages/auth/auth.vue'

const routes = [
    {
        path: '/',
        name: 'Feeds',
        component: Feeds
    },
    {
        path: '/auth',
        name: 'Auth',
        component: Auth
    }
]

const router = createRouter({
    routes
})

export default router
