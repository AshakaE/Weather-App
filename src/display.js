const display = document.querySelector('[data-display]');

const renderSun = () => {
  const sun = `
      <div data-sun>
        <img src="../assets/svg/day.svg" alt="" style="" class="transform scale-[5]">
      </div> 
  `;
  display.innerHTML = '';
  display.insertAdjacentHTML('afterbegin', sun);
};

const renderStorm = () => {
  const storm = `
    <div class="transform scale-[10] -translate-x-1 translate-y-30 w-3" data-storm>
        <div class="frontCloud transform -translate-y-3">
          <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 58.09 34.36">
            <defs>
              <style>.cls-9{fill:url(#linear-gradient1); stroke:none;}</style>
              <linearGradient id="linear-gradient1" x1="207.43" y1="182.89" x2="207.43" y2="217.25" gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#fff"/>
                <stop offset="0.1" stop-color="#eee"/>
                <stop offset="0.29" stop-color="#c3c3c3"/>
                <stop offset="0.56" stop-color="#7e7e7e"/>
                <stop offset="0.9" stop-color="#1f1f1f"/>
                <stop offset="1"/>
              </linearGradient>
            </defs>
          <path class="cls-9 cloudTwo" d="M236.47,208.93a8.32,8.32,0,0,1-8.32,8.32,5.68,5.68,0,0,1-.59,0H188.38a10.66,10.66,0,1,1,4.81-20.45,16.33,16.33,0,0,1,32.48,2.45,15.57,15.57,0,0,1-.11,1.81,8.33,8.33,0,0,1,10.91,7.9Z" transform="translate(-178.39 -182.89)"/>
          </svg>
        </div> 
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 113.85 99.78"><defs><style>.cls-1{fill:#fff;}.cls-2{fill:#474747;}</style></defs>
          <polygon class="cls-2 lightOne" points="38.13 71.18 63.2 40 59.22 62.01 74.81 62.01 50.05 92.58 53.72 71.18 38.13 71.18"/>
          <polygon class="cls-2 lightTwo" points="62.89 83.38 75.64 67.53 73.61 78.72 81.54 78.72 68.95 94.26 70.82 83.38 62.89 83.38"/>
          <polygon class="cls-2 lightThree" points="35.1 93.92 41.97 85.38 40.88 91.41 45.15 91.41 38.37 99.78 39.37 93.92 35.1 93.92"/></svg>
          
      </div> 
  `;
  display.innerHTML = '';
  display.insertAdjacentHTML('afterbegin', storm);
};

