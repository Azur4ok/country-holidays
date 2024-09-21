<template>
    <div class="holiday-list">
        <div v-for="holiday in holidays" :key="holiday.date" class="holiday-item">
            <h3>{{ holiday.name }}</h3>
            <p>Date: {{ holiday.date }}</p>
        </div>
    </div>
</template>

<script setup>
import { useCountryStore } from '@/stores/useCountryStore'
import { storeToRefs } from 'pinia'

const countryStore = useCountryStore()
const { holidays } = storeToRefs(countryStore)

</script>

<style scoped>
.holiday-list {
    height: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-template-rows: repeat(auto-fit, minmax(110px, 100px));
    gap: .5rem;
}

.holiday-item {
    width: 100%;
    height: 100%;
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: hsla(160, 100%, 37%, 1);
    border: 1px solid hsla(160, 100%, 37%, 0.5);
    color: #fff;
}
</style>
