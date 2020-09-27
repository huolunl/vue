<template>
    <div>
        今年3月3日 switch的价格是{{price}}  含税{{priceinTax}} 人民币 {{priceChinaRMB}}
    </div>

</template>

<script>
export default {
    data: function(){
        return{
            price: 29980
        }
    },

    // 计算属性， {{priceinTax}} 就能拿到
    computed: {
        priceinTax: function(){
            return this.price * 1.08;
        },
        priceChinaRMB: function(){
            return Math.round(this.priceinTax /16.75)
        }
    }


}
</script>