import octicons from 'octicons';console.log(octicons)

export default {
    install(Vue,options){//console.log('options:',options)
        // 创建全局组件
        Vue.component('myicons',{
            props:{
                type:{
                    type:String,
                    required:true
                }
            },
            computed:{
                svg(){
                    return octicons[this.type].toSVG();
                }
            },
            template:'<div v-html="svg"></div>'
        })
    }
}


