import {createRouter, createWebHashHistory} from 'vue-router'
import HelloWorld from "@/components/HelloWorld";

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/login')
    },{
        path: '/',
        name: 'home',
        component:HelloWorld
    }
]

const router = createRouter({
    base:'/dist/',
    history: createWebHashHistory(),
    routes
})
// 导出路由


export default router;
