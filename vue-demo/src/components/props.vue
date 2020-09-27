<template>
    <div>
        <!-- <div>请输入您的名字 <input type="text" v-model="myname"></div> -->
        <div>你好 {{pname}}</div>
    </div>
</template>
<script>
export default {
    props:{
        pname:{
            type: Number,
            required: true,
            // 为false时会在控制台warning
            validator: function(value){
                return value===222
            },
            // 不输入时的默认值
            default: function(){
            return 444  
        }
    },
    data:function(){
        return{
            message: "你好",
            myname:null
        }
    }
}
}
</script>