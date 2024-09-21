<template>
  <main class="home-page">
    <div class="search-section">
      <country-search />
      <country-list :countries="filteredCountries" />
    </div>
    <random-countries-widget />
  </main>
</template>

<script setup>
import CountrySearch from '@/components/AppCountrySearch.vue'
import CountryList from '@/components/AppCountryList.vue'
import RandomCountriesWidget from '@/components/AppRandomCountriesWidget.vue'
import { computed, ref, provide } from 'vue'
import { useCountryStore } from '@/stores/useCountryStore'
import { storeToRefs } from 'pinia'

const searchInput = ref('')

function clearInput() {
  searchInput.value = ''
}

provide('searchInput', {searchInput, clearInput})

const countryStore = useCountryStore()

const { countries } = storeToRefs(countryStore)

const filteredCountries = computed(() => {
  if (searchInput.value === '') {
    return countries.value
  }
  return countries.value.filter((country) => {
    return country.name.toLowerCase().includes(searchInput.value.toLowerCase())
  })
})
</script>

<style scoped>
.home-page {
  display: flex;
  justify-content: center;
  column-gap: 4rem;
  width: 100%;
  height: calc(100vh - 4rem);
}

.search-section {
  max-width: 300px;
  width: 100%;
}
</style>