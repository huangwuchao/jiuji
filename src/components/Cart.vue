<template>
    <div id="Cart">
        <div class="cartop">
            <a href="javascript:;" @click="goback" class="fa fa-angle-left"></a>
            <a href="javascript:;">编辑</a>
        </div>
        <div class="car">
            <p>购物车</p>
            <p>共0件商品</p>
        </div>
        <div class="carcon">
            <i class="fa fa-shopping-cart"></i>
            <p>购物车里什么都没有，快去买点什么吧~</p>
            <a href="javscript:;" @click="gohome">去逛逛</a>
        </div>
        <img src="../assets/seemore.png" alt="">
        <div class="seemore">
            
            <a :href="item.sku[0].ppid" class="see" v-for="(item,idx) in seemore" :key="idx">
                <img :src="item.sku[0].imagePath" alt="">
                <p>{{item.name}}{{item.name}}</p>
                <div>
                    <span>￥{{item.sku[0].price}}</span>
                    <a :href="item.sku[0].ppid" class="fa fa-shopping-cart"></a>
                </div>
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
            seemore:[],
        }
    },
    methods:{
        //返回上一页
        goback(){
            this.$router.go(-1);
        },

        //返回首页
        gohome(){
            // console.log(this.$router);
            this.$router.push('/');
        }
    },
    created(){
        Axios.get('/dbapi/tmpBasket/list/v1').then(res=>{
            // console.log(res.data.data.recommend.list);
            
            var see = res.data.data.recommend.list.map(function(item){
                // console.log(item.sku[0].ppid);
                item.sku[0].ppid = 'https://m.9ji.com/product/'+item.sku[0].ppid+'.html';
            })
            this.seemore = res.data.data.recommend.list;
        })

        
    }
}
</script>
<style lang="scss">
    #Cart{
        flex:1;
        overflow-x: hidden;
        .cartop{
            height: 1.173333rem;
            background: #f21c1c;
            display: flex;
            justify-content: space-between;
            >a{
                display: block;
                width: 1.173333rem;
                height: 1.173333rem;
            }
            >a:nth-child(1){
                font-size: .8rem;
                color: #fff;
                text-align: center;
                line-height: 1.173333rem;
            }
            >a:nth-child(2){
                font-size: .373333rem;
                color: #fff;
                text-align: center;
                line-height: 1.173333rem;
                padding-right: .266667rem;
            }

        }
        .car{
            height: 1.6rem;
            padding: .266667rem;
            background: #f21c1c;
            >p:nth-child(1){
                font-size: .48rem;
                font-weight: 700;
                color: #fff;
            }
            >p:nth-child(2){
                font-size: .373333rem;
                color: #fff;
            }
        }
        .carcon{
            height: 4.8rem;
            background: #fff;
            padding: .533333rem 0;
            >i{
                display: block;
                font-size: 1.28rem;
                color: #ccc;
                text-align: center;
            }
            >p{
                width: 6.666667rem;
                font-size: .373333rem;
                color: #9c9c9c;
                margin: .533333rem 0 .533333rem 50%;
                transform: translateX(-50%);
            }
            >a{
                display: block;
                width: 1.866667rem;
                height: .96rem;
                line-height: .96rem;
                border-radius: .08rem;
                border: .026667rem solid #333;
                font-size: .373333rem;
                color: #333;
                text-align: center;
                margin-left: 50%;
                transform: translateX(-50%);
            }
        }
        >img{
                width: 100%;
            }
        .seemore{
            overflow: hidden;
            padding: 0 .373333rem;
            display: flex;
            flex-wrap: wrap;
            .see{
                width: 4.5rem;
                padding: 0 .266667rem .266667rem;
                display: flex;
                flex-direction: column;
                >img{
                    width: 100%;
                }
                >p{
                    margin-top: .133333rem;
                    font-size: .373333rem;
                    color:#333;
                    font-weight: 400;

                    overflow:hidden; 

                    text-overflow:ellipsis;

                    display:-webkit-box; 

                    -webkit-box-orient:vertical;

                    -webkit-line-clamp:2; 
                }
                >div:nth-child(3){
                    margin-top: .133333rem;
                    height: .533333rem;
                    line-height: .533333rem;
                    display: flex;
                    justify-content: space-between;
                    border-radius: .106667rem;
                    box-shadow: 0 .053333rem .266667rem rgba(0,0,0,.08);
                    >span{
                        font-size: .426667rem;
                        color: #f21c1c;
                    }
                    >a{
                        height: .533333rem;
                        font-size: .533333rem;
                        color: #333;
                        line-height: .533333rem;
                    }
                }
            }
        }
    }
</style>