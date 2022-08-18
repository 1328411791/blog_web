import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/login')
    }
]

const router = createRouter({
    mode:"hash",
    history: createWebHashHistory(),
    routes
})
// 导出路由
export default router;
