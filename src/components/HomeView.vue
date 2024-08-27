<script setup>


import {ref} from "vue";

let userName = ref(localStorage.getItem("userName"))

</script>

<template>
  <p>登录成功</p>
  <p>{{ userName }}</p>
</template>

<style scoped>
</style>
