<template>
  <div id="part">
    <div class="list-top">
      <div class="hom fa fa-angle-left" @click="goback">

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
                        <div class="d1">
                          <div class="biaoti">
                            <span>版本</span>
                          </div>
                          <div class="neiron2">
                            <div>
                              <a href="javascript:;" class="a1">iPhone XS</a>
                            </div>
                            <div>
                              <a href="javascript:;" class="a1">iPhone XS Max</a>
                            </div>
                            <div>
                              <a href="javascript:;" class="a1">iPhone XS</a>
                            </div>
                            <div>
                              <a href="javascript:;" class="a1">iPhone XS</a>
                            </div>
                          </div>
                           
                        </div>
                        <div class="d1">
                          <div class="biaoti">
                            <span>套餐</span>
                          </div>
                          <div class="neiron2">
                            <div>
                              <a href="javascript:;" class="a1">iPhone XS</a>
                            </div>
                            <div>
                              <a href="javascript:;" class="a1">iPhone XS Max</a>
                            </div>
                            <div>
                              <a href="javascript:;" class="a1">iPhone XS</a>
                            </div>
                            <div>
                              <a href="javascript:;" class="a1">iPhone XS</a>
                            </div>
                          </div>
                        </div>
                        <div class="jiajian">
                          <div class="sl">
                              数量
                          </div>
                          <div class="jiajian2">
                              <a href="javascript:;" class="jian fa fa-minus" @click="downNum"></a>
                              <span class="neiron">{{num}}</span>
                              <a href="javascript:;" class="jia fa fa-plus" @click="upNum"></a>
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
        num: 1,
        show: false,
        tabs: [{
          text: '首页',
          name: 'Home',
          icon: '#icon-shouye',
          path: '/'
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
        active: '/',
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
      },
       goback(){
            this.$router.go(-1);
        },
      downNum(){
        if(this.num <= 1){
            this.num = 1;
        }else{
            this.num --;
        }
    },
    upNum(){
        this.num ++;
    },



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
        width: 6.666667rem;
        height: 1.173333rem;
        display: flex;

        margin: 0 .96rem;
        font-size: .48rem;

        span {
          display: block;
          display: inline-block;
          height: 1.173333rem;
          text-align: center;
          line-height: 1.173333rem;
          margin-left: 1.04rem;

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
        height: 9.306667rem;

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
            font-size: .48rem;
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
              width: 9.306667rem;
              height: 9.306667rem;
            }
          }
        }

      }

      .pinpai {
        padding-bottom: .266667rem;
        padding: .346667rem .266667rem;
        background: #fff;

        p {
          display: block;
          margin-block-start: .026667rem;
          margin-block-end: 1em;
          margin-inline-start: 0rem;
          margin-inline-end: 0rem;
        }

        .p1 {
          margin: 0;
          padding: 0;
          font-size: .426667rem;
          line-height: 1.5;

        }

        .p2 {
          color: #f21c1c;
          line-height: 1.5;
          margin-top: .133333rem;
          margin-bottom: .133333rem;
          font-size: .373333rem;
        }

        .d1 {
          font-size: .586667rem;
          margin: .133333rem 0 .24rem;
          color: #f21c1c;
        }

        .d2 {
          margin-bottom: .24rem;
          display: flex;
          justify-content: space-around;

          a {
            display: block;
            display: flex;
            color: #333;
            text-decoration: none;
            font-size: .373333rem;
          }
        }

        .p3 {
          line-height: 1.5;
          color: #9c9c9c;
          font-size: .32rem;
        }
      }

      .guige {
        margin: .266667rem 0;
        // background: #fff;

        .timetobuy {
          height: 2.506667rem;
          box-sizing: border-box;
          padding: .346667rem .266667rem;
          display: flex;
          background: #fff;
          .left {
            width: 2.666667rem;
            height: 1.706667rem;
            font-size: .426667rem;
            color: #333;
            text-align: center;
            line-height: 1.706667rem;

          }

          .right {
            display: -webkit-box;
            //display: flex;
            overflow: auto;
            flex-direction: row;

            //overflow: hidden;
            div {
              height: 1.813333rem;
              width: 2.293333rem;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;

              img {
                margin-top: .106667rem;
                width: .586667rem;
                height: .586667rem;
                display: block;
              }

              .p1 {
                margin-top: .133333rem;
                height: .373333rem;
                font-size: .373333rem;
                letter-spacing: normal;
                color: #333;
              }

              .p2 {
                margin-top: .213333rem;
                height: .32rem;
                font-size: .32rem;
                letter-spacing: normal;
                color: #666;
              }
            }
          }
        }
        .liangpin{
            height: 1.226667rem;
            margin-top: .266667rem;
            //padding: 13px 10px;
            background: #fff;
            position: relative;
            border: 0;
                div{
                    display:inline-block;
                    margin-left: .533333rem;
                    
                        a{  
                            position: absolute;
                            top:.346667rem;
                            display:inline-block;
                            font-size:.373333rem;
                            color:#333;
                            //margin-bottom: 15px;
                                .yi{
                                    display: inline-block;
                                    height: .533333rem;
                                    line-height: .48rem;
                                    min-width: 1.6rem;
                                    padding: 0 .133333rem;
                                    box-sizing: border-box;
                                    border: .026667rem solid #f21c1c;
                                    border-radius: .266667rem;
                                    background-color: rgba(242,28,28,.1);
                                    font-size: .32rem;
                                    text-align: center;
                                    color: #f21c1c;
                                    margin-right: .266667rem;
                                }
                        }
                        .aa{
                            left: 5.066667rem;
                        }

                }
        }
        .youhui{
            height: 1.226667rem;
            margin-top: .266667rem;
            //padding: 13px 10px;
            background: #fff;
            position: relative;
            border: 0;
                div{
                    display:inline-block;
                    margin-left: .533333rem;
                        a{  
                            display:inline-block;
                            position: absolute;
                            top:.346667rem;
                            font-size:.373333rem;
                            color:#333;
                                .yi{
                                    display: inline-block;
                                    height: .533333rem;
                                    line-height: .48rem;
                                    min-width: 1.6rem;
                                    padding: 0 .133333rem;
                                    box-sizing: border-box;
                                    border: .026667rem solid #f21c1c;
                                    border-radius: .266667rem;
                                    background-color: rgba(242,28,28,.1);
                                    font-size: .32rem;
                                    text-align: center;
                                    color: #f21c1c;
                                    margin-right: .266667rem;
                                }
                        }

                }
        }
        .xiaoliang{
            height: 1.226667rem;
            margin-top: .266667rem;
            //padding: 13px 10px;
            background: #fff;
            position: relative;
            border: 0;
                div{
                    display:inline-block;
                    margin-left: .533333rem;
                        a{  
                            display:inline-block;
                            position: absolute;
                            top:.346667rem;
                            font-size:.373333rem;
                            color:#333;
                                .yi{
                                    display: inline-block;
                                    height: .533333rem;
                                    line-height: .48rem;
                                    min-width: 1.6rem;
                                    padding: 0 .133333rem;
                                    box-sizing: border-box;
                                   
                                    border-radius: .266667rem;
                                    
                                    font-size: .426667rem;
                                    text-align: center;
                                   
                                    margin-right: .266667rem;
                                }
                        }

                }
        }

      }
      .peijian{
          margin: .266667rem 0;
          background: #fff;
            .top{
                height: 1.226667rem;
                display: -webkit-flex;
                font-size:.373333rem;
                color:#9c9c9c;
                padding-top:.346667rem;
                border-bottom: .026667rem solid #CCC;
                    span{
                        font-size: .426667rem;
                        color:#333;
                        margin-right: 4.133333rem;
                        margin-left:.533333rem;
                    }
            }
            .nav1{
                width: 100%;
                height: 5.333333rem;
                // display: flex;
                // overflow-x: auto;
                padding: .346667rem .4rem;
                background: #fff;
                    div{
                        width: 100%;
                        background: #fff;
                        display: flex;
                        overflow-x: auto;
                            a{
                                display:block;
                                width: 2.666667rem;
                                margin-left: .333333rem;
                                margin-right: .266667rem;
                                text-decoration: none;
                                img{
                                //margin-top: 10px;
                                width: 2.666667rem;
                                height: 2.666667rem;
                                display: block;
                            }
                            p{
                                margin-top: .133333rem;
                                text-align: left;
                                line-height: 1.33;
                                height: .8rem;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                display: -webkit-box;
                                -webkit-line-clamp: 2;
                                color:#6b6b6b;
                                font-size: .32rem;
                            }
                            .p1{
                                line-height: 1.33;
                                font-size:.32rem;
                                color: #f21c1c;
                                margin-top: .266667rem; 
                            }
                          }
                            
                    }
            }

      }
      .xiangqing{
          margin-top: .533333rem;
          width: 100%;
            .top{
                height: 1.173333rem;
                background: #fff;
                max-width: 17.066667rem;
                margin: 0 auto;
                    a{
                        display: block;
                        height: 1.173333rem;
                        line-height: 1.173333rem;
                        text-align: center;
                        text-decoration: none;
                        font-size: .48rem;
                        color: #333;
                    }
            }
            .van{
                padding: 0 .266667rem .4rem;
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
          height: 1.28rem;
          bottom: 0;
          right: 0;
          left: 0;
          z-index: 8;
            .aa{
                position: relative;
                max-width: 17.066667rem;
                margin: 0 auto;
                height: 100%;
                background-color: #fff;
                display: flex;
                  a{
                    display: block;
                    height: 100%;
                    width: 1.466667rem;
                    box-sizing: border-box;
                    border-right: .026667rem solid #dfdfdf;
                    font-size: .32rem;
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
                          margin-bottom: .08rem;
                          background-repeat: no-repeat;
                          background-position: 50%;
                      }
                  }
                  .jiaru,.goumai{
                      width: 2.8rem;
                      font-size:.373333rem;
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
                      padding-left: .533333rem;
                        .tuichu{
                          position: absolute;
                          right: .266667rem;
                          top: .266667rem;
                          color: #9c9c9c;
                          z-index: 1;
                          font-size: .426667rem; 
                        }
                        .toppp{
                              position: relative;
                              height: 2rem;
                              padding: 0 .266667rem 0 3.653333rem;
                              box-sizing: border-box;
                                .p1{
                                    font-size: .533333rem;
                                    margin-bottom: .133333rem;
                                    color:#f21c1c;
                                }
                                .p2{
                                    color:#9c9c9c;
                                    font-size: .32rem;
                                }
                                .p3{
                                    line-height: 1.33;
                                    text-align: justify;
                                    margin-top: .133333rem;
                                    color: #6b6b6b;
                                    font-size: .32rem;
                                }
                                .img{
                                    position: absolute;
                                    left: -0.053333rem;
                                    top: -1.466667rem;
                                    height: 3.2rem;
                                    width: 3.2rem;
                                    border: .026667rem solid #9c9c9c;
                                    border-radius: .16rem;
                                    box-sizing: border-box;
                                    overflow: hidden;
                                      img{
                                        width: 100%;
                                        height: 100%;
                                      }
                                }
                        }
                        .anv{
                            height: calc(100% - 1.653333rem);
                            overflow-y: auto;
                            // padding-left: 10px;
                            padding-bottom: 1.386667rem;
                            box-sizing: border-box;
                              a{
                                height: .8rem;
                                line-height: .746667rem;
                                text-align: center;
                                border: .026667rem solid #dfdfdf;
                                border-radius: .426667rem;
                                font-size: .32rem;
                                padding: 0 .213333rem;
                                box-sizing: border-box;
                              }
                              .d1{
                                margin-top: .266667rem;
                                  .biaoti{
                                    color: #333;
                                    font-size: .426667rem;
                                  }
                                  .neiron{
                                    display: flex;
                                    //height: 40px;
                                    //flex-wrap: wrap;
                                      div{
                                        width: 1.76rem;
                                        height: .8rem;
                                        margin-right: .266667rem;
                                        margin-top: .266667rem;
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
                                              border: .026667rem solid #f21c1c;
                                              background-color: rgba(200,15,30,.1);
                                              min-width: 1.76rem;
                                              vertical-align: top;
                                              margin-top: 0; 
                                          }
                                      }
                                  }
                                  .neiron2{
                                    display: flex;  
                                    flex-wrap: wrap;
                                      div{
                                        width: 4.453333rem;
                                        height: .8rem;
                                        margin-right: .266667rem;
                                        margin-top: .266667rem;
                                          // a{
                                          //   margin-right: 0;
                                          //   display: block;
                                          //   line-height: 28px;
                                          //   box-sizing: border-box;
                                          //   min-width: 76px;
                                          //   margin-top: 0;
                                          // }
                                          .a1{
                                              width: 100%;
                                              display: inline-block;
                                              color: #f21c1c;
                                              border: 1px solid #f21c1c;
                                              background-color: rgba(200,15,30,.1);
                                              min-width: 1.76rem;
                                              vertical-align: top;
                                              margin-top: 0; 
                                          }
                                      }

                                  }
                              }
                              .jiajian{
                                    height: 44px;
                                    margin-top: 14px;
                                    margin-right: 20px;
                                    position: relative;
                                    border: 0;
                                    display: flex;
                                    align-items: center;
                                      .sl{
                                        color: #333;
                                        font-size: 16px;
                                      }
                                      .jiajian2{
                                        display: flex;
                                        width: 90px;
                                        margin-right: 14px;
                                          a{
                                            box-sizing: border-box;
                                            height: 24px;
                                            line-height: 22px;
                                            border: 1px solid #dfdfdf;
                                            text-align: center;
                                            width: 24px;
                                            font-size: 12px;
                                            color: #333;
                                            border-radius: 0;
                                            margin-right: 0 none;
                                            margin-top: 0 none;
                                          }
                                          .jian{
                                            border-top-left-radius: 3px;
                                            border-bottom-left-radius: 3px;
                                            //background: #9c9c9c;
                                            margin-right: 0 none;
                                            margin-top: 0 none;
                                          }
                                          .neiron{
                                            box-sizing: border-box;
                                            width: 35px;
                                            height: 24px;
                                            line-height: 22px;
                                            text-align: center;
                                            padding: 0 5px;
                                            background-color: #f9f9f9;
                                            border-top: 1px solid #dfdfdf;
                                            border-bottom: 1px solid #dfdfdf;
                                            font-size: 12px;
                                          }
                                          .jia{
                                            border-top-right-radius: 3px;
                                            border-bottom-right-radius: 3px;
                                            margin-right: 0 none;
                                            margin-top: 0 none;
                                          }
                                      }
                              }
                        }
                  }
                  .buot{
                        height: 1.066667rem;
                        position: absolute;
                        bottom: 0;
                        left: 0;
                          a{
                            display: block;
                            height: 1.066667rem;
                            background-color: #f21c1c;
                            color: #fff;
                            line-height: 1.066667rem;
                            text-align: center;
                            font-size: .426667rem;
                          }
                  }
              }
            }
      }
  }

</style>
