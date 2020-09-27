<template>
    <div>
        <!-- myclass是一个对象 可以绑定给class属性 -->
        <div :class="myclass">哈哈哈哈哈哈</div>
        <button @click="btnclick()">改变class吧</button>
    </div>
</template>

<script>
export default {
    data: function(){
        return{
            myclass:{
                active: true,
                big: true
            }
        }
    },
    methods: {
        btnclick: function(){
            this.myclass.active=!this.myclass.active
            this.myclass.big=!this.myclass.big
        }
    }
}
</script>

<style>
.active{
    color: red;
}
.big{
    font-weight: bolder;
    font-size: 64px;
}
</style>