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
        <!-- <div class="goods"><img src="@/assets/images/icon_goods1.png"></div> -->

        <!-- <div class="timeBox">
            <img src="@/assets/images/task_operate1.png">
            1:59:59
        </div> -->
        <div class="treeAction flex">
            <div class="treeAction1"><img src="@/assets/images/task_operate1.png"></div>
            <div class="treeAction2"><img src="@/assets/images/task_operate2.png"></div>
            <div class="treeAction3"><img src="@/assets/images/task_operate3.png"></div>
        </div>
    </div>


    <div class="topBox">
        <div class="headePic flex">
            <img src="@/assets/images/tipTag.png">
            张三 心愿树
        </div>
        <div class="icon_active" @click="actBounceIn=true;aniAction=true;actTag=3"><img src="@/assets/images/icon_active.png"></div>
    </div>
    <div class="topRight">
        <div class="R_item" @click="audioFun">
            <img :class="audioPlay?'rotateImg':''" src="@/assets/images/icon_music_on2.png">
            <!-- <img v-if="!audioPlay" src="@/assets/images/icon_music_off2.png"> -->
        </div>
        <div class="R_item"><img src="@/assets/images/icon2.png"></div>
        <div class="R_item"><img src="@/assets/images/icon3.png"></div>
    </div>

    <div class="bottomBox flex fixed_bottom">
        <div @click="actBounceIn=true;aniAction=true;actTag=2"><img src="@/assets/images/icon_friends.png"></div>
        <!-- <div @click="bounceIn=true;aniAction=true;shopTag='active'"><img src="@/assets/images/icon_task.png"></div> -->
        <div @click="bounceIn=true;aniAction=true;shopTag='shop'"><img src="@/assets/images/icon_store.png"></div>
        <div><img src="@/assets/images/icon_my.png" @click="bigYunFun"></div>
    </div>

    <div class="bottomRight">
        <div class="flex flex_ac">
            <img src="@/assets/images/task_operate1.png">X2
        </div>
        <div class="flex flex_ac">
            <img src="@/assets/images/task_operate2.png">X0
        </div>
        <div class="flex flex_ac">
            <img src="@/assets/images/task_operate3.png">X1
        </div>
    </div>

    <!-- bounceInUpAni -->
    <div class="dialogBox" :style="bounceIn?'display:block':'display:none'">
        <div class="dialogContent" :class="aniAction?'bounceInUpAni':'bounceOutUpAni'">
            <div class="dialog_close"  @click="closeDiaFun"><img src="@/assets/images/close.png"></div>
            <!-- <div class="contInfo bgfff">
                <div class="waitBox">
                    <h2>请稍后再试。</h2>
                    <div><img src="@/assets/images/sure.png"></div>
                </div>
            </div> -->
            <div class="contInfo bgfff" style="border:none;">
                <div class="shopBox">
                    <div class="navs flex">
                        <div :class="shopTag=='active'?'on':''" @click="shopTag='active'">任务</div>
                        <div :class="shopTag=='shop'?'on':''" @click="shopTag='shop'">商店</div>
                    </div>
                    <div class="shopCont" v-if="shopTag=='active'">
                        <div class="items flex flex_ac flexbetween">
                            <div class="itemL">
                                <img class="l_icon" src="@/assets/images/task_sign.png">
                                <h2>每日签到</h2>
                                <p class="flex flex_ac">赠送 
                                    <img class="sub_icon" src="@/assets/images/task_operate1.png">X1
                                    <img class="sub_icon" src="@/assets/images/task_operate2.png">X1
                                    <img class="sub_icon" src="@/assets/images/task_operate3.png">X1
                                </p>
                            </div>
                            <div class="itemR">
                                <span>签到</span>
                                <p>0/1</p>
                            </div>
                        </div>
                        <div class="items flex flex_ac flexbetween">
                            <div class="itemL">
                                <img class="l_icon" src="@/assets/images/task_invite.png">
                                <h2>连续签到</h2>
                                <p class="flex flex_ac">赠送 
                                    <img class="sub_icon" src="@/assets/images/icon_goods1.png">X100
                                </p>
                            </div>
                            <div class="itemR">
                                <span>签到</span>
                                <p>0/3</p>
                            </div>
                        </div>
                        <div class="items flex flex_ac flexbetween">
                            <div class="itemL">
                                <img class="l_icon" src="@/assets/images/task_invite.png">
                                <h2>邀请好友</h2>
                                <p class="flex flex_ac">赠送 
                                    <img class="sub_icon" src="@/assets/images/icon_goods1.png">X100
                                </p>
                            </div>
                            <div class="itemR">
                                <span>邀请</span>
                                <p>0/1</p>
                            </div>
                        </div>
                    </div>
                    <!-- //////////////////////////////////////////////////////////////////////////////////////////////////////// -->
                    <div class="shopCont" v-if="shopTag=='shop'">
                        <div class="items flex flex_ac flexbetween">
                            <div class="itemL">
                                <img class="l_icon" src="@/assets/images/task_operate1.png">
                                <h2>浇水</h2>
                                <p><b>30</b>能量/个</p>
                            </div>
                            <span>购买</span>
                        </div>
                        <div class="items flex flex_ac flexbetween">
                            <div class="itemL">
                                <img class="l_icon" src="@/assets/images/task_operate2.png">
                                <h2>施肥</h2>
                                <p><b>30</b>能量/个</p>
                            </div>
                            <span>购买</span>
                        </div>
                        <div class="items flex flex_ac flexbetween">
                            <div class="itemL">
                                <img class="l_icon" src="@/assets/images/task_operate3.png">
                                <h2>除草</h2>
                                <p><b>30</b>能量/个</p>
                            </div>
                            <span>购买</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="dialogBox" :style="actBounceIn?'display:block':'display:none'">
        <div class="dialogContent" :class="aniAction?'bounceInUpAni':'bounceOutUpAni'">
            <div class="dialog_close"  @click="closeDiaFun"><img src="@/assets/images/close.png"></div>
            <div class="contInfo bgfff" style="border:none;">
                <div class="shopBox">
                    <div class="navs flex">
                        <div :class="actTag==1?'on':''" @click="actTag=1">活动说明</div>
                        <div :class="actTag==2?'on':''" @click="actTag=2">好友排行</div>
                        <div :class="actTag==3?'on':''" @click="actTag=3">动态</div>
                    </div>
                    <div class="shopCont" style="padding-top: 0;" v-if="actTag==1">
                        <div class="actWord flex">
                            <span class="num flexauto">1</span>
                            <div class="word">
                                <h2>活动规则</h2>
                                <div class="rules">我有一个心愿，愿种一课树，收获下一个梦<br>1.努力成为寻梦人，除草浇水。<br>2.成熟后收获心愿树能量可以换取商品哦，还可以用能量参与抽奖呢！<br>奖品仅供参考</div>
                            </div>
                        </div>
                        <div class="actWord flex">
                            <span class="num flexauto">2</span>
                            <div class="word">
                                <h2>活动时间</h2>
                                <div class="rules">2019-07-19 00:00 ~ 2029-07-19 23:59</div>
                            </div>
                        </div>
                        <div class="actWord flex">
                            <span class="num flexauto">3</span>
                            <div class="word">
                                <h2>技术支持</h2>
                                <div class="rules">XXXXXXXXXX</div>
                            </div>
                        </div>
                    </div>
                    <div class="shopCont" style="padding: 0;" v-if="actTag==2">
                        <div class="personInfo flex">
                            <img src="@/assets/images/tipTag.png">
                            <div>
                                <h2>张三</h2>
                                <p>最好成绩<span>0</span></p>
                                <p>好友排名<span>2</span></p>
                            </div>
                        </div>
                        <div style="height: 10px;background: #f2f2f2;"></div>
                        <div class="friends flex flexbetween">
                            <img class="paiImg flexauto" src="@/assets/images/tops_1.png">
                            <div class="friendsInfo flex">
                                <img src="@/assets/images/tipTag.png">
                                <p class="txtelli">32次走位</p>
                            </div>
                            <b>0</b>
                            <span>去看看</span>
                        </div>
                        <div class="friends flex flexbetween">
                            <img class="paiImg flexauto" src="@/assets/images/tops_2.png">
                            <div class="friendsInfo flex">
                                <img src="@/assets/images/tipTag.png">
                                <p class="txtelli">0000</p>
                            </div>
                            <b>0</b>
                            <span>去看看</span>
                        </div>
                        <div class="friends flex flexbetween">
                            <img class="paiImg flexauto" src="@/assets/images/tops_3.png">
                            <div class="friendsInfo flex">
                                <img src="@/assets/images/tipTag.png">
                                <p class="txtelli">2222222222222</p>
                            </div>
                            <b>0</b>
                            <span>去看看</span>
                        </div>
                    </div>

                    <div class="shopCont" style="padding-top: 5px;" v-if="actTag==3">
                        <div class="actItem flex" v-for="item,index in 10">
                            <div class="actImg flex flex_ac flexauto"><img src="@/assets/images/task_sys.png"></div>
                            <div class="actCont flex1">
                                <p>完成了系统连续签到任务</p>
                                <span>07-03 15:00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div style="height: 300px"></div>
    <audio src="./static/audio.mp3" id="audio" refs="audio" autoplay loop ></audio>


    <div class="loading" :style="loading?'':'display:none'"></div>


    <!-- 领养树 -->
    <div class="getTree fixed" v-if="!hasTree">
        <div class="getBtn" @click="getTreeFun"><img src="@/assets/images/btn_start.png"></div>
    </div>

    <div class="bigYunBox" :style="bigYun?'display:block':'display:none'">
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
      loading:true,
      hasTree:sessionStorage.getItem('hasTree')||false,
      bigYun:false,
      actBounceIn:false,
      actTag:1,
    }
  },
  mounted(){
    setTimeout(()=>{
        // var audio=document.getElementById('audio')
        this.loading=false
        // this.$refs.audio.play()
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
        // console.log('num=',num,this.brand)
    },15000)
  },
  methods:{
    bigYunFun(){
        this.bigYun=true
        setTimeout(()=>{
            this.bigYun=false
        },2500)
    },
    getTreeFun(){
        this.bigYunFun()
        setTimeout(()=>{
            this.hasTree=true
            sessionStorage.setItem('hasTree',true)
        },1000)
    },
    closeDiaFun(){
        this.aniAction=!1;
        setTimeout(()=>{
            this.bounceIn=!1;
            this.actBounceIn=!1;
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