const renderRain = () => {
  const rain = `
    <div class="transform scale-[10] -translate-x-1 translate-y-30 w-3" data-rain>
        <div class="frontCloud transform -translate-y-3">
          <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 58.09 34.36">
            <defs>
              <style>.cls-9{fill:url(#linear-gradient1); stroke:none;}</style>
              <linearGradient id="linear-gradient1" x1="207.43" y1="182.89" x2="207.43" y2="217.25" gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#fff"/>
                <stop offset="0.1" stop-color="#eee"/>
                <stop offset="0.29" stop-color="#c3c3c3"/>
                <stop offset="0.56" stop-color="#7e7e7e"/>
                <stop offset="0.9" stop-color="#1f1f1f"/>
                <stop offset="1"/>
              </linearGradient>
            </defs>
          <path class="cls-9 cloudTwo" d="M236.47,208.93a8.32,8.32,0,0,1-8.32,8.32,5.68,5.68,0,0,1-.59,0H188.38a10.66,10.66,0,1,1,4.81-20.45,16.33,16.33,0,0,1,32.48,2.45,15.57,15.57,0,0,1-.11,1.81,8.33,8.33,0,0,1,10.91,7.9Z" transform="translate(-178.39 -182.89)"/>
          </svg>
        </div> 
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 113.85 95.71">
            <defs><style>.cls-1{fill:#fff;}.cls-2{fill:#323839;}</style></defs>
              <path class="cls-2 dropFour" d="M243.15,287.64c0,4.14-3.33,7.88-7.47,7.88a7.49,7.49,0,0,1-7.49-7.49,10.42,10.42,0,0,1,.71-3.46h0c1.43-4.28,6.57-9.5,10.75-10.35,2.8,2.95,3.53,8.08,3.5,13.42Z" transform="translate(-192.35 -210.75)"/>
              <path class="cls-2 dropOne" d="M264.23,278.67c0,4.14-3.33,7.88-7.47,7.88a7.49,7.49,0,0,1-7.49-7.49,10.42,10.42,0,0,1,.71-3.46h0c1.43-4.28,6.57-9.5,10.75-10.35,2.8,2.95,3.53,8.08,3.5,13.42Z" transform="translate(-192.35 -210.75)"/>
              <path class="cls-2 dropTwo" d="M278,286.31a6.5,6.5,0,0,1-6.21,6.56,6.23,6.23,0,0,1-6.24-6.23,8.67,8.67,0,0,1,.59-2.88h0c1.19-3.56,5.47-7.9,9-8.61,2.33,2.46,2.94,6.72,2.91,11.16Z" transform="translate(-192.35 -210.75)"/>
              <path class="cls-2 dropThree" d="M258.33,300.51a5.91,5.91,0,0,1-5.64,5.95,5.64,5.64,0,0,1-5.65-5.65,7.87,7.87,0,0,1,.53-2.61h0c1.08-3.23,5-7.17,8.11-7.81,2.12,2.22,2.67,6.09,2.65,10.12Z" transform="translate(-192.35 -210.75)"/>
          </svg>
      </div>  
  `;
  display.innerHTML = '';
  display.insertAdjacentHTML('afterbegin', rain);
};

