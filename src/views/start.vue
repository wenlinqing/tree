<template>
<div class="boxer">
    <div class="loading" :style="loading?'':'display:none'"></div>

    <!-- 领养树 -->
    <div class="getTree fixed">
        <!-- <div class="getBtn" @click="getTreeFun(1)" style="top: 72%"><img src="@/assets/images/btn_start.png"></div> -->
        <div class="getBtn" @click="getTreeFun(2)"><img src="@/assets/images/btn_start.png"></div>
    </div>

    <div class="bigYunBox" :style="bigYun?'display:block':'display:none'">
        <div class="yun1"></div>
        <div class="yun2"></div>
    </div>
    <div class="goBack rotateImg" style="bottom: auto;top:20px;right: 20px;z-index: 999;" @click="getTreeFun(1)"><img src="@/assets/images/turntable/task_draw_reward_bg.png"></div>
</div>
</template>

<script>

export default {
  name: 'game',
  data () {
    return {
      loading:true,
      bigYun:false,
    }
  },
  mounted(){
    setTimeout(()=>{
        this.loading=false
    },1500)

  },
  methods:{
    getTreeFun(type){
        this.bigYun=true
        setTimeout(()=>{
            if (type==1) {
                this.$router.push('/turntable')
            }else{
                this.$router.push('/game')
            }
            
        },1000)
    },
  }
}
</script>
<style scoped></style>