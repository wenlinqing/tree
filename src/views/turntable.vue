<template>
<section>
  <div class="cover" v-show="!cover1"></div>
  <div class="covers1" v-show="!cover1">
    <div class="covers_quit">
      <img src="@/assets/images/turntable/pop_up_quit_icon.png" alt="pop_up_quit_icon" @click="cover1=true" />
    </div>
    <div class="covers_icon">
      <img src="@/assets/images/turntable/task_draw_reward_free_img.png" alt="task_draw_reward_free_img" />
    </div>
    <div class="covers_font">恭喜您获得1次<span>免费</span>的机会</div>
    <div class="covers_btn">立即前往抽奖</div>
  </div>

  <div class="cover"  v-if="showResult"></div>
  <div class="covers2" style="display:block;height: 70vw" v-if="showResult">
    <div class="covers_quit" @click="showResult=false" >
      <img src="@/assets/images/turntable/pop_up_quit_icon.png" alt="pop_up_quit_icon" />
    </div>
    <div class="covers_icon">
      <img src="@/assets/images/turntable/task_draw_reward_gereward_img.png" alt="task_draw_reward_gereward_img" />
    </div>
    <div class="covers_font">恭喜您获得 <span>{{showTxt}}</span></div>
    <!-- <div class="covers_btn covers_btn1">支付200金币再抽一次</div> -->
    <a href="#rules_con_footer"><div class="covers_btn2">完成任务,免费抽奖</div></a>
  </div>

  <div class="covers3">
    <div class="covers_quit">
      <img src="@/assets/images/turntable/pop_up_quit_icon.png" alt="pop_up_quit_icon" />
    </div>
    <div class="covers_icon">
      <img src="@/assets/images/turntable/task_draw_reward_tip_img.png" alt="task_draw_reward_tip_img" />
    </div>
    <div class="covers_font">今天的免费机会已经用完</div>
    <div class="covers_btn covers_btn1">支付200金币再抽一次</div>
    <a href="#rules_con_footer"><div class="covers_btn2">完成任务,免费抽奖</div></a>
  </div>
  <!-- 收益 -->
  <a ><div class="float_btn">游戏记录</div></a>
  <!-- 抽奖转盘 -->
  <div class="turntable">
    <img class="turntablebg" src="@/assets/images/turntable/task_draw_reward_default_bg.png" alt="turntableBg"/>
    <div class="rotate"><img id="rotate" src="@/assets/images/turntable/task_draw_reward_bg.png"/></div>
    <div class="pointer" @click="clickFun"><img src="@/assets/images/turntable/task_draw_reward_pointer.png"/></div>
    <div class="turntable_font">
      <div class="turn_font_left">
        <img src="@/assets/images/turntable/task_draw_reward_coin_icon.png" alt="task_draw_reward_coin_icon"/>
        <span>剩余金豆:</span>
        <font>123456</font>
      </div>
      <div class="turn_font_right">
        <img src="@/assets/images/turntable/task_draw_reward_clock_icon.png" alt="task_draw_reward_clock_icon"/>
        <span>剩余次数:</span>
        <font>1</font>
        <span>次</span>
      </div>
    </div>
  </div>

  <!-- task&rules -->
  <div class="taskRules">
    <div class="task">
      <div class="task_title">
        <img src="@/assets/images/turntable/task_draw_reward_title_img.png" alt="task_draw_reward_title_img" />
      </div>
      <div class="task_read">
        <div class="task_r_name">任务一</div>
        <div class="task_con">
          <div class="task_con_icon">
            <div class="task_icon1">
              <div class="task_icon_already">
                <img src="@/assets/images/turntable/task_draw_reward_status_bg2.png" alt="task_draw_reward_status_bg" />
              </div>
              <img src="@/assets/images/turntable/task_draw_reward_green_img.png" alt="task_draw_reward_green_img" />
            </div>
            <div class="task_line"></div>
            <div class="task_icon2">
              <div class="task_icon_already">
                <img src="@/assets/images/turntable/task_draw_reward_status_bg2.png" alt="task_draw_reward_status_bg" />
              </div>
              <img src="@/assets/images/turntable/task_draw_reward_red_img.gif" alt="task_draw_reward_red_img" />
            </div>
          </div>
          <div class="task_fonts">
            <div class="task_fonts_left">阅读新闻20分钟</div>
            <div class="task_fonts_right">阅读新闻40分钟</div>
          </div>
        </div>
      </div>
      <div class="task_video">
        <div class="task_r_name">任务二</div>
        <div class="task_con">
          <div class="task_con_icon">
            <div class="task_icon1">
              <div class="task_icon_already">
                <img src="@/assets/images/turntable/task_draw_reward_status_bg2.png" alt="task_draw_reward_status_bg" />
              </div>
              <img src="@/assets/images/turntable/task_draw_reward_blue_img.gif" alt="task_draw_reward_blue_img" />
            </div>
            <div class="task_line"></div>
            <div class="task_icon2">
              <div class="task_icon_already">
                <img src="@/assets/images/turntable/task_draw_reward_status_bg2.png" alt="task_draw_reward_status_bg" />
              </div>
              <img src="@/assets/images/turntable/task_draw_reward_gray_img.png" alt="task_draw_reward_gray_img" />
            </div>
          </div>
          <div class="task_fonts">
            <div class="task_fonts_left">观看视频30分钟</div>
            <div class="task_fonts_right">观看视频60分钟</div>
          </div>
        </div>
      </div>
      <div class="task_video">
        <div class="task_r_name">任务三</div>
        <div class="task_con">
          <div class="task_con_icon">
            <div class="task_icon1">
              <div class="task_icon_already">
                <img src="@/assets/images/turntable/task_draw_reward_status_bg2.png" alt="task_draw_reward_status_bg" />
              </div>
              <img src="@/assets/images/turntable/task_draw_reward_blue_img.gif" alt="task_draw_reward_blue_img" />
            </div>
            <div class="task_line"></div>
            <div class="task_icon2">
              <div class="task_icon_already">
                <img src="@/assets/images/turntable/task_draw_reward_status_bg2.png" alt="task_draw_reward_status_bg" />
              </div>
              <img src="@/assets/images/turntable/task_draw_reward_gray_img.png" alt="task_draw_reward_gray_img" />
            </div>
          </div>
          <div class="task_fonts">
            <div class="task_fonts_left">观看视频30分钟</div>
            <div class="task_fonts_right">观看视频60分钟</div>
          </div>
        </div>
      </div>
      <!-- <div class="task_font_footer">
        每天阅读或者视频满指定时间，即可获得免费抽奖机会。抽奖机会需在当天完成，不能累加到第二天。
      </div> -->
    </div>

    <div class="rules">
      <div class="task_title">
        <img src="@/assets/images/turntable/task_draw_reward_rule_title_img.png" alt="task_draw_reward_rule_title_img" />
      </div>
      <div class="rules_cover" v-show="!showRule">
        <img src="@/assets/images/turntable/task_draw_reward_rule_white_img.png" alt="task_draw_reward_rule_white_img" />
      </div>
      <div class="rules_con" :style="showRule?'height:95vw':''">
        <ul>
          <li>1、每人每天开局有<span>1</span>次免费抽奖机会；</li>
          <li>2、阅读新闻每20分钟获得<span>1</span>次免费抽奖机会，每天最多<span>2</span>次；</li>
          <li>3、观看视频每30分钟获得<span>1</span>次免费抽奖机会，每天最多<span>2</span>次；</li>
          <li>4、合计每人每天最多<span>5次免费抽奖机会；</span></li>
          <li>5、用户可以花金币购买抽奖机会，<span>200金币一次，次数无限；</span></li>
          <li>6、转盘分10份，分别设置为：10金币、20金币、50金币、100金币、150金币、200金币、250金币、300金币、500金币、900金币；</li>
          <li>7、抽奖结果以当次抽奖结束后显示窗口的内容为准；</li><br/>
          <li class="rules_li">温馨提醒：如果页面未及时显示您的免费机会，请尝试退出活动页面再重新进来哦。</li>
        </ul>
        <div id="rules_con_footer" class="rules_con_footer">本活动解释权归XXX所有</div>
      </div>
      <div class="rules_footer" @click="showRule=true" v-show="!showRule">点击查看规则</div>
    </div>
  </div>

  <div class="bigYunBox" :style="bigYun?'display:block':'display:none'">
      <div class="yun1 open"></div>
      <div class="yun2 open"></div>
  </div>

  <div class="goBack" @click="$router.go(-1)" style="right: 50%;margin-right: -25px;"><img src="@/assets/images/back.png"></div>
