// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import YDUI from 'vue-ydui';
import 'vue-ydui/dist/ydui.px.css';
Vue.use(YDUI);
import { Confirm, Toast, Loading } from 'vue-ydui/dist/lib.px/dialog'
window.Confirm=Confirm;
window.Toast=Toast;
window.Loading=Loading;

Vue.prototype.showTxt=function(){
	Toast({
	    mes:'敬请期待',
	    timeout: 1500
	});
}
Vue.prototype.goBack = function () {
    window.history.go(-1)
}

import './assets/css/mobile.css'

import api from '@/api/index'
Vue.prototype.$api=api

import moment from 'moment'
window.moment=moment;

Vue.filter('formatDate',function(time){
  return moment(time).format('YYYY-MM-DD HH:mm:ss')
})
Vue.filter('formatDay',function(time){
  return moment(time).format('YYYY-MM-DD')
})

Vue.prototype.AppGoBack = function () {
    var u = navigator.userAgent, app = navigator.appVersion;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
    var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    // alert('aaaaaa')
    if (isAndroid) {
       //这个是安卓操作系统
        window.android.appGoBack('111');
    }else if (isIOS) {
　　　　//这个是ios操作系统
        try{
            window.webkit.messageHandlers.appGoBack.postMessage("aaa")
        }catch(error){
            console.error('The native context not exist ')
        }
    }else {
        alert("你使用移动设备扫一扫");
    }
}






Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
