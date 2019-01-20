<template>
  <div id="app">
    <router-view/>
    <!-- <div class="top"></div> -->
    <div class="bottom">
      <a href="javascript:;" v-for="(tab,idx) in tabs" :key="tab.path" :class="{'active' : $route.name == tab.name}" @click="selected(tab.path)">
        <svg class="icon" aria-hidden="true">
          <use :xlink:href="tab.icon"></use>
        </svg>
        <span class="bot_text">{{tab.text}}</span>
        <span class="badge" v-if='idx===3'>0</span>
      </a>
    </div>
  </div>
</template>

<script>
  import Vue from "vue";

  //引入并使用插件
  // import myicons from "@/plugins/icons";
  // Vue.use(myicons);

  //引入axios
  import axios from 'axios';

  // 引入并使用MintUI
  import MintUI from "mint-ui";
  Vue.use(MintUI);

  // 把axios写入Vue的原型对象，方便后面调用
  Vue.prototype.$axios = axios;
  
  export default {
    name: 'App',
    data(){
      return{
        tabs:[
          {
            text:'首页',
            name:'tuijian',
            icon:'#icon-shouye',
            path:'/'
          },{
            text:'分类',
            name:'List',
            icon:'#icon-fenlei',
            path:'/list'
          },{
            text:'消息',
            name:'Message',
            icon:'#icon-xiaoxi',
            path:'/message'
          },{
            text:'购物车',
            name:'Cart',
            icon:'#icon-tubiaozhizuomoban',
            path:'/cart'
          },{
            text:'我的',
            name:'Mine',
            icon:'#icon-wode',
            path:'/mine'
          }
        ],
        //active:'/home'
      }
    },
    methods:{
      selected(path){
        // console.log(path);
        //this.active = path;
        this.$router.push({path});
      }
    },
    mounted(){
      console.log(this.$route.name)
      }
  }
</script>

<style lang="scss">
  @import "./sass/common.scss";
  @import "mint-ui/lib/style.css";

  #app{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    // .top{
    //   width: 100%;
    //   height: 100%;
    //   flex: 1;
    //   overflow: hidden;
    // }
    .bottom{
       width: 100%;
      height: 1.333333rem;
      display: flex;
      box-shadow: 0 .026667rem .053333rem #ccc;
      background: hsla(0,0%,98%,.98);
      .is-selected{
        color: #c80f1e;
      }
      a{
        width: 20%;
        color:#9c9c9c;
        font-size: .266667rem;
        display: flex;  
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        
        .icon {
          width: .64rem;
          height: .64rem;
          vertical-align: .048rem;
          fill: currentColor;
          overflow: hidden;
        //   background:#9c9c9c;
        }
        .badge{
          height: .373333rem;
          line-height: .373333rem;
          padding: 0 .106667rem;
          font-size: .32rem;
          background: #f21c1c;
          color: #fff;
          border-radius: .373333rem;
          position: absolute;
          top: .053333rem;
          right: .4rem;
        }
      }
      .active{
        color:#c80f1e;
      }
    }
  }
</style>
  