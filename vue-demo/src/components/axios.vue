<template>
<div>
    <h1>{{conente}}</h1>
    <button @click="pipe">获取百度数据</button>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data: function(){
        return{
            conente: null,
            axios: axios
        }
    },
    methods: {
        pipe:  function(){
            this.axios.get("http://localhost:8080/kubernetes/tekton/pipeline?name=t&cluster=shanghai").then(
                body => this.conente=body
            )
        }
        
    }
}
</script>