const renderSnow = () => {
  const snowflake = `
    <div class="transform scale-[.4] -translate-x-16 translate-y-30 w-3" data-snow>
          <div class="relative w-80 h-80 m-0 mx-auto">
            <div>
              <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 113.85 69.79">
              <defs><style>.cls-1{fill:none;stroke:#fff;stroke-miterlimit:10;}.cls-2{fill:#fff;}</style></defs>
                <path class="cls-2 overcloud" d="M290.58,221.18c-.54,0-1.08,0-1.61.07a33.32,33.32,0,0,0-65.55-8.11,22.51,22.51,0,0,0-5.44-.66A22.79,22.79,0,0,0,216.54,258h11.27v-6h-11A16.79,16.79,0,0,1,218,218.48a16.52,16.52,0,0,1,6.52,1.32l3.56,1.51.58-3.83a27.32,27.32,0,0,1,54.16,7.13l-.54,4.66,4.46-1.47a12.19,12.19,0,0,1,3.86-.62,12.44,12.44,0,1,1,0,24.88c-.28,0-.57,0-.84,0h-6.9v6h6.51c.41,0,.82,0,1.23,0a18.44,18.44,0,1,0,0-36.88Z" transform="translate(-195.19 -188.27)"/>
              </svg>
            </div>
            <div class="snowOne">
              <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.56 24.88" >
                <defs><style>.cls-1{fill:blue;stroke:blue;stroke-miterlimit:10;}.cls-3{fill:lightblue;}</style></defs>
                  <polygon class="cls-3 snowflakeOne" points="23.56 8.22 23.18 7.3 19.28 8.91 20.52 5.29 19.57 4.97 18.05 9.42 11.93 11.96 13.06 5.47 17.27 3.08 17.4 3 16.91 2.13 13.28 4.2 13.98 0.17 13 0 12.3 4.02 9.78 1.04 9.02 1.69 12.07 5.3 11.02 11.32 6.36 7.59 6.42 2.87 5.42 2.86 5.37 6.79 2.02 4.11 1.4 4.89 4.69 7.53 0.92 8.19 1.09 9.18 5.73 8.36 10.8 12.43 4.97 14.84 0.7 12.56 0.56 12.49 0.09 13.37 3.77 15.33 0 16.89 0.38 17.82 4.15 16.26 2.98 19.98 3.94 20.27 5.35 15.76 10.63 13.58 9.64 19.23 5.48 21.46 5.95 22.34 9.42 20.48 8.69 24.71 9.67 24.88 10.39 20.73 12.79 23.71 13.57 23.09 10.62 19.42 11.71 13.16 16.77 17.21 16.84 22.05 16.84 22.21 17.84 22.2 17.78 18.02 20.97 20.58 21.59 19.8 18.41 17.25 22.23 16.48 22.03 15.5 17.4 16.43 12.74 12.7 18.42 10.35 22.53 12.67 23.02 11.8 19.59 9.87 23.56 8.22"/>
                </svg>
            </div>
            <div class="snowTwo">
              <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.56 24.88" >
                <defs><style>.cls-1{fill:none;stroke:#fff;stroke-miterlimit:10;}.cls-2{fill:#fff;}</style></defs>
                  <polygon class="cls-3 snowflakeTwo" points="23.56 8.22 23.18 7.3 19.28 8.91 20.52 5.29 19.57 4.97 18.05 9.42 11.93 11.96 13.06 5.47 17.27 3.08 17.4 3 16.91 2.13 13.28 4.2 13.98 0.17 13 0 12.3 4.02 9.78 1.04 9.02 1.69 12.07 5.3 11.02 11.32 6.36 7.59 6.42 2.87 5.42 2.86 5.37 6.79 2.02 4.11 1.4 4.89 4.69 7.53 0.92 8.19 1.09 9.18 5.73 8.36 10.8 12.43 4.97 14.84 0.7 12.56 0.56 12.49 0.09 13.37 3.77 15.33 0 16.89 0.38 17.82 4.15 16.26 2.98 19.98 3.94 20.27 5.35 15.76 10.63 13.58 9.64 19.23 5.48 21.46 5.95 22.34 9.42 20.48 8.69 24.71 9.67 24.88 10.39 20.73 12.79 23.71 13.57 23.09 10.62 19.42 11.71 13.16 16.77 17.21 16.84 22.05 16.84 22.21 17.84 22.2 17.78 18.02 20.97 20.58 21.59 19.8 18.41 17.25 22.23 16.48 22.03 15.5 17.4 16.43 12.74 12.7 18.42 10.35 22.53 12.67 23.02 11.8 19.59 9.87 23.56 8.22"/>
                </svg>
            </div>
            <div class="snowThree">
              <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.56 24.88" >
                <defs><style>.cls-1{fill:none;stroke:#fff;stroke-miterlimit:10;}.cls-2{fill:#fff;}</style></defs>
                  <polygon class="cls-3 snowflakeThree" points="23.56 8.22 23.18 7.3 19.28 8.91 20.52 5.29 19.57 4.97 18.05 9.42 11.93 11.96 13.06 5.47 17.27 3.08 17.4 3 16.91 2.13 13.28 4.2 13.98 0.17 13 0 12.3 4.02 9.78 1.04 9.02 1.69 12.07 5.3 11.02 11.32 6.36 7.59 6.42 2.87 5.42 2.86 5.37 6.79 2.02 4.11 1.4 4.89 4.69 7.53 0.92 8.19 1.09 9.18 5.73 8.36 10.8 12.43 4.97 14.84 0.7 12.56 0.56 12.49 0.09 13.37 3.77 15.33 0 16.89 0.38 17.82 4.15 16.26 2.98 19.98 3.94 20.27 5.35 15.76 10.63 13.58 9.64 19.23 5.48 21.46 5.95 22.34 9.42 20.48 8.69 24.71 9.67 24.88 10.39 20.73 12.79 23.71 13.57 23.09 10.62 19.42 11.71 13.16 16.77 17.21 16.84 22.05 16.84 22.21 17.84 22.2 17.78 18.02 20.97 20.58 21.59 19.8 18.41 17.25 22.23 16.48 22.03 15.5 17.4 16.43 12.74 12.7 18.42 10.35 22.53 12.67 23.02 11.8 19.59 9.87 23.56 8.22"/>
                </svg>
            </div>
            <div class="snowFour">
              <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.56 24.88" >
                <defs><style>.cls-1{fill:none;stroke:#fff;stroke-miterlimit:10;}.cls-2{fill:#fff;}</style></defs>
                  <polygon class="cls-3 snowflakeFour" points="23.56 8.22 23.18 7.3 19.28 8.91 20.52 5.29 19.57 4.97 18.05 9.42 11.93 11.96 13.06 5.47 17.27 3.08 17.4 3 16.91 2.13 13.28 4.2 13.98 0.17 13 0 12.3 4.02 9.78 1.04 9.02 1.69 12.07 5.3 11.02 11.32 6.36 7.59 6.42 2.87 5.42 2.86 5.37 6.79 2.02 4.11 1.4 4.89 4.69 7.53 0.92 8.19 1.09 9.18 5.73 8.36 10.8 12.43 4.97 14.84 0.7 12.56 0.56 12.49 0.09 13.37 3.77 15.33 0 16.89 0.38 17.82 4.15 16.26 2.98 19.98 3.94 20.27 5.35 15.76 10.63 13.58 9.64 19.23 5.48 21.46 5.95 22.34 9.42 20.48 8.69 24.71 9.67 24.88 10.39 20.73 12.79 23.71 13.57 23.09 10.62 19.42 11.71 13.16 16.77 17.21 16.84 22.05 16.84 22.21 17.84 22.2 17.78 18.02 20.97 20.58 21.59 19.8 18.41 17.25 22.23 16.48 22.03 15.5 17.4 16.43 12.74 12.7 18.42 10.35 22.53 12.67 23.02 11.8 19.59 9.87 23.56 8.22"/>
                </svg>
            </div>
          </div> 
      </div>
  `;
  display.innerHTML = '';
  display.insertAdjacentHTML('afterbegin', snowflake);
};

