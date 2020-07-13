// 配置API接口地址
var root = '/member-api/api/'

// var root = '/eshop-h5-web/api'

import { Toast,Loading } from 'vue-ydui/dist/lib.px/dialog'
window.Toast=Toast;
window.Loading=Loading;
window.Indicator=Loading;


// 引用axios
var axios = require('axios')
// 自定义判断元素类型JS
function toType (obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}
// 参数过滤函数
function filterNull (o) {
  for (var key in o) {
    if (o[key] === null) {
      delete o[key]
    }
    if (toType(o[key]) === 'string') {
      o[key] = o[key].trim()
    } else if (toType(o[key]) === 'object') {
      o[key] = filterNull(o[key])
    } else if (toType(o[key]) === 'array') {
      o[key] = filterNull(o[key])
    }
  }
  return o
}

import router from "@/router";


function apiAxios (method, url, params, success, failure) {
  if (params) {
    params = filterNull(params)
  }
  
  axios({
    headers: {
        'Content-type': 'application/json;charse=UTF-8',
        'Endpoint':'h5',
    },
    method: method,
    url: url,
    data: method === 'POST' || method === 'PUT' ? params : null,
    params: method === 'GET' || method === 'DELETE' ? params : null,
    baseURL: root,
    withCredentials: false
  })
  .then(function (res) {
    if (res.data.code==='100101'||res.data.code==='100109') {
      // console.log(router)
      // console.log(router.app._route.fullPath)

      router.push({
        path: "/login",
        query:{redirect:router.app._route.fullPath}
      });
      return false;
    }

    if (res.data.code === '200') {
      if (success) {
        success(res.data)
      }
    } else {
      if (failure) {
        failure(res.data)
      } else {
        //window.alert('error: ' + JSON.stringify(res.data))
      }
    }
  })
  .catch(function (err) {
    let res = err.response
    if (err) {
      // console.error('api error, HTTP CODE: ' + res.status)
      Loading.close();
      Indicator.close();
      if (res.status==404) {
        Toast({
            mes:'请求接口地址错误',
            timeout: 2000
        });
        return
      }
      if (res.status==503) {
        Toast({
            mes:'网络繁忙，稍后重试',
            timeout: 2000
        });
        return
      }
      Toast({
          mes:'网络错误，稍后重试',
          timeout: 2000
      });
      return
    }

  })
}

// 返回在vue模板中的调用接口
export default {
  get: function (url, params, success, failure) {
    return apiAxios('GET', url, params, success, failure)
  },
  post: function (url, params, success, failure) {
    return apiAxios('POST', url, params, success, failure)
  },
  put: function (url, params, success, failure) {
    return apiAxios('PUT', url, params, success, failure)
  },
  delete: function (url, params, success, failure) {
    return apiAxios('DELETE', url, params, success, failure)
  },
}