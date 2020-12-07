"use strict";

const url =
  "http://api.openweathermap.org/data/2.5/weather?q=Manchester&APPID=8c49c01e775bfd7142bc8e6631eb89a0";

$.ajax({
  url: url,
  success: function (result) {
    console.log(result);
    console.log(result.name);
    $("#location").text(result.name);
    let celsius = Math.round((result.main.temp - 273.15) * 10) / 10;
    $("#temperature").text(celsius);
    $("#wind").text(result.wind.speed);
    $("#sky").text(result.weather[0].description);
  },
});
