<template>
      <div id='app'>
        <ss :pname="message">
          <!-- 插槽填充, 填充模版中火轮这个插槽-->
          <template v-slot:huolun> 
                      <span >pppp</span>
          </template>
        </ss>
        <!-- 加上空格就是字符串 -->
        <!-- 自定义事件一般是子组件传过来的 -->
        <emit @add-event="logg"></emit>
        <props></props>
        <classobjbind></classobjbind>
        <classbind></classbind>
        <watch></watch>
        <ifand-for></ifand-for>
        <index></index>
        <!-- v-model 就是一个语法糖 相当于 :value="message" 配合事件就改变message， 本质上还是单项数据流 -->
        <input v-model="message">{{message}}
        <todo-list>
            <!--   嵌套在todo-list 内部的标签会被todo list 模版的slot 接收到 -->
            <!-- todoitem 使用的数据是 vm的数据了  -->
            <todo-item v-for="item in list" :key="item.dd" v-bind:title3="item.title2" v-bind:del="item.del">
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
        <hello-world></hello-world>
        <mygame></mygame>
        <von></von>
        <myfliter></myfliter>
        <computed></computed>
      </div>
</template>
<script>
import Todolist from './components/todo-list.vue'
import TodoItem from './components/todo-item.vue'
import HelloWorld from './components/HelloWorld.vue'
import Index from './components/index.vue'
import IfandFor from './components/IfAndFor'
import mygame from './components/vmodel.vue'
import von from './components/von.vue'
import myfliter from './components/myfilters.vue'
import computed from './components/computed.vue'
import watch from './components/watch.vue'
import classbind from './components/classbind.vue'
import classobjbind from './components/classobjbind.vue'
import props from './components/props.vue'
import emit from './components/emit.vue'
import slot from './components/slot.vue'

export default {

  name: 'app',
  // 局部注册组件
  components: {
    'todo-list':Todolist,
    TodoItem,
    HelloWorld,
    Index,
    IfandFor,
    mygame,
    von,
    myfliter,
    computed,
    watch,
    classbind,
    classobjbind,
    props,
    emit,
    "ss": slot
  },
  data(){ 
    return {
    message: "sss",
    list: [
        {
            title2: "课程1",
            del: false,
        },{
            title2: "课程2",
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
    },
    logg: function(pval){
      console.log(pval.result)
    }

  }
}
</script>