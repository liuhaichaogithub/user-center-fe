<script setup>
import httpNoTokenService from "./js/axiosService.js";
import { ref } from 'vue';
const imageSrc = ref('');
function postUrl() {
  httpNoTokenService({
    method: "get",//指定请求方式
    url: "/user-center/public/v1/verificationCode/getImageCode",//请求接口（相对接口，后面会介绍到）
    // data: {
    //   cityId: cityId,
    //   data:{},
    //   isDebug:"1",
    //   longitude: "",
    //   latitude: ""
    // }//欢迎加入全栈开发交流圈一起学习交流：864305860
  })//面向1-3年前端人员
      .then(function(res){//帮助突破技术瓶颈，提升思维能力
        //接口成功返回结果执行
        imageSrc.value =res.data.data.imageCodeBse64;
      })
      .catch(function(err){
        alert(err)
      })

}
postUrl();
</script>


<template>
  <div>
    <img :src="imageSrc" alt="图形验证码" @click="postUrl" />
  </div>
</template>

<style scoped>
</style>
