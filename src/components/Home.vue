<template>
    <div id="Home">
        <!-- 广告+搜索框 -->
        <div class="a1">
            <div class="showapp" v-if="show">
                <div>
                    <a href="javascript:;" v-on:click="show = !show">x</a>
                    <img src="../assets/jiuji.png" alt="">
                    <div>
                        <p>打开九机APP购物</p>
                        <p>新人领469元红包</p>
                    </div>
                </div>
                <a href="https://m.9ji.com/download-app?url=jiuji%3A%2F%2Fm.9ji.com">立即打开</a>
            </div>
            <div class="one">
                <!-- 搜索框 -->
                <div class="osearch">
                    <!-- 地址 -->
                    <router-link tag='a' :to="'/stores'" class="oplace">
                        <!-- 地址名 -->
                        <span>昆明市区</span>
                        <!-- 图标 -->
                        <i class="fa fa-angle-down"></i>
                    </router-link>
                    <div></div>
                    <!-- 搜索框 -->
                    <router-link tag='a' :to="'/search-form'" class="osear">
                        <!-- 图标 -->
                        <i class="fa fa-search"></i>
                        <!-- 搜索框 -->
                        <span>{{searchplaceholder}}</span>
                    </router-link>
                </div>
                <!-- 导航栏 -->
                <div class="onavigate">
                    <nav>
                    <!-- <router-link :to="{name:navigatelabel.path}" v-for="navigatelabel in navigatelabels" :key="navigatelabel.id" :class="{active:active==navigatelabel.path}" @click="selected(navigatelabel.path)">{{navigatelabel.title}}</router-link> -->
                    <a href="javascript:;" v-for="navigatelabel in navigatelabels" :key="navigatelabel.id" :class="{active:active==navigatelabel.id}" @click="selected(navigatelabel.id)">
                        {{navigatelabel.title}}
                    </a>
                    </nav>
                </div>
            </div>
        </div>

        <!-- 轮播图 -->
        <div class="banner">
            <mt-swipe :auto="3000" style="height:5rem">
                <mt-swipe-item v-for="(item,idx) in navpic" :key="idx">
                    <img :src="item.imagePath" style="height:5rem">
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <!-- <router-view></router-view> -->

        <!-- 轮播图底下的导航栏 -->
        <div class="bannav">
            <a v-for="(item,idx) in bannav" :key="idx" :href="item.link">
                <img :src="item.imagePath" alt="">
            <!-- <div v-for="(item,idx) in bannav" :key="idx"></div> -->
            </a>
        </div>

        <!-- 限时抢购 -->
        <div class="timetobuy">
            <div></div>
            <div>
                <!-- 限时抢购 -->
                <a href="https://m.9ji.com/?tabs=2" class="timebuy">
                    <span>距结束</span>
                    <span>{{`${hr}:${min}:${sec}`}}</span>
                </a>
                <!-- 限时抢购右边部分 -->
                <div class="timebuyright">
                    <div class="timebuyri">
                        <a :href="item.url" v-for="item in rushtoday" :key="item.id">
                            <div class="tbr">
                                <p>{{item.name}}</p>
                                <p>￥{{item.price}}</p>
                                <p>{{item.description}}</p>
                                <img :src="item.imagePath" alt="">
                            </div>
                        </a>
                        <!-- <a href="#"></a>
                        <a href="#"></a>
                        <a href="#"></a> -->
                    </div>
                </div>   
            </div>
        </div>

        <!-- 九机头条 -->
        <div class="headline">
            <img src="../assets/headline.png" alt="">
            <!-- <mt-swipe class="headli" :show-indicators="false">
                <mt-swipe-item>1</mt-swipe-item>
                <mt-swipe-item>2</mt-swipe-item>
                <mt-swipe-item>3</mt-swipe-item>
            </mt-swipe> -->
            <div class="swiper-container headli">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="item in headline" :key="item.id">
                        <a :href="item.url">
                            <span>{{item.title}}</span>
                            <img :src="item.picture" alt="">
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!-- iPoneXR全网通 -->
        <div class="recommendone">
            <a :href="item.link" v-for="item in recommendone" :key="item.id">
                <img :src="item.imagePath" alt="">
            </a>
        </div>

        <!-- 华为MATE20 -->
        <div class="recommendtwo">
            <a :href="item.link" v-for="item in recommendtwo" :key="item.id">
                <img :src="item.imagePath" alt="">
            </a>
        </div>

        <!-- iPhone使用技巧 -->
        <div class="recommendthree">
            <a :href="item.link" v-for="item in recommendthree" :key="item.id">
                <img :src="item.imagePath" alt="">
            </a>
        </div>

        <!-- MacBookAir -->
        <div class="recommendfour">
            <a :href="item.link" v-for="item in recommendfour" :key="item.id">
                <img :src="item.imagePath" alt="">
            </a>
        </div>

        <!-- 新人礼 -->
        <div class="newgift">
            <a :href="item.link" v-for="item in newgift" :key="item.id">
                <img :src="item.imagePath" alt="">
            </a>
        </div>

        <!-- 为你优选 -->
        <div class="justforyou"> <!--图片-->
            <img src="../assets/justforyou.png" alt="">
        </div>
        <div class="justyou"> <!--内容-->
            <a :href="item.link" v-for="(item,idx) in justforyou" :key="idx">
                <img :src="item.imagePath" alt="">
                <p>{{item.title}}</p>
                <p>{{item.sellingPoint}}</p>
                <p>￥{{item.price}}</p>
            </a>
        </div>
        
        <!-- 手机精品 -->
        <div class="boutiquepic"> <!--图片-->
            <img src="../assets/boutiquephone.png" alt="">
        </div>
        <div class="boutiqueone">
            <a :href="item.link" v-for="(item,idx) in boutiqueone" :key="idx">
                <img :src="item.imagePath" alt="">
            </a>
        </div>
        <div class="boutiquetwo">
            <a :href="item.link" v-for="(item,idx) in boutiquetwo" :key="idx">
                <img :src="item.imagePath" alt="">
            </a>
        </div>
        <div class="boutiquethree">
            <a :href="item.link" v-for="(item,idx) in boutiquethree" :key="idx">
                <img :src="item.imagePath" alt="">
            </a>
        </div>

        <!-- 办公专家 -->
        <div class="officepic"> <!--图片-->
            <img src="../assets/officer.png" alt="">
        </div>
        <div class="officeone">
            <a :href="item.link" v-for="(item,idx) in officeone" :key="idx">
                <img :src="item.imagePath" alt="">
            </a>
        </div>
        <div class="officetwo">
            <a :href="item.link" v-for="(item,idx) in officetwo" :key="idx">
                <img :src="item.imagePath" alt="">
            </a>
        </div>
        <div class="officethree">
            <a :href="item.link" v-for="(item,idx) in officethree" :key="idx">
                <img :src="item.imagePath" alt="">
            </a>
        </div>

        <!-- 智能生活 -->
        <div class="lifepic"> <!--图片-->
            <img src="../assets/life.png" alt="">
        </div>
        <div class="lifeone">
            <a :href="item.link" v-for="(item,idx) in lifeone" :key="idx">
                <img :src="item.imagePath" alt="">
            </a>
        </div>
        <div class="lifetwo">
            <a :href="item.link" v-for="(item,idx) in lifetwo" :key="idx">
                <img :src="item.imagePath" alt="">
            </a>
        </div>

        <!-- 发现好货 -->
        <div class="findpic"> <!--图片-->
            <img src="../assets/findgood.png" alt="">
        </div>
        <div class="findgood"> <!--内容-->
            <a :href="item.link" class="goods" v-for="(item,idx) in findgood" :key="idx">
                <div class="goodspic"> <!--图片-->
                    <img :src="item.imagePath" alt="">
                    <img :src="item.promotionTagImg" alt="">
                </div>
                <div class="goodscon"> <!--内容-->
                    <p>{{item.sellingPoint}}</p>
                    <p>{{item.title}}</p>
                    <p>￥{{item.price}}</p>
                </div>
            </a>
        </div>
    </div>
