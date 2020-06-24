import Vue from 'vue';
import Home from '../views/Home.vue';
import { IonicVueRouter } from '@ionic/vue';
import News from "../views/News";
import Brands from "../views/Brands";

Vue.use(IonicVueRouter);

export default new IonicVueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/news',
      name: 'news',
      component: News
      // component: () =>
      //     import( '../views/News.vue')
    },
    {
      path: '/new/:id',
      component: () =>
          import('../views/New.vue')
    },
    {
      path: '/brands',
      name: 'brands',
      component: Brands
      // component: () =>
      //     import( '../views/Brands.vue')
    },
    {
      path: '/brand/:id',
      component: () =>
          import('../views/Brand.vue')
    },
    {
      path: '/products',
      name: 'products',
      component: () =>
          import('../views/Products.vue')
    },
    {
      path: '/products/:id',
      component: () =>
          import('../views/Product.vue')
    },
    {
      path: '/contact',
      component: () =>
          import('../views/Contact.vue')
    },
  ]
});