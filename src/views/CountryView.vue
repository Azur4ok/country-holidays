<template>
    <div class="country-page">
        <h1>{{ countryName }}</h1>
        <div>
            <router-link class="back-btn" to="/">Go home</router-link>
        </div>
        <HolidayList />
        <YearSelector />
    </div>
</template>

<script setup>
import { computed, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
import { useCountryStore } from '@/stores/useCountryStore'
import HolidayList from '@/components/AppHolidayList.vue'
import YearSelector from '@/components/AppYearsSelector.vue'

const route = useRoute()
const countryStore = useCountryStore()
const countryCode = computed(() => route.params.countryCode)
const countryName = computed(() => countryStore.getCountryName(countryCode.value))

onBeforeMount(async () => {
    await countryStore.fetchHolidays(route.params.countryCode, new Date().getFullYear())
})

</script>

<style scoped>
.country-page {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    height: 100%;
    width: 100%;
}

.back-btn {
    padding: 0.5rem;
    border-radius: 0.5rem;
    background-color: hsla(160, 100%, 37%, 1);
    color: white;
    border: none;
    margin-bottom: 1rem;
    cursor: pointer;
}
</style>