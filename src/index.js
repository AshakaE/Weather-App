import renderDisplay from './display';

/* eslint-disable no-console */
const envVars = process.env.OPENWEATHER_KEY;

const visibility = document.querySelector('[data-vis]');
const wind = document.querySelector('[data-wind]');
const humidity = document.querySelector('[data-hum]');
const desc = document.querySelector('[data-desc]');
const temp = document.querySelector('[data-temp]');
const city = document.querySelector('[data-city]');
const input = document.querySelector('[data-input]');
const button = document.querySelector('[data-submit]');

button.addEventListener('click', () => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=${envVars}`)
    .then(response => response.json())
    .then(data => {
      input.value = null;
      const tempValue = data.main.temp;
      const cityValue = data.name;
      const descValue = data.weather[0].description;
      const visValue = (data.visibility) / 1000;
      const humValue = data.main.humidity;
      const windValue = (data.wind.speed).toFixed(1);
      const countryValue = data.sys.country;

      renderDisplay(descValue);

      city.innerHTML = `${cityValue}, ${countryValue}`;
      desc.innerHTML = descValue;
      temp.innerHTML = `${+tempValue}&deg;C`;
      wind.innerHTML = `${windValue}m/s`;
      humidity.innerHTML = `${humValue}%`;
      visibility.innerHTML = `${visValue}km`;
    })
    // eslint-disable-next-line no-alert
    .catch(() => alert('Not found!'));
});
