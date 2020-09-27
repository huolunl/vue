<template>
<dir>
<p>

            今年3月3日 switch的价格是{{price}}  含税{{priceinTax}} 人民币 {{priceChinaRMB}}
            <button @click="click">+1000</button>

</p>

</dir>


</template>

<script>
export default {
    data: function(){
        return{
            price:29980,
            priceinTax:0,
            priceChinaRMB:0
        }

    },
    watch: {
        // 监听price的变化， price变化就触发这个函数
        price: function(newvalue,oldvalue){
            this.priceinTax = Math.round(this.price *1.08)
            this.priceChinaRMB= Math.round(this.priceinTax/16.75)
        }
    },
    methods: {
        click: function(){
            this.price += 10000
        }
    }

}
</script>