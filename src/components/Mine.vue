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
                    <a href="javascript:;">
                        <p>0</p>
                        <p>账户余额</p>
                    </a>
                    <a href="javascript:;">
                        <p>0</p>
                        <p>优惠券</p>
                    </a>
                    <a href="javascript:;">
                        <p>0</p>
                        <p>积分</p>
                    </a>
                    <a href="javascript:;">
                        <p>0</p>
                        <p>九机币</p>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        //返回上一页
        goback(){
            this.$router.go(-1);
        },
        gologin(){
            this.$router.push('/login');
        },
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
    }
</style>