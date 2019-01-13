<template>
    <div id="Register">
        <mt-header title="用户注册">
            <router-link to="/login" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <mt-button icon="more" slot="right" v-on:click="show = !show"></mt-button>
        </mt-header>
       <div class="daohan" v-if="show">
            <a href="javascript:;" v-for="tab in tabs" :key="tab.path" :class="{active:active==tab.path}" @click="selected(tab.path)">
                <svg class="icon" aria-hidden="true">
                <use :xlink:href="tab.icon"></use>
                </svg>
                <span class="bot_text">{{tab.text}}</span>
                <!-- <span class="badge" v-if='idx===2'>0</span> -->
            </a>
        </div>
        <mt-field label="用户名" placeholder="请输入用户名/手机号" v-model="username"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
        <mt-field label="验证码" v-model="captcha">
            <img src="../assets/timg.jpg" height="45px" width="100px">
        </mt-field>
        <div class="shuomin">
            <span>
                <input type="checkbox" name="" id="">
                我已经阅读并同意
                <a href="JavaScript:;">《九机网用户协议》</a>
            </span>
        </div>
         <mt-button type="default" class="denlu">注册</mt-button>
    </div>
</template>

<script>
    import Axios from 'axios';
    import { PaletteButton } from 'mint-ui';
    import Vue from 'vue';
export default {
    data(){
      return{
        username:'',
        password:'',
       
        captcha:'',
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
        active:'/home',
        
        
      }
    },
    methods:{
      selected(path){
        // console.log(path);
        this.active = path;
        this.$router.push({path});
      },
      chuang(index){
        this.index=index
      }
    }
}
</script>
<style lang="scss" scoped>
    #Register{
        width: 100%;
        height: 100%;
        flex: 1;
        overflow: hidden;
    }
    .daohan{
      width: 100%;
      height: 1.333333rem;
      display: flex;
      box-shadow: 0 .026667rem .053333rem #ccc;
      background-color: #333;
      .is-selected{
        color: #c80f1e;
      }
      a{
        width: 25%;
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
   
    }
    .denlu{

        width: 8.533333rem;
        margin:.266667rem 0 0 .666667rem;
    }
    .shuomin{
        margin-top: 20px;
            input{
                margin-top: 5px;
            }
            span{
                display: flex;
                font-size:14px;
                margin-left:10px;
            }
    }
</style>

