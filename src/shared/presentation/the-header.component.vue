<template>
  <header class="header">
    <div class="logo-container">
      <img src="https://logo.clearbit.com/cbia.org" alt="CBIA Logo" class="logo">
      <h1 class="org-name">Craft Beer International Association</h1>
    </div>
    <div class="language-selector">
      <button
          @click="changeLanguage('en')"
          :class="{ active: currentLocale === 'en' }"
      >EN
      </button>
      <span>|</span>
      <button
          @click="changeLanguage('es')"
          :class="{ active: currentLocale === 'es' }"
      >ES
      </button>
    </div>
  </header>
</template>

<script setup>
import {ref, onMounted} from 'vue';
import {useI18n} from 'vue-i18n';

const {locale} = useI18n();
const currentLocale = ref(locale.value);

const changeLanguage = (lang) => {
  locale.value = lang;
  currentLocale.value = lang;
};

onMounted(() => {
  currentLocale.value = locale.value;
});
</script>

<style scoped>
.header {
  background-color: #2c3e50;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo {
  height: 40px;
  margin-right: 1rem;
}

.org-name {
  font-size: 1.5rem;
  margin: 0;
}

.language-selector {
  display: flex;
  align-items: center;
}

.language-selector button {
  background: none;
  border: none;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  margin: 0 0.5rem;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
}

.language-selector button.active {
  background-color: #42b983;
}

.language-selector span {
  color: rgba(255, 255, 255, 0.5);
}
</style>