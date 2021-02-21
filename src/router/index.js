import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
//import Students from '../views/students.vue'
//import Student from '../views/student.vue'
//import Login from '../views/login.vue'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    // name: 'Home',
    redirect: "/login",
    // component: Home
}, {
    path: '/students',
    name: 'Students',
    component: () =>
        import ( /* webpackChunkName: "students" */ '../views/students.vue'),
}, {
    path: '/login',
    name: 'Login',
    component: () =>
        import ( /* webpackChunkName: "login" */ '../views/login.vue'),
}, {
    path: '/students/:id',
    name: 'Student',
    component: () =>
        import ( /* webpackChunkName: "student" */ '../views/student.vue'),
    props: true
}]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router