</section>
</template>

<script>
import $ from "jquery"
export default {
  name: 'turntable',
  data () {
    return {
      showRule:false,
      cover1:true,
      bigYun:true,
      isRotate:false,
      showResult:false,
      showTxt:'',
    }
  },
  mounted(){
    setTimeout(()=>{
        this.bigYun=false
    },1500)

  },
  methods:{
    clickFun(){
      // this.isRotate=true;
      var item = Math.floor(Math.random()*10);
      switch (item) {
        case 0:
            this.rotateFun(360, '20金豆');
            break;
        case 1:
            this.rotateFun(36, '10金豆');
            break;
        case 2:
            this.rotateFun(72, '900金豆');
            break;
        case 3:
            this.rotateFun(108, '500金豆');
            break;
        case 4:
            this.rotateFun(144, '300金豆');
            break;
        case 5:
            this.rotateFun(180, '250金豆');
            break;
        case 6:
            this.rotateFun(216, '200金豆');
            break;
        case 7:
            this.rotateFun(252, '150金豆');
            break;
        case 8:
            this.rotateFun(288, '100金豆');
            break;
        case 9:
            this.rotateFun(324, '50金豆');
            break;   
      }
      // this.rotateFun(36, '10金豆')
    },
    rotateFun(angles, txt){
      var that=this
      // if (this.isRotate) {
        console.log(angles, txt)//rotate
        $(".rotate").animate({},function(){
          $('.rotate').css({ "transform":"rotate("+(angles+2825)+"deg)","transition":"transform 5s ease" })
          setTimeout(()=>{
            $('.rotate').attr("style","transform:rotate("+(angles+305)+"deg)")
            that.showResult=true;
            that.showTxt=txt
            // Toast({
            //     mes:'恭喜您获得 '+txt,
            //     timeout: 2000
            // });
          },5000)
        });
      // }
    }
  }
}
</script>
