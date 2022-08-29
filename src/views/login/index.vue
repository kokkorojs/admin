<template>
  <div class="content">
    <el-form ref="formRef" :model="loginForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="uin" prop="uin" :rules="[
        { required: true, message: 'uin is required' },
        { type: 'number', message: 'uin must be a number' },
      ]">
        <el-input v-model.number="loginForm.uin" type="text" autocomplete="off" />
      </el-form-item>

      <el-form-item label="password" prop="password" :rules="[
        { required: true, message: 'password is required' },
      ]">
        <el-input v-model="loginForm.password" type="password" autocomplete="off" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" :loading="state.loading" @click="submitForm(formRef)">Submit</el-button>
        <el-button @click="resetForm(formRef)">Reset</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

const state = reactive({
  loading: false,
});
const formRef = ref();
const loginForm = reactive({
  uin: '',
  password: '',
});

const submitForm = (formEl) => {
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!');
      login();
    } else {
      console.log('error submit!');
    }
  })
}

const resetForm = (formEl) => {
  formEl.resetFields();
}

const login = async () => {
  state.loading = true;

  const result = await axios.post('/system/login', {
    ...state.loginForm,
  });
  const { code, message } = result.data;

  if (code) {
    ElMessage.error(message);
  } else {
    ElMessage({
      message, type: 'success'
    });
  }
  state.loading = false;
}
</script>

<style scoped>
.content {}
</style>