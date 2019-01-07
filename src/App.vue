<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view/> -->
    <div class="top"></div>
    <div class="bottom">
      <div v-for="tab in tabs" :key="tab.name">
        <myicons :type="tab.icon"/>
        {{tab.text}}
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from "vue";

  // 引入并使用插件
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
            icon:'home'
          },{
            text:'分类',
            name:'List',
            icon:'tasklist'
          },{
            text:'消息',
            name:'Message',
            icon:'comment-discussion'
          },{
            text:'购物车',
            name:'Cart',
            icon:'paintcan'
          },{
            text:'我的',
            name:'Mine',
            icon:'person'
          }
        ]
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
  .top{
    width: 100%;
    height: 5.875rem;
    flex: 1;
    overflow: hidden;
    background: #e10f02;
  }
  .bottom{
    width: 100%;
    height: 3.125rem;
    display: flex;
    background: #58bc58;
    >div{
      width: 20%;
      color: #333;
      font-size: 10px;
    }
  }
}



</style>
