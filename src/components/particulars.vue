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
            <div class="swiper-slide">
              <img src="https://img2.ch999img.com/pic/product/440x440/20180402163209165.jpg.webp" alt="">
            </div>

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
          <!-- 规格左边 -->
          <div class="left">
            规&nbsp;&nbsp;&nbsp;格
          </div>
          <!-- 规格右边部分 -->
          <div class="right">
            <div class="tbr">
              <img src="https://img2.ch999img.com/pic/product/70x70/20180803153357141.png" alt="">
              <p class="p1">屏幕尺寸</p>
              <p class="p2">4.7英寸</p>
            </div>
          </div>
        </div>
        <div class="liangpin">
            <div>
                <a href="javascript:;">
                    <span class="yi">
                        一手优品
                    </span>
                    <span class="er">
                        ￥ 3699
                    </span>
                </a>
            </div>
            <div>
                <a href="javascript:;" class="aa">
                    <span class="yi">
                        二手优品
                    </span>
                    <span class="er">
                        ￥ 2699
                    </span>
                </a>
            </div>
        </div>
        <div class="youhui">
            <div>
                <a href="">
                    <span class="yi">
                        优惠套餐
                    </span>
                    <span class="er">
                        购买组合套餐，最高省25.0元
                    </span>
                </a>
            </div>
        </div>
        <div class="xiaoliang">
            <div>
                <a href="">
                    <span class="yi">
                        销&nbsp;量&nbsp;榜
                    </span>
                    <span class="er">
                        手机单品当日销量第9名
                    </span>
                </a>
            </div>
        </div>
      </div>
      <div class="peijian">
          <div class="top">
              
                  <span>推荐配件</span>
                  <p>查看更多推荐配件&nbsp;<i class="fa fa-angle-right font-20 grey-9"></i></p>
                  
   
          </div>
          <div class="nav1">
                <div>
                    <a href="javascript:;">
                        <img src="https://img2.ch999img.com/pic/product/440x440/2018091318172238.jpg.webp" alt="">
                        <p>苹果 iPhone XS Max 硅胶 定制 保护壳</p>
                        <p class="p1">￥198.00</p>
                    </a>
                    <a href="javascript:;">
                        <img src="https://img2.ch999img.com/pic/product/440x440/2018091318172238.jpg.webp" alt="">
                        <p>苹果 iPhone XS Max 硅胶 定制 保护壳</p>
                        <p class="p1">￥198.00</p>
                    </a>
                    <a href="javascript:;">
                        <img src="https://img2.ch999img.com/pic/product/440x440/2018091318172238.jpg.webp" alt="">
                        <p>苹果 iPhone XS Max 硅胶 定制 保护壳</p>
                        <p class="p1">￥198.00</p>
                    </a>
                    <a href="javascript:;">
                        <img src="https://img2.ch999img.com/pic/product/440x440/2018091318172238.jpg.webp" alt="">
                        <p>苹果 iPhone XS Max 硅胶 定制 保护壳</p>
                        <p class="p1">￥198.00</p>
                    </a>
                    <a href="javascript:;">
                        <img src="https://img2.ch999img.com/pic/product/440x440/2018091318172238.jpg.webp" alt="">
                        <p>苹果 iPhone XS Max 硅胶 定制 保护壳</p>
                        <p class="p1">￥198.00</p>
                    </a>
                </div>
          </div>
      </div>
      <div class="xiangqing">
          <div class="top">
              <a href="">图文详情</a>
          </div>
          <div class="van">
              <p>
                  <img src="https://img2.ch999img.com//pic/edt/product/20190118/20190118182401_5387.jpg.webp" alt="">
                  <img src="https://img2.ch999img.com//pic/edt/product/20181009/20181009122914_5208.jpg.webp" alt="">
                  <img src="https://img2.ch999img.com//pic/edt/product/20181009/20181009122920_7388.jpg.webp" alt="">
                  <img src="https://img2.ch999img.com//pic/edt/product/20181009/20181009123124_0349.jpg.webp" alt="">
              </p>
          </div>
      </div>
    </div>
    <div class="bottombtn">
        <div class="aa">
             <a href="javascript:;" class="kefu">
               <i class="fa fa-user-circle fa-lg"></i>
                <span>
                    客服
                </span>                
            </a>
            <a href="javascript:;" class="shouchang">
                <i class="fa fa-heart fa-lg"></i>
                <span>
                    收藏
                </span>
            </a>
            <a href="javascript:;" class="gouwuche" >
                <i class="fa fa-cart-arrow-down fa-lg"></i>
                <span>
                    购物车
                </span>
            </a>
            <a href="javascript:;" class="jiaru" @click="tanchu">加入购物车</a>
            <a href="javascript:;" class="goumai">
             
                立即购买
             
              </a>
        </div>
        <div class="zhezhao">
           <mt-popup
                v-model="popupVisible"
                position="bottom"
                
                >
                <div>
                  <dir class="topp">
                      <a href="javascript:;" class="tuichu fa fa-times"></a>
                      <div class="toppp">
                          <p class="p1">￥ 5299.00</p>
                          <p class="p2">商品编号：68436</p>
                          <p class="p3">已选：iPhone XR 黑色 64GB</p>
                          <div class="img">
                            <img src="https://img2.ch999img.com/pic/product/160x160/20190116164038756.jpg.webp" alt="">
                          </div>
                      </div>
                      <div class="anv">
                        <div class="d1">
                          <div class="biaoti">
                            <span>颜色</span>
                          </div>
                          <div class="neiron">
                            <div>
                              <a href="javascript:;" class="a1">白色</a>
                            </div>
                            <div>
                              <a href="javascript:;" class="a1">黑色</a>
                            </div>
                          </div>
                           
                        </div>
                        <div class="d1">
                          <div class="biaoti">
                            <span>容量</span>
                          </div>
                          <div class="neiron">
                            <div>
                              <a href="javascript:;" class="a1">64GB</a>
                            </div>
                            <div>
                              <a href="javascript:;" class="a1">245G</a>
                            </div>
                          </div>
                           
                        </div>
                      </div>
                  </dir>
                  
                  <div class="buot">
                    <a href="javascript:;">
                      加入购物车
                    </a>
                  </div>
                </div>
              </mt-popup>
        </div>
    </div>
  </div>
  
