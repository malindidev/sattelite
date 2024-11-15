const apiKey = '4f090af80374f4e426b7bb21c3928474';
const city = 'London'; // Dynamically change based on user input
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data); // Extract and display weather data
  })
  .catch(error => console.log('Error:', error));
