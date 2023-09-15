// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/components/LandingPage.vue'
import MyWorkInside from '@/components/my-work/MyWorkInside.vue'

const routes = [
    {
        path: '/',
        name: 'LandingPage',
        component: LandingPage
    },
    {
        path: '/my-work',
        name: 'MyWorkInside',
        component: MyWorkInside
    }
]

const router = createRouter({ history: createWebHistory(), routes })
export default router