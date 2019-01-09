<template>
  <div id="app">
    <router-view/>
    <!-- <div class="top"></div> -->
    <div class="bottom">
      <a href="javascript:;" v-for="(tab,idx) in tabs" :key="tab.path" :class="{active:active==tab.path}" @click="selected(tab.path)">
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
  import myicons from "@/plugins/icons";
  Vue.use(myicons);

  // 引入并使用MintUI
  import MintUI from "mint-ui";
  Vue.use(MintUI);
  
  export default {
    name: 'App',
    data(){
      return{
        tabs:[
          {
            text:'首页',
            name:'Home',
            icon:'#icon-shouye',
            path:'/home'
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
        active:'/home'
      }
    },
    methods:{
      selected(path){
        // console.log(path);
        this.active = path;
        this.$router.push({path});
      }
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
      height: 3.125rem;
      display: flex;
      box-shadow: 0 -1px 2px #ccc;
      .is-selected{
        color: #c80f1e;
      }
      a{
        width: 20%;
        color: #333;
        box-sizing: border-box;
        font-size: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        .icon {
          width: 1.5rem;
          height: 1.5rem;
          vertical-align: -0.15em;
          fill: currentColor;
          overflow: hidden;
        }
        .badge{
          height: .875rem;
          line-height: .875rem;
          padding: 0 .25rem;
          font-size: .75rem;
          background: #f21c1c;
          color: #fff;
          border-radius: .875rem;
          position: absolute;
          top: .125rem;
          right: .9375rem;
        }
      }
      .active{
        color:#c80f1e;
      }
    }
  }
</style>
