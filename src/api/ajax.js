/*
 封装axios的ajax模块
 返回值式promise对象
 */

import axios from 'axios';
//import {stringify} from 'qs';

export default function ajax(url, data, type = 'GET') {
  let querystring = '';

  if(data) {
    //将传入的对象所有可枚举的属性保存在一个数组中返回
    //for in能遍历出来的属性就是可枚举属性
    Object.keys(data).forEach(key => {
      //获取属性值
      const value = data[key];
     querystring += key + '=' + value + '&'
    });
    //去掉多余的&
    querystring = querystring.substring(0, querystring.length - 1); //不能用 -1
  }

  if(type.toUpperCase() === 'GET') {
    //说明用户发送的式GET请求
    //如果用户通过data传参 我要将data中的数据以查询字符串的方式拼接在url后面
    url += '?' + querystring;
    return axios.get(url,)
  }else {
    //用户发送的式POST请求
    //console.log(stringify(data));
    return axios.post(url, querystring, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
  }
}