const renderCloud = () => {
  const cloud = `
  <div class="transform w-32 -translate-y-2" data-cloud>
        <div class="backCloud">
              <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 113.85 69.79">
                <defs>
                <style>.cls-1{fill:#ffffff;); stroke:none;}</style>
                </defs>
              <path class="cls-1" d="M290.52,221.66c-.54,0-1.08,0-1.61.07a33.32,33.32,0,0,0-65.55-8.11,22.51,22.51,0,0,0-5.44-.66,22.79,22.79,0,0,0-1.44,45.53h72.81c.41,0,.82,0,1.23,0a18.44,18.44,0,1,0,0-36.88Z" transform="translate(-195.13 -188.75)"/>
              </svg>
            </div>
            <div class="frontCloud">
              <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 58.09 34.36">
                <defs>
                  <style>.cls-2{fill:#ffffff; stroke:none;}</style>
                </defs>
              <path class="cls-2" d="M236.47,208.93a8.32,8.32,0,0,1-8.32,8.32,5.68,5.68,0,0,1-.59,0H188.38a10.66,10.66,0,1,1,4.81-20.45,16.33,16.33,0,0,1,32.48,2.45,15.57,15.57,0,0,1-.11,1.81,8.33,8.33,0,0,1,10.91,7.9Z" transform="translate(-178.39 -182.89)"/>
              </svg>
            </div>
      </div> 
  `;
  display.innerHTML = '';
  display.insertAdjacentHTML('afterbegin', cloud);
};

