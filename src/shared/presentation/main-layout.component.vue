<script setup>
import TheHeader from './the-header.component.vue';
import TheFooter from './the-footer.component.vue';
</script>

<template>
  <div class="main-layout">
    <the-header />
    <main class="content">
      <router-view />
    </main>
    <the-footer />
  </div>
</template>

<style scoped>
.main-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1;
}
</style>