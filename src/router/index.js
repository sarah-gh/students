import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Home.vue'
import Students from '../views/students.vue'
import Student from '../views/student.vue'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Login',
    component: Login
}, {
    path: '/students',
    name: 'Students',
    component: Students
}, {
    path: '/students/:id',
    name: 'Student',
    component: Student
}]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router