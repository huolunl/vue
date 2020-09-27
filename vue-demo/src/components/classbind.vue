<template>
<div>
    <!-- isactive为true的时候， 会把active赋值给class -->
    <div :class="{active:isactive}">哈哈</div>
    <button @click="btnclick">改变class吧</button>
</div>
</template>

<script>
export default {
    data: function(){
        return{
            isactive:true
        }
    },
    methods:{
        btnclick: function(){
            console.log(this.isactive)
            this.isactive=!this.isactive
        }
    }
}
</script>

<style scoped>
.active{
    color:red
}
</style>