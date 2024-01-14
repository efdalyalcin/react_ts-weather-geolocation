# Weather Forecast App using Geolocation

## General usage:

This Weather Forecast app leverages geolocation to provide you with up-to-date weather information. To get started, follow these steps:

1. Clone the Repository:
   `git clone https://github.com/efdalyalcin/react_ts-weather-geolocation.git`

2. Install Dependencies:
   `npm install`

3. Configure OpenWeatherMap API Key:
   Open the services/getWeatherForecast.ts file.
   Replace `API_KEY` with your valid OpenWeatherMap API key.

4. Run the App Locally:
   `npm run dev`

5. Access the App:
   Open your browser and navigate to http://localhost:5173.

## Additional Notes:

#### Task Implementation:

- The form dynamically generates a bar chart representing the entered values without using an "OK" button. Instead, a "Cancel" button removes the form from sight, and a "Clear" button resets values to zero.

#### Comments:

- Code comments are used to explain the thought process rather than for production purposes, aiding in the evaluation of skills.

#### UI Framework Choice:

- While I have experience with Material UI, it wasn't a task requirement. For small projects like this one, I prefer using Tailwind CSS, and that's the reason for my choice.

#### OpenWeatherMap API:

- If you encounter a CORS error, try uncommenting the code in the WeatherForecast component that uses mock data. Ensure your API key is correctly added to getWeatherForecast.ts.

- The mock data is a response taken from the OpenWeatherMap API at Saturday, January 13, 2024 10:32:15 PM

### Performance Consideration:

- Functions are not wrapped in useCallback unless passed to another component or used as a dependency. Memoization may increase memory use without bringing significant advantages. I have been reading about this topic and [here](https://medium.com/credera-engineering/when-should-usememo-and-usecallback-be-used-and-when-not-complete-with-examples-df13cd7a6cf4) is the article I gained insights from.

## For Detailed Component Documentation and Visualizations, Use Storybook:

1. Run Storybook:
   `npm run storybook`

2. Access Storybook:
   Open your browser and navigate to http://localhost:6006.

- In this project only the default states of the components are documented.

## Testing:

To ensure the proper functioning of hooks and functions in this Weather Forecast app, you can run tests:
`npm run test`

This app is built with Vite, React, TypeScript, Tailwind CSS, npm, Storybook, Vitest and React Testing Library.
Feel free to explore!