</template>
<script>
  import Vue from "vue";
  import Swiper from "swiper";
  import { Popup } from 'mint-ui';
  Vue.component(Popup.name, Popup);
  export default {
    data() {
      return {
        show: false,
        tabs: [{
          text: '首页',
          name: 'Home',
          icon: '#icon-shouye',
          path: '/home'
        }, {
          text: '分类',
          name: 'List',
          icon: '#icon-fenlei',
          path: '/list'
        }, {
          text: '购物车',
          name: 'Cart',
          icon: '#icon-tubiaozhizuomoban',
          path: '/cart'
        }, {
          text: '我的',
          name: 'Mine',
          icon: '#icon-wode',
          path: '/mine'
        }],
        active: '/home',
        popupVisible:false,
        data: [{
          children: ''
        }, {
          id: ''
        }, {
          title: ''
        }],
        // data2:[],
        index: 0

      }
    },
    methods: {
      selected(path) {
        // console.log(path);
        this.active = path;
        this.$router.push({
          path
        });
      },
      tanchu(){
        this.popupVisible= true
      }
    },
    created() {
      var mySwiper = new Swiper('.swiper-container', {
        autoplay: false, //可选选项，自动滑动
        direction: 'horizontal',
      })
    }
  }

</script>
<style lang="scss" scoped>
  #part {
    //padding: 5px 0;

    width: 100%;
    height: 100%;
    flex: 1;
    overflow: hidden;
    background-color: #f5f5f5;

    .list-top {
      height: 1.173333rem;
      background-repeat: no-repeat;
      background-position: top;
      background-size: cover;
      background-color: rgba(250, 250, 250, 0.98);
      display: flex;

      .hom {
        height: 1.173333rem;
        font-size: .8rem;
        color: #333;
        margin-left: .266667rem;
        text-align: center;
        line-height: 1.173333rem;
      }

      .sou {
        width: 250px;
        height: 44px;
        display: flex;

        margin: 0 36px;
        font-size: 18px;

        span {
          display: block;
          display: inline-block;
          height: 44px;
          text-align: center;
          line-height: 44px;
          margin-left: 39px;

        }
      }

      .tab {
        text-align: center;
        line-height: 1.173333rem;
        height: 1.173333rem;
        font-size: .64rem;
        color: #333;
        margin-right: .266667rem;
      }
    }

    .daohan {
      width: 100%;
      height: 1.333333rem;
      display: flex;
      box-shadow: 0 .026667rem .053333rem #ccc;
      background-color: #333;

      .is-selected {
        color: #c80f1e;
      }

      a {
        width: 25%;
        color: #9c9c9c;
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

        .badge {
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

    .nav {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      overflow-x: auto;

      flex: 1;
      .img {
        height: 349px;

        .swiper-container {
          width: 100%;
          height: 100%;
        }

        .swiper-wrapper {
          width: 100%;
          height: 100%;

          .swiper-slide {
            height: 100%;
            text-align: center;
            font-size: 18px;
            background: #fff;

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

            img {
              width: 349px;
              height: 349px;
            }
          }
        }

      }

      .pinpai {
        padding-bottom: 10px;
        padding: 13px 10px;
        background: #fff;

        p {
          display: block;
          margin-block-start: 1em;
          margin-block-end: 1em;
          margin-inline-start: 0px;
          margin-inline-end: 0px;
        }

        .p1 {
          margin: 0;
          padding: 0;
          font-size: 16px;
          line-height: 1.5;

        }

        .p2 {
          color: #f21c1c;
          line-height: 1.5;
          margin-top: 5px;
          margin-bottom: 5px;
          font-size: 14px;
        }

        .d1 {
          font-size: 22px;
          margin: 5px 0 9px;
          color: #f21c1c;
        }

        .d2 {
          margin-bottom: 9px;
          display: flex;
          justify-content: space-around;

          a {
            display: block;
            display: flex;
            color: #333;
            text-decoration: none;
            font-size: 14px;
          }
        }

        .p3 {
          line-height: 1.5;
          color: #9c9c9c;
          font-size: 12px;
        }
      }

      .guige {
        margin: 10px 0;
        // background: #fff;

        .timetobuy {
          height: 94px;
          box-sizing: border-box;
          padding: 13px 10px;
          display: flex;
          background: #fff;
          .left {
            width: 100px;
            height: 64px;
            font-size: 16px;
            color: #333;
            text-align: center;
            line-height: 64px;

          }

          .right {
            display: -webkit-box;
            //display: flex;
            overflow: auto;
            flex-direction: row;

            //overflow: hidden;
            div {
              height: 68px;
              width: 86px;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;

              img {
                margin-top: 4px;
                width: 22px;
                height: 22px;
                display: block;
              }

              .p1 {
                margin-top: 5px;
                height: 14px;
                font-size: 14px;
                letter-spacing: normal;
                color: #333;
              }

              .p2 {
                margin-top: 8px;
                height: 12px;
                font-size: 12px;
                letter-spacing: normal;
                color: #666;
              }
            }
          }
        }
        .liangpin{
            height: 46px;
            margin-top: 10px;
            //padding: 13px 10px;
            background: #fff;
            position: relative;
            border: 0;
                div{
                    display:inline-block;
                    margin-left: 20px;
                    
                        a{  
                            position: absolute;
                            top:13px;
                            display:inline-block;
                            font-size:14px;
                            color:#333;
                            //margin-bottom: 15px;
                                .yi{
                                    display: inline-block;
                                    height: 20px;
                                    line-height: 18px;
                                    min-width: 60px;
                                    padding: 0 5px;
                                    box-sizing: border-box;
                                    border: 1px solid #f21c1c;
                                    border-radius: 10px;
                                    background-color: rgba(242,28,28,.1);
                                    font-size: 12px;
                                    text-align: center;
                                    color: #f21c1c;
                                    margin-right: 10px;
                                }
                        }
                        .aa{
                            left: 190px;
                        }

                }
        }
        .youhui{
            height: 46px;
            margin-top: 10px;
            //padding: 13px 10px;
            background: #fff;
            position: relative;
            border: 0;
                div{
                    display:inline-block;
                    margin-left: 20px;
                        a{  
                            display:inline-block;
                            position: absolute;
                            top:13px;
                            font-size:14px;
                            color:#333;
                                .yi{
                                    display: inline-block;
                                    height: 20px;
                                    line-height: 18px;
                                    min-width: 60px;
                                    padding: 0 5px;
                                    box-sizing: border-box;
                                    border: 1px solid #f21c1c;
                                    border-radius: 10px;
                                    background-color: rgba(242,28,28,.1);
                                    font-size: 12px;
                                    text-align: center;
                                    color: #f21c1c;
                                    margin-right: 10px;
                                }
                        }

                }
        }
        .xiaoliang{
            height: 46px;
            margin-top: 10px;
            //padding: 13px 10px;
            background: #fff;
            position: relative;
            border: 0;
                div{
                    display:inline-block;
                    margin-left: 20px;
                        a{  
                            display:inline-block;
                            position: absolute;
                            top:13px;
                            font-size:14px;
                            color:#333;
                                .yi{
                                    display: inline-block;
                                    height: 20px;
                                    line-height: 18px;
                                    min-width: 60px;
                                    padding: 0 5px;
                                    box-sizing: border-box;
                                   
                                    border-radius: 10px;
                                    
                                    font-size: 16px;
                                    text-align: center;
                                   
                                    margin-right: 10px;
                                }
                        }

                }
        }

      }
      .peijian{
          margin: 10px 0;
          background: #fff;
            .top{
                height: 46px;
                display: -webkit-flex;
                font-size:14px;
                color:#9c9c9c;
                padding-top:13px;
                border-bottom: 1px solid #CCC;
                    span{
                        font-size: 16px;
                        color:#333;
                        margin-right: 155px;
                        margin-left:20px;
                    }
            }
            .nav1{
                width: 100%;
                height: 200px;
                // display: flex;
                // overflow-x: auto;
                padding: 13px 15px;
                background: #fff;
                    div{
                        width: 100%;
                        background: #fff;
                        display: flex;
                        overflow-x: auto;
                            a{
                                display:block;
                                width: 100px;
                                margin-left: 12.5px;
                                margin-right: 10px;
                                text-decoration: none;
                                img{
                                //margin-top: 10px;
                                width: 100px;
                                height: 100px;
                                display: block;
                            }
                            p{
                                margin-top: 5px;
                                text-align: left;
                                line-height: 1.33;
                                height: 30px;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                display: -webkit-box;
                                -webkit-line-clamp: 2;
                                color:#6b6b6b;
                                font-size: 12px;
                            }
                            .p1{
                                line-height: 1.33;
                                font-size:12px;
                                color: #f21c1c;
                                margin-top: 10px; 
                            }
                          }
                            
                    }
            }

      }
      .xiangqing{
          margin-top: 20px;
          width: 100%;
            .top{
                height: 44px;
                background: #fff;
                max-width: 640px;
                margin: 0 auto;
                    a{
                        display: block;
                        height: 44px;
                        line-height: 44px;
                        text-align: center;
                        text-decoration: none;
                        font-size: 18px;
                        color: #333;
                    }
            }
            .van{
                padding: 0 10px 15px;
                overflow: hidden;
                    p{
                        width: 100%!important;
                            img{
                                display: block;
                                width: 100%!important;
                                height: auto!important;
                            }
                    }
            }
      }
      
    }
    .bottombtn{
          position: fixed;
          width: 100%;
          height: 48px;
          bottom: 0;
          right: 0;
          left: 0;
          z-index: 8;
            .aa{
                position: relative;
                max-width: 640px;
                margin: 0 auto;
                height: 100%;
                background-color: #fff;
                display: flex;
                  a{
                    display: block;
                    height: 100%;
                    width: 55px;
                    box-sizing: border-box;
                    border-right: 1px solid #dfdfdf;
                    font-size: 12px;
                    color: #333;
                    display: flex;  
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                      i{
                          display: inline-block;
                          // width: 18px;
                          // height: 18px;
                          background-size: 100%;
                          margin-bottom: 3px;
                          background-repeat: no-repeat;
                          background-position: 50%;
                      }
                  }
                  .jiaru,.goumai{
                      width: 105px;
                      font-size:14px;
                  }
                  .goumai{
                    background: #f21c1c;
                    color:#fff;
                  }
            }
            .zhezhao{
              div{
                width:100%;
                background: #fff;
                  .topp{
                      height: 100%;
                      padding-left: 20px;
                        .tuichu{
                          position: absolute;
                          right: 10px;
                          top: 10px;
                          color: #9c9c9c;
                          z-index: 1;
                          font-size: 16px; 
                        }
                        .toppp{
                              position: relative;
                              height: 75px;
                              padding: 0px 10px 0 137px;
                              box-sizing: border-box;
                                .p1{
                                    font-size: 20px;
                                    margin-bottom: 5px;
                                    color:#f21c1c;
                                }
                                .p2{
                                    color:#9c9c9c;
                                    font-size: 12px;
                                }
                                .p3{
                                    line-height: 1.33;
                                    text-align: justify;
                                    margin-top: 5px;
                                    color: #6b6b6b;
                                    font-size: 12px;
                                }
                                .img{
                                    position: absolute;
                                    left: -2px;
                                    top: -55px;
                                    height: 120px;
                                    width: 120px;
                                    border: 1px solid #9c9c9c;
                                    border-radius: 6px;
                                    box-sizing: border-box;
                                    overflow: hidden;
                                      img{
                                        width: 100%;
                                        height: 100%;
                                      }
                                }
                        }
                        .anv{
                            height: calc(100% - 62px);
                            overflow-y: auto;
                            // padding-left: 10px;
                            padding-bottom: 52px;
                            box-sizing: border-box;
                              a{
                                height: 30px;
                                line-height: 28px;
                                text-align: center;
                                border: 1px solid #dfdfdf;
                                border-radius: 16px;
                                margin-right: 10px;
                                margin-top: 10px;
                                font-size: 12px;
                                padding: 0 8px;
                                box-sizing: border-box;
                              }
                              .d1{
                                margin-top: 10px;
                                  .biaoti{
                                    color: #333;
                                    font-size: 16px;
                                  }
                                  .neiron{
                                    display: flex;
                                    //height: 40px;
                                    //flex-wrap: wrap;
                                      div{
                                        width: 66px;
                                        height: 30px;
                                        margin-right: 10px;
                                        margin-top: 10px;
                                          // a{
                                          //   margin-right: 0;
                                          //   display: block;
                                          //   line-height: 28px;
                                          //   box-sizing: border-box;
                                          //   min-width: 76px;
                                          //   margin-top: 0;
                                          // }
                                          .a1{
                                              display: inline-block;
                                              color: #f21c1c;
                                              border: 1px solid #f21c1c;
                                              background-color: rgba(200,15,30,.1);
                                              min-width: 66px;
                                              vertical-align: top;
                                              margin-top: 0; 
                                          }
                                      }
                                  }
                              }
                        }
                  }
                  .buot{
                        height: 40px;
                        position: absolute;
                        bottom: 0;
                        left: 0;
                          a{
                            display: block;
                            height: 40px;
                            background-color: #f21c1c;
                            color: #fff;
                            line-height: 40px;
                            text-align: center;
                            font-size: 16px;
                          }
                  }
              }
            }
      }
  }

</style>