const renderCloudy = () => {
  const cloudy = `
    <div class="transform w-32 -translate-y-2" data-cloudy>
        <div class="backCloud">
              <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 113.85 69.79">
                <defs>
                <style>.cls-1{fill:url(#linear-gradient); stroke:none;}</style>
                  <linearGradient id="linear-gradient" x1="252.05" y1="188.75" x2="252.05" y2="258.54" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color="#fff"/>
                    <stop offset="0.24" stop-color="#fdfdfd"/>
                    <stop offset="0.37" stop-color="#f4f4f4"/>
                    <stop offset="0.49" stop-color="#e6e6e6"/>
                    <stop offset="0.58" stop-color="#d2d2d2"/>
                    <stop offset="0.67" stop-color="#b9b9b9"/>
                    <stop offset="0.75" stop-color="#999"/>
                    <stop offset="0.83" stop-color="#737373"/>
                    <stop offset="0.9" stop-color="#484848"/>
                    <stop offset="0.97" stop-color="#171717"/> 
                    <stop offset="1"/>
                  </linearGradient>
                </defs>
              <path class="cls-1" d="M290.52,221.66c-.54,0-1.08,0-1.61.07a33.32,33.32,0,0,0-65.55-8.11,22.51,22.51,0,0,0-5.44-.66,22.79,22.79,0,0,0-1.44,45.53h72.81c.41,0,.82,0,1.23,0a18.44,18.44,0,1,0,0-36.88Z" transform="translate(-195.13 -188.75)"/>
              </svg>
            </div>
            <div class="frontCloud">
              <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 58.09 34.36">
                <defs>
                  <style>.cls-2{fill:url(#linear-gradient1); stroke:none;}</style>
                  <linearGradient id="linear-gradient1" x1="207.43" y1="182.89" x2="207.43" y2="217.25" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color="#fff"/>
                    <stop offset="0.1" stop-color="#eee"/>
                    <stop offset="0.29" stop-color="#c3c3c3"/>
                    <stop offset="0.56" stop-color="#7e7e7e"/>
                    <stop offset="0.9" stop-color="#1f1f1f"/>
                    <stop offset="1"/>
                  </linearGradient>
                </defs>
              <path class="cls-2 cloudTwo" d="M236.47,208.93a8.32,8.32,0,0,1-8.32,8.32,5.68,5.68,0,0,1-.59,0H188.38a10.66,10.66,0,1,1,4.81-20.45,16.33,16.33,0,0,1,32.48,2.45,15.57,15.57,0,0,1-.11,1.81,8.33,8.33,0,0,1,10.91,7.9Z" transform="translate(-178.39 -182.89)"/>
              </svg>
            </div>
      </div> 
  `;
  display.innerHTML = '';
  display.insertAdjacentHTML('afterbegin', cloudy);
};

