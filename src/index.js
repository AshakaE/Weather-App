import * as disp from './display';
import unitConv from './temp';

const envVars = process.env.OPENWEATHER_KEY;

const visibility = document.querySelector('[data-vis]');
const wind = document.querySelector('[data-wind]');
const humidity = document.querySelector('[data-hum]');
const desc = document.querySelector('[data-desc]');
const temp = document.querySelector('[data-temp]');
const city = document.querySelector('[data-city]');
const input = document.querySelector('[data-input]');
const button = document.querySelector('[data-submit]');
const unitCheck = document.querySelector('[data-check]');
const unit = document.querySelector('[data-unit]');
const converter = document.querySelector('[data-conv]');

button.addEventListener('click', () => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=${envVars}`,
  )
    .then((response) => response.json())
    .then((data) => {
      input.value = null;
      const tempValue = data.main.temp.toPrecision(2);
      const cityValue = data.name;
      const descValue = data.weather[0].description;
      const visValue = data.visibility / 1000;
      const humValue = data.main.humidity;
      const windValue = data.wind.speed.toFixed(1);
      const countryValue = data.sys.country;

      disp.renderDisplay(descValue);
      unitCheck.checked = false;
      converter.classList.remove('hide');
      city.innerHTML = `${cityValue}, ${countryValue}`;
      desc.innerHTML = descValue;
      temp.innerHTML = `${+tempValue}`;
      wind.innerHTML = `${windValue}m/s`;
      humidity.innerHTML = `${humValue}%`;
      visibility.innerHTML = `${visValue}km`;
      unit.innerHTML = '&deg;C';
    })
    .catch(() => disp.renderError());
});

unitConv();
