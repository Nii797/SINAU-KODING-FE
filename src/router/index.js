import Vue from "vue";
import VueRouter from "vue-router";
import Home from '../view/Home';    
import About from '../view/About';
import Contact from '../view/Contact';
import Login from '../view/Login';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
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