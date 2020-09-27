<template>
      <div id='app'>
        <ifand-for></ifand-for>
        <index></index>
        <!-- v-model 就是一个语法糖 相当于 :value="message" 配合事件就改变message， 本质上还是单项数据流 -->
        <input v-model="message">{{message}}
        <todolist>
            <!--   嵌套在todo-list 内部的标签会被todo list 模版的slot 接收到 -->
            <!-- todoitem 使用的数据是 vm的数据了  -->
            <todo-item v-for="item in list" :key="item.dd" v-bind:title="item.title" v-bind:del="item.del">
                <!--  是:不是= ， 使用多个插槽时 可以给插槽命名， 在模版中插入不同位置,具名插槽 -->
                <!-- 这里真是翔一样的语法，用于插槽获取组件内 data 的数据 -->
                <template v-slot:pre='{value}'>
                    <span>前置图标 {{value}}</span>
                </template>
                <!-- <template v-slot:suf>
                    <span>后置图标</span>
                </template> -->
            </todo-item>
        </todolist>
        <hello-world></hello-world>
      </div>
</template>
<script>
import Todolist from './components/todo-list.vue'
import TodoItem from './components/todo-item.vue'
import HelloWorld from './components/HelloWorld.vue'
import Index from './components/index.vue'
import IfandFor from './components/IfAndFor'
// HelloWorld 对应的标签名字就是<hello-world>

export default {

  name: 'app',
  components: {
    Todolist,
    TodoItem,
    HelloWorld,
    Index,
    IfandFor
  },
  data(){ 
    return {
    message: "sss",
    list: [
        {
            title: "课程1",
            del: false,
        },{
            title: "课程2",
            del: false,
        }
        ]
  }
},
// v-model 就是通过model.prop 找到绑定的属性, model。event找到触发的事件
  model: {
    prop: 'value',
    event: 'change'
  },
  methods:{
    change(){
      this.checked="dddd"
    }

  }
}
</script>