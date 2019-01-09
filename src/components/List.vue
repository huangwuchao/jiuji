<template>
    <div id="List">
        <!-- <mt-header title="商品分类" >
        <router-link to="/Home" slot="left">
            <mt-button icon="back"></mt-button>
            </router-link>
        <mt-button icon="more" slot="right" v-on:click="show = !show"></mt-button>
        </mt-header> -->
        <div class="list-top">
          <div class="hom" @click="selected('/home')">
            <
          </div>
          <a href="#" class="sou">
                iPhone XS Max
          </a>
          <div class="tab" v-on:click="show = !show">
            ...
          </div>
        </div>
        <div class="daohan" v-if="show">
            <a href="javascript:;" v-for="tab in tabs" :key="tab.path" :class="{active:active==tab.path}" @click="selected(tab.path)">
                <svg class="icon" aria-hidden="true">
                <use :xlink:href="tab.icon"></use>
                </svg>
                <span class="bot_text">{{tab.text}}</span>
                <!-- <span class="badge" v-if='idx===2'>0</span> -->
            </a>
        </div>
    </div>
    
    
</template>
<script>
    import { PaletteButton } from 'mint-ui';
    import Vue from 'vue';
    Vue.component(PaletteButton.name, PaletteButton);
export default {
    data(){
      return{
        show: false,
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

<style lang="scss" scoped>
     #List{
        width: 100%;
        height: 100%;
        flex: 1;
        overflow: hidden;
          .list-top{
            height: 2.75rem;
            background-repeat: no-repeat;
            background-position: top;
            background-size: cover;
            background-color: rgba(250, 250, 250, 0.98);
            display: flex;
              .hom{
                height: 2.75rem;
                font-size: 2rem;
                color:#333;
                margin-left:10px;
              }
              .sou{
                display: block;
                background: #e3e3e3;
                border-radius: .3125rem;
                height: 1.875rem;
                width: 300px;
                margin: 8px 15px 0 15px;
                padding: 0 .625rem;
                color: #9c9c9c;
                line-height: 1.875rem;
              }
              .tab{
                height: 20px;
                font-size: 2rem;
                color:#333;
              }
          }
     }
     .daohan{
      width: 100%;
      height: 3.125rem;
      display: flex;
      box-shadow: 0 -1px 2px #ccc;
      background-color: #333;
      .is-selected{
        color: #c80f1e;
      }
      a{
        width: 25%;
        color:#9c9c9c;
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
        //   background:#9c9c9c;
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
    //   .active{
    //     color:#c80f1e;
    //   }
    }
</style>
