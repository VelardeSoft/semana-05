<template>
  <div class="brewery-card">
    <div class="image-container">
      <img
        v-if="brewery.getDomainFromUrl() && !imageError"
        :src="brewery.getLogoUrl()"
        :alt="brewery.name"
        @error="handleImageError"
      >
      <img
        v-else
        src="../../assets/placeholder-brewery.svg"
        alt="Brewery logo placeholder"
      >
    </div>
    <div class="card-content">
      <h3 class="brewery-name">{{ brewery.name }}</h3>
      <div class="brewery-info">
        <p><strong>{{ $t('breweryType') }}:</strong> {{ brewery.brewery_type }}</p>
        <p><strong>{{ $t('location') }}:</strong> {{ brewery.city }}, {{ brewery.state }}, {{ brewery.country }}</p>
      </div>
      <div class="card-actions">
        <a
          v-if="brewery.website_url"
          :href="brewery.website_url"
          target="_blank"
          class="website-button"
        >
          {{ $t('visitWebsite') }}
        </a>
        <a
          :href="brewery.getLandingPageUrl()"
          target="_blank"
          class="landing-button"
        >
          {{ $t('viewDetails') }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  brewery: {
    type: Object,
    required: true
  }
});

const imageError = ref(false);

const handleImageError = () => {
  imageError.value = true;
};
</script>

<style scoped>
.brewery-card {
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 1rem;
  overflow: hidden;
  transition: transform 0.3s ease;
  width: 100%;
  max-width: 350px;
}

.brewery-card:hover {
  transform: translateY(-5px);
}

.image-container {
  height: 180px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
}

.image-container img {
  width: 100%;
  object-fit: cover;
  max-height: 180px;
}

.card-content {
  padding: 1.5rem;
}

.brewery-name {
  color: #333;
  font-size: 1.5rem;
  margin-top: 0;
  margin-bottom: 1rem;
}

.brewery-info {
  margin-bottom: 1.5rem;
}

.brewery-info p {
  margin: 0.5rem 0;
}

.card-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}

.website-button,
.landing-button {
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.website-button {
  background-color: #2c3e50;
  color: white;
}

.landing-button {
  background-color: #42b983;
  color: white;
}

.website-button:hover,
.landing-button:hover {
  opacity: 0.9;
}
</style>
