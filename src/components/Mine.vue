<template>
    <div id="Mine">
        <div class="minetop">
            <div class="mineset">
                <a href="javascript:;" class="fa fa-angle-left" @click="goback"></a>
                <a href="https://m.9ji.com/member/setting">
                    <span>设置</span>
                    <span class="fa fa-cog"></span>
                </a>
            </div>
            <div class="miner">
                <div>
                    <a href="javascript:;">
                        <img src="../assets/touxiang.jpg" alt="" @click="gologin">
                    </a>
                    <span>欢迎回来，黄武超</span>
                </div>
                <div>
                    <a :href="item.link" v-for="(item,idx) in property" :key="idx">
                        <p>{{item.number}}</p>
                        <p>{{item.title}}</p>
                    </a>
                </div>
            </div>
            <div class="myorder"> <!-- 我的订单 -->
                <div>
                    <h4>我的订单</h4>
                    <a href="https://m.9ji.com/member/order/more">
                        <span>全部订单</span>
                        <i class="fa fa-angle-right"></i>
                    </a>
                </div>
                <div>
                    <a :href="item.link" v-for="(item,idx) in buy" :key="idx">
                        <img :src="item.imagePath" alt="">
                        <p>{{item.title}}</p>
                    </a>
                </div>
            </div>
            <div class="aftersales"> <!-- 售后收藏 -->
                <div>
                    <h4>售后|收藏</h4>
                    <a href="javascript:;"></a>
                </div>
                <div>
                    <a :href="item.link" v-for="(item,idx) in afters" :key="idx">
                        <img :src="item.imagePath" alt="">
                        <p>{{item.title}}</p>
                    </a>
                </div>
            </div>
            <div class="functonality"> <!-- 常用功能 -->
                <div>
                    <h4>常用功能</h4>
                    <a href="https://m.9ji.com/member/more">
                        <span>更多功能</span>
                        <i class="fa fa-angle-right"></i>
                    </a>
                </div>
                <div>
                    <a :href="item.link" v-for="(item,idx) in buy" :key="idx">
                        <img :src="item.imagePath" alt="">
                        <p>{{item.title}}</p>
                    </a>
                </div>
            </div>
            <div class="message"> <!-- 我的信息 -->
                <div>
                    <h4>我的信息</h4>
                    <a href="javascript:;"></a>
                </div>
                <div>
                    <a :href="item.link" v-for="(item,idx) in mess" :key="idx">
                        <img :src="item.imagePath" alt="">
                        <p>{{item.title}}</p>
                    </a>
                </div>
            </div>
            <div class="contact"> <!-- 联系我们 -->
                <div>
                    <h4>我的信息</h4>
                    <a href="javascript:;"></a>
                </div>
                <div>
                    <a :href="item.link" v-for="(item,idx) in contact" :key="idx">
                        <img :src="item.imagePath" alt="">
                        <p>{{item.title}}</p>
                    </a>
                </div>
            </div>
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
            property:[], //账户余额那一栏
            buy:[], //待付款那一栏
            afters:[], //售后收藏那一栏
            funct:[], //常用功能那一栏
            mess:[], //我的信息那一栏
            contact:[], //联系我们那一栏
        }
    },
    methods:{
        //返回上一页
        goback(){
            this.$router.go(-1);
        },
        gologin(){
            this.$router.push('/login');
        },
    },
    created(){
        Axios.get('/dbapi/member/index/v1?v=0.6207779286466282').then(res=>{
            // console.log(res.data.data.menu[0].item);
            this.property = res.data.data.property;
            this.buy = res.data.data.menu[0].item;
            this.afters = res.data.data.menu[1].item;
            this.funct = res.data.data.menu[2].item;
            this.mess = res.data.data.menu[3].item;
            this.contact = res.data.data.menu[4].item;
        })
    }
}
</script>
<style lang="scss">
    #Mine{
        flex:1;
        overflow-x: hidden;
        .minetop{
            height: 2.586667rem;
            background: #f21c1c;
            .mineset{
                height: 1.173333rem;
                display: flex;
                justify-content: space-between;
                // align-items: center;
                >a:nth-child(1){
                    width: 1.173333rem;
                    height: 1.173333rem;
                    line-height: 1.173333rem;
                    text-align: center;
                    font-size: .8rem;
                    color: #fff;
                }
                >a:nth-child(2){
                    width: 1.56rem;
                    height: 1.173333rem;
                    padding-right: .266667rem;
                    display: flex;
                    justify-content: space-between;
                    >span:nth-child(1){
                        font-size: .373333rem;
                        color: #fff;
                        line-height: 1.173333rem;
                    }
                    >span:nth-child(2){
                        font-size: .48rem;
                        color: #fff;
                        line-height: 1.173333rem;
                    }
                }
            }
        }
        .miner{
            height: 4.76rem;
            padding: 0 .266667rem;
            margin: .266667rem .4rem ;
            background: #fff;
            border-radius: .266667rem;
            box-shadow: 0 .053333rem .133333rem #ccc;
            >div:nth-child(1){
                height: 3.093333rem;
                padding: .533333rem 0;
                // background: #000;
                display: flex;
                >a:nth-child(1){
                    width: 2.293333rem;
                    height: 2.026667rem;
                    padding-right: .266667rem;
                    overflow: hidden;
                    >img:nth-child(1){
                        width: 2.026667rem;
                        height: 2.026667rem;
                        border: .08rem solid #fff;
                        margin-right: .266667rem;
                        box-shadow: 0 .053333rem .133333rem #ccc;
                        border-radius: 100%;
                    }
                }
                >span:nth-child(2){
                    font-size: .373333rem;
                    color: #f21c1c;
                    line-height: 2.026667rem;
                }
            }
            >div:nth-child(2){
                height: 1.4rem;
                padding-bottom: .266667rem;
                display: flex;
                >a{
                    flex: 1;
                    height: 1.133333rem;
                    >p:nth-child(1){
                        font-size: .373333rem;
                        color: #333;
                        margin-top: .213333rem;
                        text-align: center;
                    }
                    >p:nth-child(2){
                        font-size: .346667rem;
                        color: #333;
                        margin-top: .213333rem;
                        text-align: center;
                    }
                }
            }
            
        }
        .myorder{
            height: 3.306667rem;
            margin: .48rem .4rem;
            background: #fff;
            box-shadow: 0 .053333rem .133333rem #ccc;
            border-radius: .266667rem;
            >div:nth-child(1){
                height: 1.173333rem;
                padding: 0 .266667rem;
                display: flex;
                justify-content: space-between;
                >h4{
                    font-size: .426667rem;
                    color: #333;
                    line-height: 1.173333rem;
                }
                >a{
                    display: flex;
                    align-items: center;
                    >span{
                        font-size: .373333rem;
                        line-height: 1.173333rem;
                        color: rgb(156,156,156);
                        margin-right: .213333rem;
                    }
                    >i{
                        font-size: .64rem;
                        color: rgb(156,156,156);
                    }
                }
            }
            >div:nth-child(2){
                display: flex;
                >a{
                    flex: 1;
                    height: 2.133333rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    >img{
                        width: .64rem;
                        height: .64rem;
                        margin-bottom: .213333rem;
                    }
                    >p{
                        font-size: .346667rem;
                        color: #333;
                    }
                }
            }
        }
        .aftersales{
            height: 3.306667rem;
            margin: .48rem .4rem;
            background: #fff;
            box-shadow: 0 .053333rem .133333rem #ccc;
            border-radius: .266667rem;
            >div:nth-child(1){
                height: 1.173333rem;
                padding: 0 .266667rem;
                display: flex;
                justify-content: space-between;
                >h4{
                    font-size: .426667rem;
                    color: #333;
                    line-height: 1.173333rem;
                }
            }
            >div:nth-child(2){
                display: flex;
                >a{
                    flex: 1;
                    height: 2.133333rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    >img{
                        width: .64rem;
                        height: .64rem;
                        margin-bottom: .213333rem;
                    }
                    >p{
                        font-size: .346667rem;
                        color: #333;
                    }
                }
            }
        }
        .functonality{
            height: 3.306667rem;
            margin: .48rem .4rem;
            background: #fff;
            box-shadow: 0 .053333rem .133333rem #ccc;
            border-radius: .266667rem;
            >div:nth-child(1){
                height: 1.173333rem;
                padding: 0 .266667rem;
                display: flex;
                justify-content: space-between;
                >h4{
                    font-size: .426667rem;
                    color: #333;
                    line-height: 1.173333rem;
                }
                >a{
                    display: flex;
                    align-items: center;
                    >span{
                        font-size: .373333rem;
                        line-height: 1.173333rem;
                        color: rgb(156,156,156);
                        margin-right: .213333rem;
                    }
                    >i{
                        font-size: .64rem;
                        color: rgb(156,156,156);
                    }
                }
            }
            >div:nth-child(2){
                display: flex;
                >a{
                    flex: 1;
                    height: 2.133333rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    >img{
                        width: .64rem;
                        height: .64rem;
                        margin-bottom: .213333rem;
                    }
                    >p{
                        font-size: .346667rem;
                        color: #333;
                    }
                }
            }
        }
        .message{
            height: 3.306667rem;
            margin: .48rem .4rem;
            background: #fff;
            box-shadow: 0 .053333rem .133333rem #ccc;
            border-radius: .266667rem;
            >div:nth-child(1){
                height: 1.173333rem;
                padding: 0 .266667rem;
                display: flex;
                justify-content: space-between;
                >h4{
                    font-size: .426667rem;
                    color: #333;
                    line-height: 1.173333rem;
                }
            }
            >div:nth-child(2){
                display: flex;
                >a{
                    flex: 0.25;
                    height: 2.133333rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    >img{
                        width: .64rem;
                        height: .64rem;
                        margin-bottom: .213333rem;
                    }
                    >p{
                        font-size: .346667rem;
                        color: #333;
                    }
                }
            }
        }
        .contact{
            height: 3.306667rem;
            margin: .48rem .4rem;
            background: #fff;
            box-shadow: 0 .053333rem .133333rem #ccc;
            border-radius: .266667rem;
            >div:nth-child(1){
                height: 1.173333rem;
                padding: 0 .266667rem;
                display: flex;
                justify-content: space-between;
                >h4{
                    font-size: .426667rem;
                    color: #333;
                    line-height: 1.173333rem;
                }
            }
            >div:nth-child(2){
                display: flex;
                >a{
                    flex: 1;
                    height: 2.133333rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    >img{
                        width: .64rem;
                        height: .64rem;
                        margin-bottom: .213333rem;
                    }
                    >p{
                        font-size: .346667rem;
                        color: #333;
                    }
                }
            }
        }
    }
</style>