let city = document.querySelector(".cityName"); 
let btn = document.querySelector(".btn");
let output = document.querySelector(".output");
btn.addEventListener("click",getWeather);
// On clicking submit/btn, run getWeather() function
function getWeather()
{
	fetch('https://api.openweathermap.org/data/2.5/weather?q='+city.value+'&units=metric&appid=1ebc5861bba83e0214cd8df3b995ffca')
	.then(response => response.json())
	.then(data => {
		console.log(data);
		const date_time = new Date(); //Current date, time
		output.innerHTML = date_time+"<br>"+"<br>"+"<br>"+"<br>"+"<br>"+"Weather condition: "+data["weather"][0]["description"]+"<br>"+"<br>"+"<br>"+"<br>"+"<br>"+"Temp: "+data["main"]["temp"]+"°C"+"<br>"+"<br>"+"<br>"+"<br>"
		+"<br>"+"Humidity: "+data["main"]["humidity"]+"<br>"+"<br>"+"<br>"+"<br>"+"<br>"+"Wind Speed: "+data["wind"]["speed"]+"<br>"+"<br>"+"<br>"+"<br>"+"<br>" 
	})
	.catch(err=>alert("error"));
}