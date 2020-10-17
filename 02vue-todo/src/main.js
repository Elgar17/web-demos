// 创建VUE根实例
import Vue  from 'vue'

// 导入app组件
import App from './app.vue'

// 创建VUE根实例
new Vue({
    el: '#app',
    components:{
        App
    },
    template: '<App/>'
})

// 挂在app组件
