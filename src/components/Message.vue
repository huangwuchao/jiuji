<template>
    <div id="Message">
        <div class="messtop">
            <div>
                <p>消息中心</p>
                <p>共0条未读消息</p>
            </div>
            <div></div>
        </div>
        <div class="messbottom">
            <img src="../assets/nofound.png" alt="">
            <p>暂无相关消息</p>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    #Message{
        flex:1;
        overflow-x: hidden;
        .messtop{
            height: 4.4rem;
            position: relative;
            >div:nth-child(1){
                height: 96px;
                background: #f21c1c;
                padding: .266667rem;
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
            >div:nth-child(2){
                width: 9.205333rem;
                height: 2.533333rem;
                background: #fff;
                position: absolute;
                bottom: 0;
                left: 50%;
                transform: translateX(-50%);
                padding: 0 .266667rem;
                border-radius: .106667rem;
                box-shadow: 0 .053333rem .133333rem #ccc;
            }
        }
        .messbottom{
            padding-top: 3.466667rem;
            >img{
                width: 1.6rem;
                height: 1.6rem;
                margin-left: 50%;
                transform: translateX(-50%);
            }
            >p{
                margin-top: .133333rem;
                color: #9c9c9c;
                font-size: .373333rem;
                text-align: center;
            }
        }
    }
</style>