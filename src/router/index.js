import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router);

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })

// 引入路由组件
import Home from '@com/Home';
import List from '@com/List';
import Message from '@com/Message';
import Cart from '@com/Cart';
import Mine from '@com/Mine';

//实例化路由
const routes = [
  {
    name:'Home',
    path:'/home',
    component:Home
  },
  {
    name:'List',
    path:'/list',
    component:List
  },
  {
    name:'Message',
    path:'/message',
    component:Message
  },
  {
    name:'Cart',
    path:'/cart',
    component:Cart
  },
  {
    name:'Mine',
    path:'/mine',
    component:Mine
  },
  { path:'/',redirect:{name:'Home'}}
]

let router = new Router({
  // mode:'history',
  routes
});

export default router;