<template>
    <div class="country-search">
        <input class="search-input" type="text" v-model="searchInput" placeholder="Search input">
        <button class="clear-btn" @click="clearInput">clear</button>
    </div>
</template>

<script setup>
import { inject } from 'vue'

const { searchInput, clearInput } = inject('searchInput')
</script>

<style scoped>
.country-search {
    margin: 1rem 0;
    display: flex;
    column-gap: 0.5rem;
}

.search-input {
    padding: 0.5rem;
    border-radius: 0.3rem;
}

.clear-btn {
    padding: 0.5rem;
    border-radius: 0.5rem;
    background-color: hsla(160, 100%, 37%, 1);
    color: white;
    border: none;
}
</style>