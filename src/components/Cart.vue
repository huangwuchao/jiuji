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










        <!-- 购物车内容 -->
        <div class="shoppingcar">
            <div class="commodity" v-for="(item,idx) in cartlist" :key="idx">
                <input type="checkbox" class="selectone" @click="checkone" v-model="checked" :value="item.id">
                <div>
                    <img :src="item.image" alt="">
                    <a href="javascript:;"> <!-- 选服务按钮 -->
                        <img src="../assets/dun.png" alt="">
                        <span>选服务</span>
                    </a>
                </div>
                <div>
                    <p>{{item.name}}</p>
                    <div>
                        <p>￥{{item.price}}</p>
                        <div>
                            <a href="javascript:;" class="plus">-</a>
                            <span>{{item.number}}</span>
                            <a href="javascript:;" class="minus">+</a>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>









        <!-- 购物车为空 -->
        <div class="carcon" v-if="showing">
            <i class="fa fa-shopping-cart"></i>
            <p>购物车里什么都没有，快去买点什么吧~</p>
            <a href="javscript:;" @click="gohome">去逛逛</a>
        </div>

        <!-- 看看热卖 -->
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






        <!-- 结算 -->
        <div class="clearaccount">
            <input type="checkbox" class="selectall" @click="checkAll" v-model="checkall">
            <span>全选</span>
            <div>
                <span>合计：</span>
                <span class="allprice">￥0.00</span>
            </div>
            <a href="javascript:;">去结算</a>
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
            cartlist:[{
                id:1,
                name:'华为Mate20 Pro (LYA-AL00) 全网通版 亮黑色 8GB+256GB (UD)',
                price:'6799.00',
                number:1,
                image:'https://img2.ch999img.com/pic/product/440x440/20181017004429895.jpg',
                // checked:true,
            },
            {
                id:2,
                name:'Apple iPhone X (A1865) 全网通版 银色 64GB',
                price:'5960.00',
                number:1,
                image:'https://img2.ch999img.com/pic/product/440x440/20190116164007470.jpg',
                // checked:true,
            }],
            showing:'',

            checkall: false,
            checked: [],
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
        },

        checkAll: function () {
            var _this = this
            if (this.checkall) {
                // 实现反选
                this.checked = []
            } else {
                // 实现全选
                this.checked = []
                this.cartlist.forEach(function (item) {
                    _this.checked.push(item.id)
                })
            }
            // console.log(this.checked.length);
            // console.log(this.cartlist.length);
            if (this.checked.length == this.cartlist.length) {
                this.checkall = true
            }
        },

        checkone: function(){
            
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
            //判断购物车是否有商品
            // var shoppingcar = JSON.stringify(this.cartlist)
            if(this.cartlist[0].name){
                //有商品
                // console.log(1);
                this.showing = false;

            }else{
                //没有商品
                // console.log(2);
                this.showing = true;
            }
            
        });
    }
}
</script>
<style lang="scss">
    #Cart{
        flex:1;
        overflow-x: hidden;
        position: relative;
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
            margin-top: -0.026667rem;
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











        //购物车内容
        .shoppingcar{
            padding-top: .4rem;
            background: #f5f5f5;
            .commodity{
                height: 3.413333rem;
                margin: 0 .373333rem .4rem;
                display: flex;
                align-items: center;
                box-shadow: 0 .053333rem .266667rem 0 rgba(0,0,0,.08);
                >input{
                    // display: block;
                    width: .533333rem;
                    height: .533333rem;
                    border: .026667rem solid #ccc;
                    background: #fff;
                    margin-right: .133333rem;
                    margin-left: .266667rem;
                }
                >div:nth-child(2){
                    margin: 0 .133333rem 0 .266667rem;
                    width: 1.866667rem;
                    >img{
                        border: .026667rem solid #dfdfdf;
                        height: 1.866667rem;
                    }
                    >a{
                        padding: 0 .133333rem;
                        margin-top: .266667rem;
                        width: 1.813333rem;
                        height: .64rem;
                        border: .026667rem solid #dfdfdf;
                        display: flex;
                        align-items: center;
                        margin-left: .053333rem;
                        >img{
                            width: .4rem;
                            height: .4rem;
                            margin-right: .133333rem;
                        }
                        >span{
                            font-size: .32rem;
                            color: #333;
                        }
                    }
                }
                >div:nth-child(3){
                    width: 5.733333rem;
                    height: 2.88rem;
                    margin-left: .266667rem;
                    >p{
                        color: #333;
                        font-size: .373333rem;
                    }
                    >div{
                        height: .64rem;
                        margin: .533333rem .266667rem 0 0;
                        display: flex;
                        justify-content: space-between;
                        >p{
                            line-height: .64rem;
                            font-size: .373333rem;
                            color: #f21c1c;
                        }
                        >div{
                            border: .026667rem solid #ccc;
                            display: flex;
                            >a{
                                display: block;
                                width: .64rem;
                                height: .64rem;
                                color: #333;
                                font-size: .373333rem;
                                line-height: .64rem;
                                text-align: center;
                            }
                            >span{
                                display: block;
                                width: .8rem;
                                height: .64rem;
                                color: #333;
                                font-size: .373333rem;
                                line-height: .64rem;
                                text-align: center;
                                box-sizing: border-box;
                                border-left: .026667rem solid #ccc;
                                border-right: .026667rem solid #ccc;
                            }
                        }
                        
                    }
                }
            }
        }








        //购物车为空
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


        // 结算
        .clearaccount{
            width: 100%;
            background: #fff;
            z-index: 5;
            height: 1.333333rem;
            position: fixed;
            bottom: 0;
            left: 0;
            display: flex;
            align-items: center;
            .selectall{
                margin-left: .266667rem;
                width: .586667rem;
                height: .586667rem;
            }
            >span{
                color: #333;
                font-size: .373333rem;
                margin-left: .133333rem;
            }
            >div:nth-child(3){
                flex: 1;
                height: 1.333333rem;
                display: flex;
                align-items: center;
                justify-content: center;
                >span:nth-child(1){
                    font-size: .373333rem;
                    color: #333;
                }
                >span:nth-child(2){
                    font-size: .373333rem;
                    color: #f21c1c;
                }

            }
            >a:nth-child(4){
                display: block;
                width: 2.666667rem;
                height: 1.333333rem;
                font-size: .373333rem;
                line-height: 1.333333rem;
                text-align: center;
                background: #f21c1c;
                color: #fff;
            }
        }
    }
</style>