<template>
    <div id="xianshigou">
        <!-- 轮播图 -->
        <div class="xsgbanner">
            <mt-swipe :auto="3000" style="height:5rem">
                <mt-swipe-item v-for="(item,idx) in xsgban" :key="idx" class="bann">
                    <a :href="item.link">
                        <img :src="item.imagePath" style="height:5rem">
                    </a>
                </mt-swipe-item>
            </mt-swipe>
        </div>

        <!-- 抢购日期表 -->
        <div class="xsgdata">
            <a href="javascript:;" v-for="(item,idx) in week" :key="idx">
                <p :class="{pone:item.isToday}">{{item.title}}</p>
                <p :class="{ptwo:item.isToday}">{{item.description}}</p>
            </a>
        </div>

        <!-- 倒计时 -->
        <div class="countdown">
            <p>距结束：
                <countdown :callback="callback" endTime="1548960000"></countdown>
            </p>
        </div>

        <!-- 限时购列表 -->
        <div class="xsglist">
            <a :href="item.url" v-for="(item,idx) in xsgbuy" :key="idx">
                <img :src="item.imagePath" alt="">
                <div>
                    <p>{{item.name}}</p>
                    <p>{{item.description}}</p>
                    <div>
                        <span>￥</span>
                        <span>{{item.price}}</span>
                        <del>￥{{item.originalPrice}}</del>
                    </div>
                    <div class="percentage">
                        <span>还剩余{{item.surplusCount}}件</span>
                        <i></i>
                    </div>
                    <div class="Buy">去抢购</div>
                </div>
            </a>
        </div>
    </div>
</template>
<script>

import Vue from "vue";

//引入axios
import Axios from 'axios';
import { setInterval } from 'timers';


import countdown from '../countdown';

export default {
    components: {
        countdown
    },
    data(){
        return{
            xsgban:[], //轮播图
            week:[], //星期几星期几那一栏
            inde:0, //下标
            xsgbuy:[], //限时购列表
        }
    },
    created(){
        Axios.get('/dbapi/floors/v1?label=891839163259564033&page=1&random=1547769473712').then(res=>{
            // console.log(res.data.data.container.floor[1].content.product[7]);
            this.week = res.data.data.container.floor[1].content.tabs;
            this.xsgban = res.data.data.container.floor[0].content;

            for(var i=0;i<this.week.length;i++){
                if(this.week[i].isToday){
                    this.inde = i;
                }
            }
            // console.log(this.inde)

            this.xsgbuy = res.data.data.container.floor[1].content.product[this.inde].list;
            // console.log(this.xsgbuy)
        })
    },
    methods: {
        callback: function(){},

    },
    mounted() {
        
    },
}
</script>
<style lang="scss" scoped>
    #xianshigou{
        .xsgbanner{
            height: 5.4rem;
            background: linear-gradient(#e10f02,#e10f02 70%,#fff 0,#fff);
            padding: .373333rem;
            .bann{
                border-radius: .133333rem;
                overflow: hidden;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .xsgdata{ //星期几星期几那一栏
            height: 1.546667rem;
            margin-bottom: .266667rem;
            padding: .266667rem 0;
            display: flex;
            // overflow: hidden;
            overflow: auto;
            box-shadow: rgb(238, 238, 238) 0 .133333rem .213333rem;
            >a{
                display: block;
                width: 2.133333rem;
                flex-shrink: 0;
                // display: flex;
                // flex-direction: column;
                >p:nth-child(1){
                    // width: 1.2rem;
                    width: 1.733333rem;
                    color: #333;
                    padding: .106667rem .266667rem;
                    margin: auto;
                    // background: #2ac57f;
                    font-size: .4rem;
                    border-radius: .8rem;
                    text-align: center;
                }
                >p:nth-child(2){
                    color: #999;
                    font-size: .346667rem;
                    text-align: center;
                }
                >.pone{
                    background: #f21c1c;
                    color: #fff !important;
                }
                >.ptwo{
                    color: #f21c1c !important;
                }
            }
        }
        .countdown{ //倒计时
            height: .186667rem;
            margin: .533333rem .4rem;
            border-bottom: .053333rem dotted #f21c1c;
            position: relative;
            >p{
                width: 5.333333rem;
                font-size: .373333rem;
                background: #fff;
                margin-left: 50%;
                transform: translateX(-50%);
                color: #f21c1c;
                display: flex;
                justify-content: center;
                >countdown{
                    color: #f21c1c;
                }
            }
            
        }
        .xsglist{
            display: flex;
            flex-direction: column;
            overflow-y: auto;
            >a{
                display: flex;
                padding: .266667rem;
                >img{
                    width: 2.4rem;
                    height: 2.4rem;
                    margin-right: .266667rem;
                }
                >div{
                    display: flex;
                    flex-direction: column;
                    >p:nth-child(1){
                        color: #333;
                        font-size: .4rem;
                    }
                    >p:nth-child(2){
                        color: #9c9c9c;
                        font-size: .373333rem;
                        margin-top: .133333rem;
                    }
                    >div:nth-child(3){
                        display: flex;
                        >span:nth-child(1){
                            margin-top: .213333rem;
                            height: .32rem;
                            font-size: .32rem;
                            font-weight: 700;
                            color: #000;
                        }
                        >span:nth-child(2){
                            font-size: .533333rem;
                            font-weight: 700;
                            color: #000;
                            margin-right: .266667rem;
                        }
                        >del{
                            margin-top: .213333rem;
                            height: .32rem;
                            font-size: .32rem;
                            color: #9c9c9c;
                        }
                    }
                    .percentage{
                        margin: .133333rem 0 0 .133333rem;
                        width: 4.346667rem;
                        height: .426667rem;
                        border: .026667rem solid #fa6571;
                        border-radius: .213333rem;
                        position: relative;
                        >span{
                            font-size: .32rem;
                            color: #fff;
                            position: absolute;
                            left: .186667rem;
                            top: -0.026667rem;            
                        }
                        >i{
                            display: block;
                            height: .426667rem;
                            width: 70%;
                            min-width: 1.6rem;
                            background: #fa5471;
                            border-radius: .213333rem;
                        }
                    }
                    .Buy{
                        width: 1.866667rem;
                        height: .8rem;
                        background: #f21c1c;
                        transform: translate(4.8rem,-0.8rem);
                        border-radius: .8rem;
                        color: #fff;
                        font-size: .373333rem;
                        line-height: .8rem;
                        text-align: center;
                    }
                }
            }
        }
    }
</style>