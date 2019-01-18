<template>
    <div id="xianshigou">
        <!-- 轮播图 -->
        <div class="xsgbanner">
            <mt-swipe :auto="3000" style="height:5rem">
                <mt-swipe-item v-for="(item,idx) in xsgban" :key="idx" class="bann">
                    <img :src="item.imagePath" style="height:5rem">
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
    </div>
</template>
<script>
import Vue from "vue";

//引入axios
import Axios from 'axios';

export default {
    data(){
        return{
            xsgban:[], //轮播图
            week:[], //星期几星期几那一栏

            //倒计时
            hr: 0,
            min: 0,
            sec: 0,

        }
    },
    created(){
        Axios.get('/dbapi/floors/v1?label=891839163259564033&page=1&random=1547769473712').then(res=>{
            console.log(res.data.data.container.floor[0].content);
            this.week = res.data.data.container.floor[1].content.tabs;
            this.xsgban = res.data.data.container.floor[0].content;
        })
    },
    methods: {
        countdown: function (){
            // 目标日期时间戳
            let end = Date.parse(new Date('2019-01-19'));
            // 当前时间戳
            let now = Date.parse(new Date());
            // 相差的毫秒数
            let msec = end - now;
            // 刷新为10点
            if(msec == 0){
                msec = 864000000;
                // 计算时分秒数
                let hr = parseInt(msec / 1000 / 60 / 60)
                let min = parseInt(msec / 1000 / 60 % 60)
                let sec = parseInt(msec / 1000 % 60)
                // 个位数前补零
                this.hr = hr > 9 ? hr : '0' + hr
                this.min = min > 9 ? min : '0' + min
                this.sec = sec > 9 ? sec : '0' + sec
            }else{
                // 计算时分秒数
                let hr = parseInt(msec / 1000 / 60 / 60)
                let min = parseInt(msec / 1000 / 60 % 60)
                let sec = parseInt(msec / 1000 % 60)
                // 个位数前补零
                this.hr = hr > 9 ? hr : '0' + hr
                this.min = min > 9 ? min : '0' + min
                this.sec = sec > 9 ? sec : '0' + sec
            }
            
            const that = this;

            // 控制台打印
            // console.log(`${hr}小时 ${min}分钟 ${sec}秒`);
            
            // 一秒后递归
            setTimeout(function () {
                that.countdown()
            }, 1000)
        }
    },
    mounted: function () {
        //倒计时
        this.countdown()
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
            }
        }
        .xsgdata{ //星期几星期几那一栏
            height: 1.546667rem;
            margin-bottom: .266667rem;
            padding: .266667rem 0;
            display: flex;
            // overflow: hidden;
            overflow: auto;
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
    }
</style>