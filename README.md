# Country Holidays App

This Vue.js application allows users to search for countries, view random countries with their next holiday, and explore holidays for specific countries and years.

## Features

- Country search functionality
- Display of 3 random countries with their next holiday
- Detailed view of holidays for a selected country and year
- Year selection for holiday viewing

## Setup

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file in the root directory and add:
   ```
   VUE_APP_API_BASE_URL=https://date.nager.at/api/v3
   ```
4. Run the development server:
   ```
   pnpm run dev
   ```

## Build

To build the app for production:

```
pnpm run build
```

## Technologies Used

- Vue.js 3
- Vue Router
- Pinia
- ESLint and Prettier for code quality

## API

This application uses the Nager.Date API for country and holiday data. For more information, visit [Nager.Date API Documentation](https://date.nager.at/swagger/index.html).