<template>
    <div class="country-list-wrapper">
        <h2>Countries List</h2>
        <ul class="country-list">
            <li v-for="country in countries" :key="country.countryCode">
                <div>
                    <router-link :to="`/country/${country.countryCode}`">
                        {{ country.name }}
                    </router-link>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
defineProps({
    countries: Array
})

</script>

<style scoped>
.country-list-wrapper {
    height: 80%;
}
.country-list {
    height: 100%;
    overflow-y: scroll;
    padding-left: 0;
}
</style>