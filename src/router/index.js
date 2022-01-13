import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Products',
    component: () => import('@/views/products/AppProducts.vue'),
  },
  {
    path: '/products/new-product',
    name: 'NewProduct',
    component: () => import('@/views/product/FormProduct.vue'),
  },
  {
    path: '/products/update-product/:id',
    name: 'UpdateProduct',
    component: () => import('@/views/product/UpdateProduct.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
