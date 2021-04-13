/* eslint-disable no-console */
const envVars = process.env.OPENWEATHER_KEY;

fetch(`https://api.openweathermap.org/data/2.5/weather?q=lagos&units=metric&appid=${envVars}`)
  .then(response => response.json())
  .then(data => {
    // eslint-disable-next-line no-console
    console.log(data);
  });