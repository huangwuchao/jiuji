<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view/> -->
    <div class="top"></div>
    <div class="bottom">
      
      <div v-for="tab in tabs" :key="tab.name">
        <svg class="icon" aria-hidden="true">
          <use :xlink:href="tab.icon"></use>
        </svg>
        {{tab.text}}
      </div>
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
            icon:'#icon-shouye'
          },{
            text:'分类',
            name:'List',
            icon:'#icon-fenlei'
          },{
            text:'消息',
            name:'Message',
            icon:'#icon-xiaoxi'
          },{
            text:'购物车',
            name:'Cart',
            icon:'#icon-tubiaozhizuomoban'
          },{
            text:'我的',
            name:'Mine',
            icon:'#icon-wode'
          }
        ]
      }
      
    }
  }
</script>

<style lang="scss">
@import "./sass/common.scss";
// @import "mint-ui/lib/style.css";

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
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}


</style>
