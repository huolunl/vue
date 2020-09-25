<template>
            <ul>
                <slot></slot>
            </ul>
</template>


<script>
export default {
            // slot 插槽接收 todolit 内嵌的标签
            // data 是 模版中要用到的数据， props 是模版中的入参数
            data: function(){
                return {
                }
            },
}
</script>