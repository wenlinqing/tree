<template>
  <div class="hello">
    我是子组件
    <slot name="name22222"></slot>
    <slot :data="msg">我是子组件插槽默认内容</slot>
    <slot name="name1"><span>0000</span></slot>
  </div>
</template>

<script>
export default {
  name: 'child',
  data () {
    return {
      msg: 'child child child'
    }
  }
}
</script>
