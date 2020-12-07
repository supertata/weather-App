"use strict";

const url =
  "http://api.openweathermap.org/data/2.5/weather?q=Manchester&APPID=8c49c01e775bfd7142bc8e6631eb89a0";

$.ajax({
  url: url,
  success: function (result) {
    console.log(result);
    console.log(result.name);
    let displayCity = `Weather for ${result.name}`;
    $("#location").html(displayCity);
    let celsius = Math.round((result.main.temp - 273.15) * 10) / 10;
    $("#temperature").html(`Temperature: ${celsius}&#176;C`);
    let displayWind = `Wind: ${result.wind.speed} m/s`;
    $("#wind").html(displayWind);
    let skyCondition = `Sky conditon: ${result.weather[0].description}`;
    $("#sky").html(skyCondition);
  },
});
