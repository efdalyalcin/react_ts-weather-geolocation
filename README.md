# react_ts-weather-geolocation

## Notes about the task:

- I didn't use `OK` button in the form because `As users enter different numbers into the fields, dynamically generate a bar chart represent the entered values.` was in the instructions. Instead I created a `Cancel` button to remove the form from sight, and a `clear` button to set the values to zero. The inputs dynamically rendered this way.

- Most of the comments on the code are not production comments, I used them to explain my train of thought since this project means to evaluate my skills.

- I have experience with Material UI, however in this kind of small projects it feels easier to use, so I decided to go with it.

- Openweathermap API may create a cors error especially if the API_KEY is newly created. The app is tested and works well, but in any case I left one of the responses as a mock data. If you also get the cors error please try to uncomment the code in WeatherForecast component.

- In order to get the data from Openweathermap API, you should input your API_KEY under /services/getWeatherForecast file.

## Notes about performance:

- In general the functions were not wrapped into useCallback if it is not passed into another component or used as a dependency. The logic behind that is, it is easy to create functions, so memoizing increases memory use but doesn't bring any advantages. Here is a great article about useMemo and useCallback performance that help me learn when to use. [https://medium.com/credera-engineering/when-should-usememo-and-usecallback-be-used-and-when-not-complete-with-examples-df13cd7a6cf4]
