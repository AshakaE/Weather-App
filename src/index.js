/* eslint-disable no-console */
const envVars = process.env.OPENWEATHER_KEY;

fetch(`https://api.openweathermap.org/data/2.5/weather?q=lagos&units=metric&appid=${envVars}`)
  .then(response => response.json())
  .then(data => {
    const tempValue = data.main.temp;
    const cityValue = data.name;
    const descValue = data.weather[0].description;
    const visValue = (data.visibility) / 1000;
    const humValue = data.main.humidity;
    const windValue = (data.wind.speed).toFixed(1);
    const all = {
      tempValue, cityValue, descValue, visValue, humValue, windValue,
    };
    // eslint-disable-next-line no-console
    console.log(data);
    console.log(all);
  });