</template>
<script>
    import Vue from "vue";

    //引入axios
    import Axios from 'axios';

    // 引入并使用MintUI
    import MintUI from "mint-ui";
    Vue.use(MintUI);

    // 引入Swiper
    import Swiper from "swiper";

    export default {
        data(){
            return{
                show: true,
                searchplaceholder:'',
                navigatelabels:[
                    {
                        id:1,
                        title:'推荐',
                        path:'/home/tuijian'
                    },
                    {
                        id:2,
                        title:'限时购',
                        path:'/home/xianshigou'
                    },
                    {
                        id:3,
                        title:'以旧换新',
                        path:'/home/yijiuhuanxin'
                    },
                    {
                        id:4,
                        title:'手机快修',
                        path:'/home/shoujikuaixiu'
                    },
                    {
                        id:5,
                        title:'久久租',
                        path:'/home/jiujiuzu'
                    },
                    {
                        id:6,
                        title:'头条',
                        path:'/home/toutiao'
                    }
                ],
                active:1,

                navpic:[], //轮播图

                bannav:[], //轮播图下面的那个导航栏

                hr: 0, //倒计时
                min: 0,
                sec: 0,

                rushtoday:[], //限时抢购右边部分

                headline:[], //九机头条

                recommendone:[], //iPoneXR全网通

                recommendtwo:[], //华为MATE20

                recommendthree:[], //iPhone使用技巧

                recommendfour:[], //MacBookAir

                newgift:[], //新人礼

                justforyou:[], //为你优选

                boutiqueone:[], //手机精品1
                boutiquetwo:[], //手机精品2
                boutiquethree:[], //手机精品3

                officeone:[], //办公专家1
                officetwo:[], //办公专家2
                officethree:[], //办公专家3

                lifeone:[], //智能生活1
                lifetwo:[], //智能生活2

                findgood:[], //发现好货
                
            }
        },
        // computed:{
        //     filterjustforyou: function(){
        //         return this.justforyou.filter(item=>item.type!=0)
        //     }
        // },
        methods: {
            selected(path){
                this.active = path;
            },
            countdown: function () {
                const end = Date.parse(new Date('2019-01-20'))
                const now = Date.parse(new Date())
                const msec = end - now
                let hr = parseInt(msec / 1000 / 60 / 60)
                let min = parseInt(msec / 1000 / 60 % 60)
                let sec = parseInt(msec / 1000 % 60)
                this.hr = hr > 9 ? hr : '0' + hr
                this.min = min > 9 ? min : '0' + min
                this.sec = sec > 9 ? sec : '0' + sec
                const that = this;
                // console.log(that);
                setTimeout(function () {
                    that.countdown()
                }, 1000)
            },
        },
        mounted: function () {
            //限时抢购倒计时
            this.countdown()

            //九机头条轮播图
            let mySwiper = new Swiper('.swiper-container', {
                autoplay: true,
                direction: 'vertical', // 垂直切换选项
                loop: true, // 循环模式选项
            })

        },
        created(){
            Axios.get('/dbapi/user/userInfo/v1').then(res=>{
                // console.log(res.data.data.searchPlaceholder);
                this.searchplaceholder = res.data.data.searchPlaceholder;
            })
            Axios.get('/dbapi/floors/v1?label=0&page=1&random=0').then(res=>{
                // console.log(res.data.data.container.floor[4].content);
                this.navpic = res.data.data.container.floor[0].content;
                this.bannav = res.data.data.container.floor[1].content;
                this.headline = res.data.data.container.floor[4].content;
                this.recommendone = res.data.data.container.floor[5].content;
                this.recommendtwo = res.data.data.container.floor[6].content;
                this.recommendthree = res.data.data.container.floor[7].content;
                this.recommendfour = res.data.data.container.floor[8].content;
                this.newgift = res.data.data.container.floor[9].content;
                this.boutiqueone = res.data.data.container.floor[13].content;
                this.boutiquetwo = res.data.data.container.floor[14].content;
                this.boutiquethree = res.data.data.container.floor[15].content;
                this.officeone = res.data.data.container.floor[17].content;
                this.officetwo = res.data.data.container.floor[18].content;
                this.officethree = res.data.data.container.floor[19].content;
                this.lifeone = res.data.data.container.floor[21].content;
                this.lifetwo = res.data.data.container.floor[22].content;
                this.findgood = res.data.data.container.floor[25].content;
            })
            Axios.get('/dbapi/floors/specialEnjoy/v1').then(res=>{
                // console.log(res.data.data.optimize);
                this.rushtoday = res.data.data.rushToday;

                for(var i=0;i<res.data.data.optimize.length;i++){
                    if(res.data.data.optimize[i].type !=0){
                        this.justforyou[i] = res.data.data.optimize[i];
                    }
                }
            })
        }
    }
