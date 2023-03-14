let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};

let parisRoundTemp = Math.round(weather.paris.temp);
let tokyoRoundTemp = Math.round(weather.tokyo.temp);
let lisbonRoundTemp = Math.round(weather.lisbon.temp);
let sanRoundTemp = Math.round(weather["san francisco"].temp);

console.log(parisRoundTemp);

let parisFahrenheit = parisRoundTemp * 1.8 + 32;
let tokyoFahrenheit = tokyoRoundTemp * 1.8 + 32;
let lisbonFahrenheit = lisbonRoundTemp * 1.8 + 32;
let sanFahrenheit = sanRoundTemp * 1.8 + 32;
let osloFahreneit = weather.oslo.temp * 1.8 + 32;

let cities = prompt("Enter City");

if ((cities = "paris")) {
  alert(
    `It is currently ${parisRoundTemp}°C (${parisFahrenheit}°F) in Paris with a humidity of ${weather.paris.humidity}%`
  );
} else if ((cities = "tokyo")) {
  alert(
    `It is currently ${tokyoRoundTemp}°C (${tokyoFahrenheit}°F) in Tokyo with a humidity of ${weather.tokyo.humidity}%`
  );
} else if ((cities = "lisbon")) {
  alert(
    `It is currently ${lisbonRoundTemp}°C (${lisbonFahrenheit}°F) in Lison with a humidity of ${weather.lisbon.humidity}%`
  );
} else if ((cities = "san francisco")) {
  alert(
    `It is currently ${sanRoundTemp}°C (${sanFahrenheit}°F) in San Francisco with a humidity of ${weather["san francisco"].humidity}%`
  );
} else if ((cities = "oslo")) {
  alert(
    `It is currently ${weather.oslo.temp}°C (${osloFahrenheit}°F) in Oslo with a humidity of ${weather.oslo.humidity}%`
  );
} else {
  alert(
    `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${cities}`
  );
}
