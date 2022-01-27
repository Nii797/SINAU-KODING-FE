import Vue from "vue";
import VueRouter from "vue-router";
import Home from '../view/Home';    
import Login from '../view/Login';
import Data from '../view/Data';
import Homes from '../view/Homes';

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
    },
    {
        path: '/data',
        name: 'Data',
        component: Data
    },
    {
        path: '/homes',
        name: 'Homes',
        component: Homes
    },
];

const router = new VueRouter({
    node: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;  