# Weather App

A weather app built with **React 19**, **Vite** and **Tailwind CSS 4**, powered by the free [Open-Meteo](https://open-meteo.com/) APIs (no API key required).

## Features

- City search with autocomplete (Open-Meteo geocoding)
- Current weather: temperature, feels-like, wind, chance of rain, UV index
- Forecast for the next 6 hours and the next 7 days
- Save favorite cities (persisted in `localStorage`) and see their current weather at a glance
- Light / dark mode with a toggle in the sidebar; your choice is remembered and defaults to the system theme
- Responsive layout with keyboard-accessible city cards

## Requirements

- Node.js 20+ and npm

## Getting started

```bash
npm install
npm run dev
```

The app runs at `http://localhost:5173`.

## Scripts

| Command           | Description                  |
| ----------------- | ---------------------------- |
| `npm run dev`     | Development server with HMR  |
| `npm run build`   | Production build into `dist/` |
| `npm run preview` | Preview the production build |
| `npm run lint`    | Lint with Oxlint             |

## Project structure

```
src/
├── components/
│   ├── cities/      # CityCard, CityList
│   ├── layout/      # AppLayout, Sidebar (including the theme toggle)
│   ├── ui/          # Card, Loader, ErrorMessage, WeatherIcon
│   └── weather/     # SearchBar, CurrentWeather, TodayForecast, WeeklyForecast, ...
├── constants/       # API URLs, default city, localStorage keys
├── context/         # WeatherContext (selected city)
├── hooks/           # useWeather, useSavedCities, useTheme
├── pages/           # WeatherPage, CitiesPage
├── services/        # weatherApi (Open-Meteo calls)
└── utils/           # transformWeather, formatters, weatherCodes
```

## Tech stack

- [React](https://react.dev/) 19
- [Vite](https://vite.dev/) 8
- [Tailwind CSS](https://tailwindcss.com/) 4
- [Oxlint](https://oxc.rs/docs/guide/usage/linter)
- [Open-Meteo](https://open-meteo.com/) (Forecast and Geocoding APIs)

## Theming (light / dark)

Colors are defined as tokens in `src/index.css` (`app`, `surface`, `heading`). Light mode overrides the `slate` palette inside the `:root[data-theme="light"]` block, so to change the light theme colors you only need to edit that block.

## License

Personal / educational project.
