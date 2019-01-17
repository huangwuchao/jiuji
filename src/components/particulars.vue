<template>
    <div id="part">
        <div class="list-top">
          <div class="hom fa fa-angle-left" @click="selected('/home')">
            
          </div>
          <div class="sou">
              
                <span>商品</span>
                <span>评论</span>
                <span>详情</span>
              
                
          </div>
          <div class="tab fa fa-ellipsis-h" v-on:click="show = !show">
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
        <div class="nav">
                <div class="img">
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">slider1</div>
                        
                            <div class="swiper-pagination"></div>
                        </div>
                    </div>
                </div>
                <div class="pinpai">
                    <p class="p1">
                        Apple iPhone 6 全网通版 金色 32GB 
                        经典型号视网膜屏触控ID性价比之选
                    </p>
                    <p class="p2">
                        <span>【爆款iPhone】A8芯片！后置800万单摄！</span>
                    </p>
                    <div class="d1">
                        <span>￥</span>
                        <span>2099.00</span>
                    </div>
                    <div class="d2">
                        <a href="javascript:;" class="fa fa-bar-chart-o">价格走势</a>
                        <a href="javascript:;" class="fa fa-volume-up">降价通知</a>
                        <a href="javascript:;" class="fa fa-exchange">机型对比</a>
                        <a href="javascript:;" class="fa fa-stack-overflow">开箱展示</a>
                    </div>
                    <p class="p3">温馨提示：iPhone 6市场缺货，产品到货时间得不到保证，建议换定性价比较高的iPhone6s Plus</p>
                
                </div>
                <div class="guige">
                    <div class="timetobuy">
                    <div class="left">
                        <!-- 限时抢购 -->
                        <a href="javascript:;" class="timebuy">
                            <span>规格</span>
                            
                        </a>
                    </div>
                        <!-- 限时抢购右边部分 -->
                       
                        <div class="right">
                                <div class="tbr">
                                    <img src="https://img2.ch999img.com/pic/product/70x70/20180803153357141.png" alt="">
                                    <p>垃圾</p>
                                    <p>￥</p>
                                    
                                    
                                </div>
                        </div>
                  
                </div>    
            </div>
        </div> 
    </div>
</template>
<script>
import Vue from "vue";
import Swiper from "swiper";
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
        active:'/home',
        data:[{children:''},{id:''},{title:''}],
        // data2:[],
        index:0
        
      }
    },
     methods:{
      selected(path){
        // console.log(path);
        this.active = path;
        this.$router.push({path});
      }
     },
    created(){
          var mySwiper = new Swiper('.swiper-container', {
                autoplay: false,//可选选项，自动滑动
                direction : 'horizontal',
            })
    }
}
</script>
<style lang="scss" scoped>
    #part{
        width: 100%;
        height: 100%;
        flex: 1;
        overflow: hidden;
        background-color: #f5f5f5;
        .list-top{
            height: 1.173333rem;
            background-repeat: no-repeat;
            background-position: top;
            background-size: cover;
            background-color: rgba(250, 250, 250, 0.98);
            display: flex;
              .hom{
                height: 1.173333rem;
                font-size: .8rem;
                color:#333;
                margin-left:.266667rem;
                text-align: center;
                line-height: 1.173333rem;
              }
              .sou{
                width: 250px;
                height: 44px;
                display: flex;

                margin:0 36px;
                font-size:18px;
                    span{    
                        display: block;
                        display: inline-block;
                        height: 44px;
                        text-align: center;
                        line-height: 44px;
                        margin-left: 39px;
                       
                    }
              }
              .tab{
                text-align: center;
                line-height: 1.173333rem;
                height: 1.173333rem;
                font-size: .64rem;
                color:#333;
                margin-right:.266667rem;  
              }
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
        .nav{
            display: flex;
            flex-direction:column;
            overflow-x: auto;
                .img{
                    height: 349px;
                        .swiper-container {
                            width: 100%;
                            height: 100%;
                            }
                        .swiper-wrapper{
                            width: 100%;
                            height: 100%;
                                .swiper-slide {
                            height: 100%;
                            text-align: center;
                            font-size: 18px;
                            background: red;

                            /* Center slide text vertically */
                            display: -webkit-box;
                            display: -ms-flexbox;
                            display: -webkit-flex;
                            display: flex;
                            -webkit-box-pack: center;
                            -ms-flex-pack: center;
                            -webkit-justify-content: center;
                            justify-content: center;
                            -webkit-box-align: center;
                            -ms-flex-align: center;
                            -webkit-align-items: center;
                            align-items: center;
                            }  
                    }
                        
                }
                .pinpai{
                    padding-bottom: 10px;
                    padding: 13px 10px;
                    background: #fff;
                        p{
                        display: block;
                            margin-block-start: 1em;
                            margin-block-end: 1em;
                            margin-inline-start: 0px;
                            margin-inline-end: 0px;  
                        }
                        .p1{
                            margin: 0;
                            padding: 0;
                            font-size: 16px;
                            line-height: 1.5;
                            
                        }
                        .p2{
                            color:#f21c1c;
                            line-height: 1.5;
                            margin-top: 5px;
                            margin-bottom: 5px;
                            font-size: 14px;
                        }
                        .d1{
                            font-size: 22px;
                            margin: 5px 0 9px;
                            color: #f21c1c;
                        }
                        .d2{
                            margin-bottom: 9px;
                            display: flex;
                            justify-content: space-around;
                                a{
                                    display: block;
                                    display: flex;
                                    color: #333;
                                    text-decoration: none;
                                    font-size:14px;
                                }
                        }
                        .p3{
                            line-height: 1.5;
                            color: #9c9c9c;
                            font-size: 12px;
                        }
                    }
          
        }
       
    }
</style>

