import Vue from "vue";
import VueRouter from "vue-router";
import Home from '../view/Home';    
import Login from '../view/Login';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    }
];

const router = new VueRouter({
    node: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;  