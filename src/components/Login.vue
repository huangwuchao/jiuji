<template>
    <div id="Login">
       <mt-header title="登陆">
            <router-link to="/" slot="left">
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
        <div class="top">
            <p class="zh yuanse">账号密码登陆</p>
            <span>|</span>
            <p class="dx">短信验证登陆</p>
        </div>
        <mt-field label="用户名" placeholder="请输入用户名/手机号" v-model="username"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
        <mt-button type="default" class="denlu" @click="login">登陆</mt-button>
        <div class="bot">
            <p class="yh" @click="selected('/register')">新用户注册</p>
            <p class="wj">忘记密码</p>
        </div>
        <div class="koukou">
            <span>第三方登陆</span>
            <div class="lujin">
                <a href="https://graph.qq.com/oauth2.0/authorize?response_type=token&client_id=100302635&redirect_uri=https://m.9ji.com/account/bind%3fredirect=%2Fmember">
                    <img src="//img2.ch999img.com/m/static/assets/qq.7df9dcd2828ad5eaeee0e76ce8f7d917.png" alt="">
                </a>
                
            </div>
        </div>
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
        show: false,
        tabs:[
          {
            text:'首页',
            name:'Home',
            icon:'#icon-shouye',
            path:'/'
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
      },
      login(){
          sessionStorage.setItem('token','111');
          this.$router.push('/')
          //this.$router.go(-1);
      }
    }
}
</script>
<style lang="scss" scoped>
    #Login{
        width: 100%;
        height: 100%;
        flex: 1;
        overflow: hidden;
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
    .top{
        display: flex;
        margin: .8rem 2.16rem;
        color:#333;
        font-size:.373333rem;
            span{
                margin: 0 .533333rem;
            }
    }
    .denlu{

        width: 8.533333rem;
        margin:.266667rem 0 0 .666667rem;
    }
    .bot{
        display: flex;
        margin: 20px;
        color:#333;
        font-size:14px;
        justify-content:space-between;
    } 
    .koukou{
        margin-top:1.866667rem;
        margin-left:4.08rem;
        display: flex;
        justify-content:flex-end;
        flex-direction:column;
            span{
                color: #9c9c9c;
                font-size: .373333rem;
            } 
            .lujin{
                margin-left:.48rem;
                margin-top:.266667rem;
                width: .906667rem;
                height: .906667rem;
                display: flex;
                justify-content:flex-end;
                flex-direction:column;
                a{  
                    display: block;
                   
                     img{
                    width: .906667rem;
                    height: .906667rem;
                }
                }
               

            }
    } 
    .yuanse{
        color:#f21c1c;
    } 
    }
</style>


