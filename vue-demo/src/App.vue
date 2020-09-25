<template>
      <div id='app'>

        <todo-list>
            <!--   嵌套在todo-list 内部的标签会被todo list 模版的slot 接收到 -->
            <!-- todoitem 使用的数据是 vm的数据了  -->
            <todo-item v-for="item in list" v-bind:title="item.title" v-bind:del="item.del">
                <!--  是:不是= ， 使用多个插槽时 可以给插槽命名， 在模版中插入不同位置,具名插槽 -->
                <!-- 这里真是翔一样的语法，用于插槽获取组件内 data 的数据 -->
                <template v-slot:pre='{value}'>
                    <span>前置图标 {{value}}</span>
                </template>
                <!-- <template v-slot:suf>
                    <span>后置图标</span>
                </template> -->
            </todo-item>
        </todo-list>
        
      </div>
</template>

<script>
import TodoList from './components/todo-list.vue'
import TodoItem from './components/todo-item.vue'

export default {
  name: 'app',
  components: {
    TodoList,
    TodoItem
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
}
}
</script>