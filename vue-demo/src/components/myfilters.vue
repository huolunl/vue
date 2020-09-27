<template>
    <div>
        <p>{{message}}</p>
        <!-- 使用过滤器 本质就是个函数传参数 -->
        <p>{{message | toupper}}</p>
        <p>现在学习vue的进度是{{num | topercentage}}</p>
    </div>
</template>

<script>
export default {
    data: function(){
        return{
            message: 'hello vue.js',
            num:0.3
        }
    },
    // 过滤器就是个函数
    // todo 无法使用
    filters: {
        toupper: function(value){
            return value.toUpperCase();
        },
        topercentage: function(value){
            return value *100 +'%';
        }
    }
}
</script>