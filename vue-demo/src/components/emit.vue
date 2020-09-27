<template>
    <div>
        <button @click="btnclick">事件上传</button>
    </div>
</template>


<script>
export default {
    data:function(){
        return{
            value:100
        }
    },
    methods:{
        btnclick: function(){
            // 触发父组件上的add_event, 并传入一个object
            this.$emit("add-event",{
                result:this.value
            })
        }
    }
}
</script>