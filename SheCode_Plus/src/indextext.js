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

let cityName = prompt("Enter the city");
cityName = cityName.toLocaleLowerCase();
if (weather[cityName] !== undefined) {
  let temperature = weather[cityName].temp;
  temperature = Math.round(temperature);
  let humidity = weather[cityName].humidity;

  alert(
    `It is currently ${temperature}°C in ${cityName} with humidity of ${humidity}%`
  );
} else {
  alert(
    `Sorry, we don't know the weather for ${cityName}, try going to https://www.google.com/search?q=weather`
  );
}
