import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
    {
        path:'*',
        redirect:'/home'
    },
    {
        name:'home',
        component:() => import('./page/home'),
        meta:{
            title:'主页'
        }
    },
    {
        name:'classify',
        component:() => import('./page/classify'),
        meta:{
            title:'分类'
        }
    },
    {
        name:'want',
        component:() => import('./page/want'),
        meta:{
            title:'吃什么'
        }
    },
    {
        name:'cart',
        component:() => import('./page/cart'),
        meta:{
            title:'购物车'
        }
    },
    {
        name:'mine',
        component:() => import('./page/mine'),
        meta:{
            title:'我的'
        }
    },
    {
        name:'list',
        component:() => import('./page/list'),
        meta:{
            title:'商品列表'
        }
    },
    {
        name:'details',
        component:() => import('./page/details'),
        meta:{
            title:'商品详情'
        }
    },
    
];
// add route path
routes.forEach(route => {
    route.path = route.path || '/' + (route.name || '');
  });
  
  const router = new Router({ routes });
  
  router.beforeEach((to, from, next) => {
    const title = to.meta && to.meta.title;
    if (title) {
      document.title = title;
    }
    next();
  });
  
  export {
    router
  };

