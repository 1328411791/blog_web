<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <h3 class="login-text">登录</h3>
  <el-form :model="form" label-width="120px">
    <el-form-item label="username">
      <el-input v-model="form.username" />
    </el-form-item>
    <el-form-item label="password">
      <el-input v-model="form.password" />
    </el-form-item>
    <el-button type="primary" @click="onClick()">Primary</el-button>
  </el-form>
</template>

<script>
import axios from "axios"
export default {
  data() {
    return {
      form:{
        username:'',
        password:''
      }
    }
  },
  methods: {
      onClick(){
        console.log(this.form.password+this.form.username)

        axios.post('/users/login', {
          username:this.form.username,
          password:this.form.password
        })
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            })
            .then(function () {
              // 总是会执行
            });
      }

  }
}
</script>

<style scoped>
.login-text{

}

</style>