const renderSunnyRain = () => {
  const sunnyRain = `
    <div class="transform translate-y-7 w-28" data-sun-rain>
        <div>
          <img src="../assets/svg/day.svg" alt="" style="" class="transform scale-[4] translate-x-14">
        </div>
        <div class="transform -translate-y-12 -translate-x-1">
          <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 113.85 95.71">
            <defs><style>.cls-4{fill:#fff;}.cls-5{fill:#323839;}</style></defs>
              <path class="cls-5 dropFour" d="M243.15,287.64c0,4.14-3.33,7.88-7.47,7.88a7.49,7.49,0,0,1-7.49-7.49,10.42,10.42,0,0,1,.71-3.46h0c1.43-4.28,6.57-9.5,10.75-10.35,2.8,2.95,3.53,8.08,3.5,13.42Z" transform="translate(-192.35 -210.75)"/>
              <path class="cls-5 dropOne" d="M264.23,278.67c0,4.14-3.33,7.88-7.47,7.88a7.49,7.49,0,0,1-7.49-7.49,10.42,10.42,0,0,1,.71-3.46h0c1.43-4.28,6.57-9.5,10.75-10.35,2.8,2.95,3.53,8.08,3.5,13.42Z" transform="translate(-192.35 -210.75)"/>
              <path class="cls-5 dropTwo" d="M278,286.31a6.5,6.5,0,0,1-6.21,6.56,6.23,6.23,0,0,1-6.24-6.23,8.67,8.67,0,0,1,.59-2.88h0c1.19-3.56,5.47-7.9,9-8.61,2.33,2.46,2.94,6.72,2.91,11.16Z" transform="translate(-192.35 -210.75)"/>
              <path class="cls-5 dropThree" d="M258.33,300.51a5.91,5.91,0,0,1-5.64,5.95,5.64,5.64,0,0,1-5.65-5.65,7.87,7.87,0,0,1,.53-2.61h0c1.08-3.23,5-7.17,8.11-7.81,2.12,2.22,2.67,6.09,2.65,10.12Z" transform="translate(-192.35 -210.75)"/>
          </svg>
        </div> 
        <div class="frontCloud">
          <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 58.09 34.36">
            <defs>
              <style>.cls-2{fill:url(#linear-gradient1); stroke:none;}</style>
              <linearGradient id="linear-gradient1" x1="207.43" y1="182.89" x2="207.43" y2="217.25" gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#fff"/>
                <stop offset="0.1" stop-color="#eee"/>
                <stop offset="0.29" stop-color="#c3c3c3"/>
                <stop offset="0.56" stop-color="#7e7e7e"/>
                <stop offset="0.9" stop-color="#1f1f1f"/>
                <stop offset="1"/>
              </linearGradient>
            </defs>
          <path class="cls-2 cloudTwo" d="M236.47,208.93a8.32,8.32,0,0,1-8.32,8.32,5.68,5.68,0,0,1-.59,0H188.38a10.66,10.66,0,1,1,4.81-20.45,16.33,16.33,0,0,1,32.48,2.45,15.57,15.57,0,0,1-.11,1.81,8.33,8.33,0,0,1,10.91,7.9Z" transform="translate(-178.39 -182.89)"/>
          </svg>
        </div>       
      </div> 
  `;
  display.innerHTML = '';
  display.insertAdjacentHTML('afterbegin', sunnyRain);
};

const renderSunnyCloud = () => {
  const sunnyCloud = `
    <div class="transform -translate-y-3 w-28" data-sun-cloud>
        <div>
          <img src="../assets/svg/day.svg" alt="" style="" class="transform scale-[4] translate-x-14">
        </div>
        <div class="frontCloud">
          <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 58.09 34.36"
            <defs>
              <style>.cls-2{fill:#fff; stroke:none;}</style>
            </defs>
          <path class="cls-2 cloudTwo" d="M236.47,208.93a8.32,8.32,0,0,1-8.32,8.32,5.68,5.68,0,0,1-.59,0H188.38a10.66,10.66,0,1,1,4.81-20.45,16.33,16.33,0,0,1,32.48,2.45,15.57,15.57,0,0,1-.11,1.81,8.33,8.33,0,0,1,10.91,7.9Z" transform="translate(-178.39 -182.89)"/>
          </svg>
        </div>       
      </div> 
  `;
  display.innerHTML = '';
  display.insertAdjacentHTML('afterbegin', sunnyCloud);
};

const renderDisplay = (val) => {
  const regex = /(?<cond>broken|overcast) clouds/;
  if (val.includes('snow')) {
    renderSnow();
  } else if (val.includes('clear')) {
    renderSun();
  } else if (val.includes('scattered')) {
    renderCloud();
  } else if (val.includes('moderate')) {
    renderRain();
  } else if (val.match(regex)) {
    renderCloudy();
  } else if (val.includes('heavy')) {
    renderStorm();
  } else if (val.includes('light')) {
    renderSunnyRain();
  } else if (val.includes('few')) {
    renderSunnyCloud();
  }
};

export default renderDisplay;