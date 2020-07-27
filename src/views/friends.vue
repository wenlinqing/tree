<template>
<div class="boxer">
    
    <div class="coludBox">
        <div class="colud" style="height: 40px;"><img src="@/assets/images/colud.png" style="width: 50px" class="colud1"></div>
        <div class="colud" style="height: 80px;"><img src="@/assets/images/colud2.png" style="width: 100px" class="colud2"></div>
        <div class="colud" style="height: 60px;"><img src="@/assets/images/colud.png" class="colud3"></div>

        <div class="brand brand1" v-show="brand==1"><img src="@/assets/images/brand1.png"></div>
        <div class="brand brand2" v-show="brand==2"><img src="@/assets/images/brand2.png"></div>
        <div class="brand brand3" v-show="brand==3"><img src="@/assets/images/brand3.png"></div>
    </div>

    <div class="treeBox">
        <!-- <img class="tree tree1" src="@/assets/images/tree1.png"> -->
        <!-- <img class="tree tree2" src="@/assets/images/tree2.png"> -->
        <!-- <img class="tree tree3" src="@/assets/images/tree3.png"> -->
        <img class="tree tree4" src="@/assets/images/tree4.png">
        <div class="goods"><img src="@/assets/images/icon_goods1.png"></div>

        <!-- <div class="timeBox">
            <img src="@/assets/images/task_operate1.png">
            1:59:59
        </div> -->
        <div class="treeAction flex">
            <div class="treeAction1"><img src="@/assets/images/task_get.png"></div>
            <!-- <div class="treeAction2"><img src="@/assets/images/task_operate2.png"></div> -->
            <!-- <div class="treeAction3"><img src="@/assets/images/task_operate3.png"></div> -->
        </div>
    </div>


    <div class="topBox">
        <div class="headePic flex">
            <img src="@/assets/images/tipTag.png">
            张三 心愿树
        </div>
        <!-- <div class="icon_active" @click="actBounceIn=true;aniAction=true;actTag=3"><img src="@/assets/images/icon_active.png"></div> -->
    </div>
    <div class="topRight">
        <div class="R_item" @click="audioFun">
            <img :class="audioPlay?'rotateImg':''" src="@/assets/images/icon_music_on2.png">
            <!-- <img v-if="!audioPlay" src="@/assets/images/icon_music_off2.png"> -->
        </div>
        <!-- <div class="R_item"><img src="@/assets/images/icon2.png"></div> -->
        <!-- <div class="R_item"><img src="@/assets/images/icon3.png"></div> -->
    </div>

    <div class="bottomBox flex fixed_bottom">
        <!-- <div @click="actBounceIn=true;aniAction=true;actTag=2"><img src="@/assets/images/icon_friends.png"></div> -->
        <!-- <div @click="bounceIn=true;aniAction=true;shopTag='active'"><img src="@/assets/images/icon_task.png"></div> -->
        <!-- <div @click="bounceIn=true;aniAction=true;shopTag='shop'"><img src="@/assets/images/icon_store.png"></div> -->
        <div><img src="@/assets/images/icon_my.png" @click="bigYunFun"></div>
    </div>

    <div class="bottomRight">
        <div class="flex flex_ac">
            <img src="@/assets/images/task_get.png">X2
        </div>
        <!-- <div class="flex flex_ac">
            <img src="@/assets/images/task_operate2.png">X0
        </div>
        <div class="flex flex_ac">
            <img src="@/assets/images/task_operate3.png">X1
        </div> -->
    </div>

    <!-- bounceInUpAni -->

    <div style="height: 300px"></div>
    <audio src="./static/audio.mp3" id="audio" refs="audio" autoplay loop ></audio>

    <div class="bigYunBox" :style="bigYun?'display:block':'display:none'">
        <div class="yun1 open"></div>
        <div class="yun2 open"></div>
    </div>
    <div class="bigYunBox" :style="bigYun2?'display:block':'display:none'">
        <div class="yun1"></div>
        <div class="yun2"></div>
    </div>
</div>
</template>

<script>

export default {
  name: 'game',
  data () {
    return {
      bounceIn:false,
      aniAction:false,
      audioPlay:true,
      brand:1,

      shopTag:'shop',
      bigYun:true,
      bigYun2:false,
      actBounceIn:false,
      actTag:1,
    }
  },
  mounted(){
    setTimeout(()=>{
        this.bigYun=false
    },1500)

    setInterval(()=>{
        var num=this.brand
        num+=1;
        
        if (num>=4) {
            this.brand=1
            this.$forceUpdate()
        }else{
            this.brand=num
        }
    },15000)
  },
  methods:{
    bigYunFun(){
        this.bigYun2=true
        setTimeout(()=>{
            this.$router.push('/game')
        },1000)
    },
    audioFun(){
        var audio=document.getElementById('audio')
        if (this.audioPlay) {
            this.audioPlay=false;
            audio.pause()
        }else{
            this.audioPlay=true;
            audio.play()
        }
    },
  }
}
</script>
<style scoped></style>