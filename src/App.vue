<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <RouterView />
        </el-main>
      </el-container>
    </el-container>
  </div>

  <!-- <RouterLink to="/">Go to Index</RouterLink> -->
  <!-- <RouterLink to="/home">Go to Home</RouterLink> -->
</template>

<script setup>

</script>

<style>
.common-layout {
  width: 100vw;
  min-height: 100vh;
}
</style>