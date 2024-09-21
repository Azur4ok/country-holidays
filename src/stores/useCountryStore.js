import { defineStore } from 'pinia'
import { ref, onBeforeMount } from 'vue'

export const useCountryStore = defineStore('countryStore', () => {
  const countries = ref([])
  const randomCountries = ref([])
  const holidays = ref([])

  const getCountryName = (countryCode) => {
    return countries.value.find((c) => c.countryCode === countryCode)?.name || ''
  }

  async function fetchCountries() {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/AvailableCountries`)
      if (!response.ok) {
        throw new Error('Failed to fetch countries')
      }
      const result = await response.json()
      
      countries.value = result
    } catch (error) {
      console.error('Error fetching countries:', error)
    }
  }

  async function fetchRandomCountries() {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/AvailableCountries`)
      if (!response.ok) {
        throw new Error('Failed to fetch random countries')
      }
      const result = await response.json()

      const allCountries = result
      const randomedCountries = []

      for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * allCountries.length)
        const country = allCountries.splice(randomIndex, 1)[0]

        const holidaysResponse = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/NextPublicHolidays/${country.countryCode}`
        )

        if (!holidaysResponse.ok) {
          throw new Error('Failed to fetch holidays')
        }
        const holidaysResult = await holidaysResponse.json()
        const nextHoliday = holidaysResult[0]

        randomedCountries.push({
          ...country,
          nextHoliday: {
            name: nextHoliday.name,
            date: nextHoliday.date
          }
        })
      }
      
      randomCountries.value = randomedCountries
    } catch (error) {
      console.log('Error fetching random countries:', error)
    }
  }

  async function fetchHolidays(countryCode, year) {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/PublicHolidays/${year}/${countryCode}`
      )

      if (!response.ok) {
        throw new Error('Failed to fetch random countries')
      }
      const result = await response.json()

      holidays.value = result
    } catch (error) {
      console.error('Error fetching holidays:', error)
    }
  }

  onBeforeMount(async () => {
    await fetchCountries()
    await fetchRandomCountries()
  })

  return {
    countries,
    randomCountries,
    holidays,
    getCountryName,
    fetchHolidays
  }
})
