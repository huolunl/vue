<template>
<div id="iffor">
    <h3>游戏列表</h3>
    <!-- 服务器端渲染，如果为false 该dom 不会出现在页面上 -->
    <p v-if="seen">2017最新发卖!</p>
    <ol>
        <li v-for="game in games" :key="game.price">{{game.title}}价格{{game.price}}</li>
    </ol>
</div>
</template>
<script>
export default {
    name: "iffor",
    data(){
        return{
            seen: true,
            games: [
                {title:"勇者斗恶龙",price:100},
                {title:"我的世界",price:10}
            ]

        }
    }

}
</script>