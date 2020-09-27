<template>
    <div>
        <p> 您喜欢的游戏{{mygame}}</p>
        <button v-on:click="btnclick('我的世界')">我的世界</button>
        <button v-on:click="btnclick('勇者斗恶龙')">勇者斗恶龙</button>
        <button v-on:click="btnclick('塞尔达传说')">塞尔达传说</button>
        <button @click="btnclick('魔界战记')">魔界战记</button>
    </div>
</template>
<script>
export default {
    data: function(){
        return{
            mygame:"超级马里奥"
        }
    },
    methods: {
btnclick: function(pname){
    this.mygame = pname
}
    }

}
</script>