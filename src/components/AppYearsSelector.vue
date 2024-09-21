<template>
    <div class="year-selector">
        <button v-for="year in years" :key="year" @click="selectYear(year)" :class="{ active: year === selectedYear }">
            {{ year }}
        </button>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useCountryStore } from '@/stores/useCountryStore'
import { useRoute } from 'vue-router'

const countryStore = useCountryStore()
const route = useRoute()
const selectedYear = ref(new Date().getFullYear())

const years = computed(() => Array.from({ length: 11 }, (_, i) => 2020 + i))

const selectYear = async (year) => {
    selectedYear.value = year
    await countryStore.fetchHolidays(route.params.countryCode, year)
}

</script>

<style scoped>
.year-selector {
    display: flex;
    justify-content: space-between;
    column-gap: 0.5rem;
}

button {
    padding: 0.5rem;
    width: 100%;
    font-size: 22px;
    border-radius: 0.5rem;
    background-color: hsla(160, 100%, 37%, 1);
    transition: all .2s ease-in-out;
    color: white;
    border: none;
    cursor: pointer;
}

button:hover {
    background-color: hsla(160, 100%, 36%, 0.5);
    scale: 1.01;
}

button.active {
    background-color: hsla(160, 100%, 37%, 0.5);
}
</style>