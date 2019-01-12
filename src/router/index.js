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
  // import tuijian from '@com/Home/tuijian';
  // import xianshigou from '@com/Home/xianshigou';
  // import yijiuhuanxin from '@com/Home/yijiuhuanxin';
  // import shoujikuaixiu from '@com/Home/shoujikuaixiu';
  // import jiujiuzu from '@com/Home/jiujiuzu';
  // import toutiao from '@com/Home/toutiao';
import List from '@com/List';
import Message from '@com/Message';
import Cart from '@com/Cart';
import Mine from '@com/Mine';
import Stores from '@com/Stores';
import SearchForm from '@com/SearchForm';
import Login from '@com/Login';
import Register from '@com/Register';
//实例化路由
const routes = [
  {
    name:'Home',
    path:'/home',
    component:Home,
    // children:[
    //   {
    //     name:'tuijian',
    //     path:'/home/tuijian',
    //     component:tuijian
    //   },
    //   {
    //     name:'xianshigou',
    //     path:'/home/xianshigou',
    //     component:xianshigou
    //   },
    //   {
    //     name:'yijiuhuanxin',
    //     path:'/home/yijiuhuanxin',
    //     component:yijiuhuanxin
    //   },
    //   {
    //     name:'shoujikuaixiu',
    //     path:'/home/shoujikuaixiu',
    //     component:shoujikuaixiu
    //   },
    //   {
    //     name:'jiujiuzu',
    //     path:'/home/jiujiuzu',
    //     component:jiujiuzu
    //   },
    //   {
    //     name:'toutiao',
    //     path:'/home/toutiao',
    //     component:toutiao
    //   }
    // ]
  },
  {
    name:'List',
    path:'/list',
    component:List
  },
  {
    name:'Mine',
    path:'/mine',
    component:Mine,
    meta:{
      requireAuth:true
    }
  },
  {
    name:'Message',
    path:'/message',
    component:Message,
    meta:{
      requireAuth:true
  }
  },
  {
    name:'Cart',
    path:'/cart',
    component:Cart,
    meta:{
      requireAuth:true
  }
  },
  {
    name:'Stores',
    path:'/stores',
    component:Stores
  },
  {
    name:'SearchForm',
    path:'/search-form',
    component:SearchForm
  },
  { name:'Login',
    path: '/login', 
    component: Login
   },
   { name:'Register',
    path: '/register', 
    component: Register
   },
  { path:'/',redirect:{name:'Home'}}
]

let router = new Router({
  // mode:'history',
  routes
});
// 全局路由守卫
// 在进入某个路由前执行的代码
router.beforeEach((to,from,next)=>{
  if(to.meta.requireAuth){
    // 判断是否登录
    if(sessionStorage.getItem('token')){
      // if(router.app.$store.state.token){
          next();
      }else{
          next({
              path:'/login'
          })
      }
  }else{
    // 要进入to路由，必须调用next()方法
      next();
  }
});
router.afterEach((to,from)=>{
  //console.log('after')
})
export default router;