</script>
<style lang="scss">
    #Home{
        flex:1;
        overflow-x: hidden;
        .a1{
            background: #f21c1c;
            .showapp{
                height: 1.333333rem;
                background: rgba(0,0,0,0.7);
                display: flex;
                overflow: hidden;
                align-items: center;
                justify-content: space-between;
                >div{
                    display: flex;
                    align-items: center;
                    a{
                        font-size: .426667rem;
                        line-height: .426667rem;
                        color: #9c9c9c;
                        width: .533333rem;
                        height: .533333rem;
                        border: 1px solid #9c9c9c;
                        border-radius: .24rem;
                        text-align: center;
                        margin: 0 .266667rem;
                    }
                    img{
                        width: 1.066667rem;
                        height: 1.066667rem;
                    }
                    >div{
                        margin-left: .266667rem;
                        p:nth-child(1){
                            color: #fff;
                            font-size: .362667rem;
                        }
                        p:nth-child(2){
                            color: #9c9c9c;
                            font-size: .32rem;
                        }
                    }
                }
                >a{
                    width: 2.133333rem;
                    height: .853333rem;
                    margin-right: .213333rem;
                    background: #f21c1c;
                    line-height: .853333rem;
                    color: #fff;
                    border-radius: .8rem;
                    font-size: .373333rem;
                    text-align: center;
                }
            }
            .one{
                height: 2.506667rem;
                background: url(../assets/search_background.jpg);
                background-size: cover;
                overflow: hidden;
                .osearch{
                    height: .906667rem;
                    background: rgba(0,0,0,0.4);
                    margin: .373333rem;
                    margin-bottom: .25rem;
                    padding: .106667rem;
                    border-radius: .8rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    .oplace{
                        padding-right: .213333rem;
                        font-size: .426667rem;
                        display: flex;
                        span{
                            color: #fff;
                            line-height: .906667rem;
                            font-size: .373333rem;
                        }
                        i{
                            margin-left: .133333rem;
                            color: #fff;
                            line-height: .906667rem;
                        }
                    }
                    div{
                        width: .053333rem;
                        height: .373333rem;
                        background: #fff;
                        opacity: .6;
                        line-height: .906667rem;
                    }
                    .osear{
                        padding: .266667rem;
                        font-size: .426667rem;
                        flex: 1;
                        i{
                            color: #fff;
                        }
                        span{
                            color: #fff;
                            opacity: .6;
                            font-size: .426667rem;
                        }
                    }
                }
                .onavigate{
                    height: 1.066667rem;
                    width: 100%;
                    overflow: hidden;
                    nav{
                        height: 1.066667rem;
                        padding: 0 .266667rem;
                        display: flex;
                        align-items: center;
                        overflow: auto;
                        a{ //五个导航
                            margin: 0 .266667rem;
                            font-size: .4rem;
                            color : #fff;
                            opacity : .8;
                            text-align: center;
                            flex-shrink: 0;
                        }
                    }
                    .active{
                        font-size : .426667rem;
                        opacity : 1;
                    }
                }
            }
        }
        .banner{
            height: 5rem;
        }
        .bannav{
            height: 2rem;
            margin-top: -0.026667rem;
            display: flex;
            a{
                display: flex;
                img{
                    width: 2rem;
                    cursor: pointer;
                }
            }
        }

        //限时抢购
        .timetobuy{
            height: 4.533333rem;
            >div:nth-child(1){
                height: .266667rem;
            }
            >div:nth-child(2){
                height: 4.266667rem;
                padding: .266667rem;
                display: flex;
                align-items: center;
                overflow: hidden;
                .timebuy{  //限时抢购
                    width: 2.453333rem;
                    height: 3.733333rem;
                    background:url(../assets/TimeToBuy.png);
                    background-size: cover;
                    position: relative;
                    >span:nth-child(1){
                        height: .32rem;
                        font-size: .32rem;
                        color: #fff;
                        text-align: center;
                        position: absolute;
                        bottom: 1.493333rem;
                        left: .693333rem;
                    }
                    >span:nth-child(2){
                        position: absolute;
                        bottom: .64rem;
                        left: .64rem;
                        font-size: .32rem;
                        color: #f21c1c;
                        cursor: pointer;
                    }
                }
                .timebuyright{ //限时抢购右边部分 
                    flex: 1;
                    width: 105.6rem;
                    height: 3.733333rem;
                    padding: 0 .133333rem;
                    overflow: auto;
                    display: flex;
                    align-items: center;
                    .timebuyri{
                        // width: 105.6rem;
                        // height: 3.733333rem;
                        display: flex;
                        align-items: center;
                        overflow: auto;
                        z-index: 1;
                        >a{
                            width: 2.933333rem;
                            padding: .106667rem .133333rem;
                            
                            .tbr{
                                text-align: center;
                                p:nth-child(1){
                                    font-size: .373333rem;
                                    color: #333;
                                    line-height: .448rem;
                                    text-overflow:ellipsis;
                                    overflow:hidden;
                                    white-space:nowrap; 
                                }
                                p:nth-child(2){
                                    font-size: .373333rem;
                                    color: #f21c1c;
                                    margin: .053333rem 0;
                                }
                                p:nth-child(3){
                                    font-size: .32rem;
                                    color: #9c9c9c;
                                }
                                img{
                                    width: 1.866667rem;
                                    height: 1.866667rem;
                                    margin: 0 .4rem;
                                }
                            }
                        }
                    }
                }
            }
        }

        //九机头条
        .headline{
            height: .906667rem;
            background: #fde9e9;
            margin: .266667rem;
            display: flex;
            align-items: center;
            overflow: hidden;
            border-radius: 1.333333rem;
            img{
                width: 1.813333rem;
                margin: 0 .32rem;
            }
            .headli{
                width: 7.013333rem;
                height: .906667rem;
                flex: 1;
                a{
                    display: flex;
                    align-content: center;
                    span{
                        width: 5.2rem;
                        height: .906667rem;
                        line-height: .906667rem;
                        color: #333;
                        font-size: .373333rem;
                        text-overflow:ellipsis;
                        overflow:hidden;
                        white-space:nowrap;
                    }
                    img{
                        width: 1.813333rem;
                        height: .906667rem;
                        margin: 0;
                    }
                } 
            }
        }

        //iPoneXR全网通
        .recommendone{
            height: 3.333333rem;
            display: flex;
            img{
                height: 3.333333rem;
            }
        }

        //华为MATE20
        .recommendtwo{
            height: 3.333333rem;
            display: flex;
            img{
                height: 3.333333rem;
            }
        }

        // iPhone使用技巧
        .recommendthree{
            height: 1.666667rem;
            display: flex;
            img{
                height: 1.666667rem;
            }
        }

        //MacBookAir
        .recommendfour{
            height: 1.666667rem;
            display: flex;
            img{
                height: 1.666667rem;
            }
        }

        //新人礼
        .newgift{
            margin-top: .266667rem;
            height: 1.666667rem;
            display: flex;
            img{
                height: 1.666667rem;
            }
        }

        //为你优选
        .justforyou{ //图片
            // width: 100%;
            height: 1.44rem;
            margin-top: .266667rem;
            overflow: hidden;
            position: relative;
            img{
                height: 1.44rem;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
            }
        }
        .justyou{ //内容
            // height: 5.669333rem;
            // width: 23.733333rem;
            overflow:auto;
            // background: #09a;
            padding: .266667rem;
            display: flex;
            a{
                width: 3.2rem;
                padding: .266667rem;
                margin-right: .266667rem;
                box-shadow: 0 0 .266667rem #e1e1e1;
                border-radius: .08rem;
                text-align: center;
                >img{
                    width: 3.2rem;
                    height: 3.2rem;
                }
                >p:nth-child(2){
                    font-size: .346667rem;
                    color:#333;
                    margin-top: .08rem;
                    text-overflow:ellipsis;
                    overflow:hidden;
                    white-space:nowrap;
                }
                >p:nth-child(3){
                    font-size: .293333rem;
                    color: #9c9c9c;
                    margin-top: .08rem;
                }
                >p:nth-child(4){
                    font-size: .373333rem;
                    color: #f21c1c;
                    margin-top: .08rem;
                }
            }
        }

        //手机精品
        .boutiquepic{ //图片
            height: 1.44rem;
            margin-top: .266667rem;
            overflow: hidden;
            position: relative;
            img{
                height: 1.44rem;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
            }
        }
        .boutiqueone{
            display: flex;
            height: 3.333333rem;
            img{
                height: 3.333333rem;
            }
        }
        .boutiquetwo{
            display: flex;
            height: 3.333333rem;
            img{
                height: 3.333333rem;
            }
        }
        .boutiquethree{
            display: flex;
            height: 1.666667rem;
            img{
                height: 1.666667rem;
            }
        }

        //办公专家
        .officepic{ //图片
            height: 1.44rem;
            overflow: hidden;
            position: relative;
            img{
                height: 1.44rem;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
            }
        }
        .officeone{
            display: flex;
            height: 3.333333rem;
            img{
                height: 3.333333rem;
            }
        }
        .officetwo{
            display: flex;
            height: 3.333333rem;
            img{
                height: 3.333333rem;
            }
        }
        .officethree{
            display: flex;
            height: 1.666667rem;
            img{
                height: 1.666667rem;
            }
        }

        //智能生活
        .lifepic{ //图片
            height: 1.44rem;
            overflow: hidden;
            position: relative;
            img{
                height: 1.44rem;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
            }
        }
        .lifeone{
            display: flex;
            height: 3.333333rem;
            img{
                height: 3.333333rem;
            }
        }
        .lifetwo{
            display: flex;
            height: 1.666667rem;
            img{
                height: 1.666667rem;
            }
        }

        //发现好货
        .findpic{ //图片
            height: 1.44rem;
            overflow: hidden;
            position: relative;
            img{
                height: 1.44rem;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
            }
        }
        .findgood{ //内容
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            .goods{
                width: 4.6rem;
                background: #fff;
                margin-top: .3rem;
                padding-bottom: .266667rem;
                box-shadow: 0 .026667rem .266667rem #e1e1e1;
                border-radius: .08rem;
                .goodspic{
                    position: relative;
                    img:nth-child(1){
                        width: 4rem;
                        height: 4rem;
                        margin: .266667rem;
                    }
                    img:nth-child(2){
                        width: 1.2rem;
                        position: absolute;
                        top: 3.466667rem;
                        left:0;
                    }
                }
                .goodscon{
                    p:nth-child(1){
                        height: .682667rem;
                        font-size: .373333rem;
                        color: #87acd8;
                        background: #ebf6fe;
                        padding: .133333rem .4rem;
                        line-height: .416rem;
                    }
                    p:nth-child(2){
                        text-overflow:ellipsis;
                        overflow:hidden;
                        white-space:nowrap;
                        margin: .133333rem .4rem;
                        height: .448rem;
                        font-size: .373333rem;
                        color: #333;
                    }
                    p:nth-child(3){
                        margin: .133333rem .4rem 0;
                        color: #f21c1c;
                        font-size: .4rem;
                    }
                }
            }
        }
    }
</style>