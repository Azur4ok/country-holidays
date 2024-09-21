<template>
    <div class="random-countries-box">
        <h2 class="title">Random Countries</h2>
        <div class="random-countries-list">
            <div v-for="country in randomCountries" :key="country.countryCode" class="country-card">
                <router-link :to="`/country/${country.countryCode}`">
                    <h3>{{ country.name }}</h3> 
                </router-link>
                <p>Next Holiday: {{ country.nextHoliday.name }}</p>
                <p>Date: {{ country.nextHoliday.date }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useCountryStore } from '@/stores/useCountryStore'
import { storeToRefs } from 'pinia'

const { randomCountries } = storeToRefs(useCountryStore())

</script>

<style scoped>
.random-countries-box {
  height: calc(100% - 1rem);
  max-width: 400px;
  width: 100%;
}

.title {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 3vw, 2rem);
}

.random-countries-list {
    height: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
}

.country-card {
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: hsla(160, 100%, 37%, 1);
    border: 1px solid hsla(160, 100%, 37%, 0.5);
    color: #fff;

    & a {
        color: #fff;
        height: fit-content;
        display: block;
    }
}
</style>