import { createRouter,createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/login')
    }
]

const router = createRouter({
    mode:"history",
    history: createWebHistory(),
    routes
})
// 导出路由
export default router;
