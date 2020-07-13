<template>
  <div class="hello">
    <h1>我是父组件</h1>
    <child>
      <!-- <h2>我是父组件插槽内容</h2> -->
      <!-- <template #name1></template> -->
      <p slot="name1">我的slot名字是name1</p>
      <p slot="name22222">我的slot名字是name22222</p>
      <h3 slot-scope="msg">{{msg.data}}</h3>
    </child>
  </div>
</template>

<script>
import child from './child.vue'
function alertFun(text,callback){
  console.log('text===',text)
  callback&&callback(text)
}
// alertFun('aaa',(e)=>{
//   console.log(e)
// })

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    child
  },
  created(){
    alertFun('aaa',(e)=>{
      console.log('bbbbbbbb',e)
    })
  },
  methods:{

  }
}
</script>
