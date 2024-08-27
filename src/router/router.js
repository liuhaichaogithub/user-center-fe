import {createMemoryHistory, createRouter, createWebHashHistory} from 'vue-router'

import HomeView from '../components/HomeView.vue'
import Login from '../components/Login.vue'
import index from '../App.vue'

const routes = [
    {path: '/home', component: HomeView},
    {path: '/login', component: Login},
    {path: '/', component: Login},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router