<template>
  <div class="home-view">
    <h2 class="page-title">{{ $t('craftBreweries') }}</h2>

    <div v-if="loading" class="loading-container">
      <p>{{ $t('loading') }}</p>
    </div>

    <div v-else-if="breweries.length === 0" class="no-results">
      <p>{{ $t('noBreweriesFound') }}</p>
    </div>

    <div v-else class="breweries-grid">
      <brewery-card
          v-for="brewery in breweries"
          :key="brewery.id"
          :brewery="brewery"
      />
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue';
import BreweryCard from '../presentation/brewery-card.component.vue';
import {BreweryService} from '../application/brewery.service';

const breweryService = new BreweryService();
const breweries = ref([]);
const loading = ref(true);
const searchQuery = ref('');
const searchTimeout = ref(null);

const fetchBreweries = async () => {
  loading.value = true;
  try {
    breweries.value = await breweryService.getBreweries();
  } catch (error) {
    console.error('Error fetching breweries:', error);
  } finally {
    loading.value = false;
  }
};

const searchBreweries = async () => {
  if (!searchQuery.value.trim()) {
    fetchBreweries();
    return;
  }

  loading.value = true;
  try {
    breweries.value = await breweryService.searchBreweries(searchQuery.value);
  } catch (error) {
    console.error('Error searching breweries:', error);
  } finally {
    loading.value = false;
  }
};

const debounceSearch = () => {
  clearTimeout(searchTimeout.value);
  searchTimeout.value = setTimeout(() => {
    searchBreweries();
  }, 500);
};

onMounted(() => {
  fetchBreweries();
});
</script>

<style scoped>
.home-view {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.page-title {
  font-size: 2rem;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 2rem;
}

.search-input {
  width: 100%;
  max-width: 500px;
  padding: 0.75rem 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.breweries-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.loading-container, .no-results {
  text-align: center;
  padding: 2rem;
  font-size: 1.2rem;
  color: #666;
}
</style>
