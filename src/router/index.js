import Vue from 'vue'
import store from '../store/index'
import Router from 'vue-router'
import Error404 from '@/views/error/Error404'
import Layout from '@/views/layout/Layout'

import NewMain from '@/views/new/Main'

import BlogMain from '@/views/blog/Main'
import BlogAdd from '@/views/blog/Add'
import BlogEdit from '@/views/blog/Edit'
import BlogDetails from '@/views/blog/Details'

import Readme from '@/views/Readme'
import License from '@/views/License'

Vue.use(Router)

export const constantRouterMap =  [
    
    {
        path: '/user/new',
        redirect:'/user/new/main',
        component:Layout,
        meta:{
            type:"user",
            icon:'el-icon-star-off',
            title:'最新动态'
        },
        children: [
            {
                path: 'main',
                component: NewMain,
                meta:{ title:'最新动态' }
            }
        ]
    },
    {
        path: '/user/blog',
        redirect:'/user/blog/main',
        component:Layout,
        meta:{
            type:"user",
            icon:'el-icon-edit-outline',
            title:'博客列表'
        },
        children: [
            {
                path: 'main',
                component: BlogMain,
                meta:{ title:'博客列表' }
            },
            {
                path: 'add',
                component: BlogAdd,
                meta:{ title:'发表博客' }
            },
            {
                path: 'edit/:id',
                component: BlogEdit,
                meta:{ title:'编辑博客' }
            },
            {
                path: 'details/:id',
                component: BlogDetails,
                meta:{ title:'博客详情' }
            }
        ]
    },
    {
        path: '/user/readme',
        redirect:'/user/readme/main',
        component:Layout,
        meta:{
            type:"user",
            icon:'el-icon-document',
            title:'README.md'
        },
        children: [
            {
                path: 'main',
                component: Readme,
                meta:{ title:'README.md' }
            }
        ]
    },
    {
        path: '/user/license',
        redirect:'/user/license/main',
        component:Layout,
        meta:{
            type:"user",
            icon:'el-icon-setting',
            title:'License'
        },
        children: [
            {
                path: 'main',
                component: License,
                meta:{ title:'License' }
            }
        ]
    },
           


    {
        path: "/404",
        component: Error404
    },
    {
        path: '/',
        redirect:'/user/new',
    },
    { 
        path: "*", 
        redirect: "/404"
    }
]


const router = new Router({
    routes: constantRouterMap
})

router.beforeEach((to, from, next) => {
    Vue.prototype.$setTitle(to.meta.title)
    next()
})
  


export default router