<template>
    <div>
        今年3月3日 switch的价格是{{price}}  含税{{priceinTax}} 人民币 {{priceChinaRMB}}
        <button @click="btnclick(600)">huilv</button>
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
        // 设置 pricechinarmb时调用set ，获取时调用get
        priceChinaRMB: {
            set: function(value){
                this.price=(value *16) /1.08
            },
            get: function(){
                return this.priceinTax/16
            }
        }
    },
    methods: {
        btnclick: function(value){
            this.priceChinaRMB = value
        }
    }


}
</script>