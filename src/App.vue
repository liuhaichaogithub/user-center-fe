<script setup>
import httpNoTokenService from "./js/axiosService.js";
import {reactive, ref} from 'vue';
import {v4 as uuidv4} from "uuid";
import {ElNotification} from 'element-plus'

const imageSrc = ref('');
let imageCodeTraceId = ref('');

function loginPost() {
  httpNoTokenService({
    method: "post",//指定请求方式
    url: "/user-center/user/login",//请求接口（相对接口，后面会介绍到）
    data: {
      username: formData.username,
      password: formData.password,
      imageCode: formData.imageCode,
      imageCodeTraceId: imageCodeTraceId
    }
  })//面向1-3年前端人员
      .then(function (res) {//帮助突破技术瓶颈，提升思维能力
        if (res.data.code !== 200) {
          postUrl();
        } else {
          ElNotification({
            title: 'Success',
            message: '登录成功',
            type: 'success',
          })
        }
      }).catch(function (err) {
    postUrl();
  })
}

function postUrl() {
  imageCodeTraceId = uuidv4();
  httpNoTokenService({
    method: "get",//指定请求方式
    url: "/user-center/user/getImageCode/" + imageCodeTraceId,//请求接口（相对接口，后面会介绍到）
    // data: {
    //   cityId: cityId,
    //   data:{},
    //   isDebug:"1",
    //   longitude: "",
    //   latitude: ""
    // }//欢迎加入全栈开发交流圈一起学习交流：864305860
  })//面向1-3年前端人员
      .then(function (res) {//帮助突破技术瓶颈，提升思维能力
        //接口成功返回结果执行
        imageSrc.value = res.data.data;
      })
  // .catch(function (err) {
  //   alert(err)
  // })

}

const formData = reactive({
  username: "",
  password: "",
  imageCode: "",
})

postUrl();
</script>


<template>
  <div class="login-title">
    <span style="align-content: center">欢迎登录</span>
  </div>
  <div id="loginFrom">
    <el-form :model="formData" ref="vForm" :rules="rules" label-position="left" label-width="80px"
             size="default" @submit.prevent>
      <el-form-item label="用户名" prop="username" class="required">
        <el-input v-model="formData.username" type="text"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password" class="required">
        <el-input v-model="formData.password" type="password" show-password></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="imageCode" class="required">
        <el-input v-model="formData.imageCode" type="text"></el-input>
      </el-form-item>
      <div class="static-content-item">
        <el-button type="primary" @click="loginPost">登录</el-button>
      </div>
    </el-form>
  </div>
  <div>
    <img :src="imageSrc" alt="图形验证码" @click="postUrl"/>
  </div>
</template>

<style scoped>
</style>
