/*
 * @Author: Chen
 * @Date: 2025-08-01 14:50:28
 * @LastEditors: 111
 * @LastEditTime: 2025-08-01 15:17:00
 * @FilePath: \my_pro_qiyemenhu\admin\src\router\config.js
 * @Description: 
 * Copyright (c) 2025 by ${Chen}, All Rights Reserved.
 */
import Home from '@/views/home/Home.vue';
import Center from '@/views/center/Center.vue';
import UserList from '@/views/user-manage/UserList.vue';
import NewsAdd from '@/views/news-manage/newsAdd.vue';
import UserAdd from '@/views/user-manage/UserAdd.vue';
import NewsList from '@/views/news-manage/newsList.vue';
import ProductAdd from '@/views/product-manage/ProductAdd.vue';
import ProductList from '@/views/product-manage/ProductList.vue';

const routes = [
    {
        path: '/index',
        component: Home
    },
    {
        path: '/center',
        component: Center
    },
    {
        path: '/user-manage/adduser',
        component: UserAdd
    },
    {
        path: '/user-manage/userlist',
        component: UserList
    },
    {
        path: '/news-manage/addnews',
        component: NewsAdd
    },
    {
        path: '/news-manage/newslist',
        component: NewsList
    },
    {
        path: '/product-manage/addproduct',
        component: ProductAdd
    },
    {
        path: '/product-manage/productlist',
        component: ProductList
    }
]

export default routes;