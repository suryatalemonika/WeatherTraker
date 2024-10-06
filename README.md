# WeatherTraker
Weather application that fetches weather information And display them on UI.
WeatherTraker/
│
├── backend/                  # Node.js + GraphQL API
│   ├── config/               # Configuration files (e.g., API keys, DB config)
│   │   └── db.js             # MongoDB/PostgreSQL connection
│   │   └── config.js         # OpenWeatherMap API key config
│   │
│   ├── graphql/              # GraphQL-related files
│   │   ├── schema.js         # Define your GraphQL schema (types, queries, mutations)
│   │   ├── resolvers.js      # Define resolver functions for fetching and mutating data
│   │
│   ├── models/               # Database models
│   │   └── Weather.js        # Weather schema/model (location, temp, date, etc.)
│   │
│   ├── services/             # Business logic
│   │   └── WeatherService.js # Fetch/store weather data, error handling
│   │
│   ├── server.js             # Main entry point for backend, starting Node.js + Express + GraphQL server
│
├── frontend/                 # Vue.js frontend (UI components)
│   ├── src/                  # Vue.js source folder
│   │   ├── components/       # Vue components (for weather display,)
