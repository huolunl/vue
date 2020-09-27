<template>
    <div>
        <p>你最喜欢的游戏是:{{mygame}}</p>
        <input type="text" v-model="mygame">
    </div>
</template>


<script>
export default {
        data:function(){
            return{
                mygame:"黑暗之魂"
            }
        }
}
</script>