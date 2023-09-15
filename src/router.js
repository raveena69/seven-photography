// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/components/LandingPage.vue'
import MyWork from '@/components/my-work/MyWork.vue'

const routes = [
    {
        path: '/',
        name: 'LandingPage',
        component: LandingPage
    },
    {
        path: '/my-work',
        name: 'MyWork',
        component: MyWork
    }
]

const router = createRouter({ history: createWebHistory(), routes })
export default router