<template>
    <div>
        <p>你最喜欢的游戏是:{{mygame}}</p>
        <!-- .lazy修饰后光标离开输入框才会触发数据传递 -->
        <!-- .number仅支持数字 -->
        <!-- .trim自动去掉两端的空格 -->
        <input type="text" v-model.lazy="mygame">

        <!-- v-model绑定数组的时候会把value加入到数组 -->
        <input type="checkbox" v-model="checkgames" value="黑暗之魂"> 黑暗之魂
        <input type="checkbox" v-model="checkgames" value="塞尔达传说"> 塞尔达传说
        <p>您选择的游戏是{{checkgames}}</p>
    </div>
</template>


<script>
export default {
        data:function(){
            return{
                mygame:"黑暗之魂",
                checkgames:[]
            }
        }
}
</script>