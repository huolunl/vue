<template>
    <li>
    <slot name="pre" :value="value"></slot>
            <span v-if='!del'>{{title}}</span>
            <button v-show="!del">删除</button>
            <slot name="suf">😄</slot>
    </li>
</template>

<script>
export default {
            // 组件必须写在vue 对象上面
            // 没有var!!   组件名字， 组件内容
            //  模版要用到的变量
            props: {
                title: String,
                del: {
                    type: Boolean,
                    default: false,
                }

            },
            // 模版也就是todo-item这个组件的内容
            // slot的 ：value 是 传data的数据到 外部的template标签
            // slot 内的😄 是默认值, 当没有template 与之对应时生效
            data: function() {
                return {
                    value: Math.random()
                }
            },
            methods: {

            },
        
}
</script>