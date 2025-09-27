<script setup>
import TheHeader from './the-header.component.vue'
import TheFooter from './the-footer.component.vue'
</script>

<template>
  <div class="layout">
    <the-header />
    <div class="main-content">
      <main class="content">
        <router-view></router-view>
      </main>
    </div>
    <the-footer />
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.main-content {
  width: 100%;
  display: flex;
  flex: 1;
}
.content {
  flex: 1;
  padding: 20px;
}
</style>