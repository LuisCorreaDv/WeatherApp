const apiKey = "51afb30ca00563e91e6b6d94f858fd2b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const ciudadInput = document.querySelector(".search__input");
const botonBuscar = document.querySelector(".search__btn");

const weatherImage = document.querySelector(".weather__icon");

async function checarClima(ciudadNueva) {
    const respuesta = await fetch(apiUrl + ciudadNueva + `&appid=${apiKey}`);
    var data = await respuesta.json();

    console.log(data);
    let ciudad = data.name;
    let temperatura = data.main.temp;
    let humedad = data.main.humidity;
    let velViento = data.wind.speed;

    document.querySelector(".weather__city").innerHTML = ciudad;
    document.querySelector(".weather__temp").innerHTML = Math.round(temperatura) + "°C";
    document.querySelector(".humidity").innerHTML = humedad + "%";
    document.querySelector(".wind").innerHTML = velViento + " km/h";

    if (data.weather[0].main == "Clouds") {
        weatherImage.src = "./Images/clouds.png";
    }
    else if (data.weather[0].main == "Clear") {
        weatherImage.src = "./Images/clear.png";
    }
    else if (data.weather[0].main == "Rain") {
        weatherImage.src = "./Images/rain.png";
    }
    else if (data.weather[0].main == "Drizzle") {
        weatherImage.src = "./Images/drizzle.png";
    }
    else if (data.weather[0].main == "Mist") {
        weatherImage.src = "./Images/mist.png";
    }
    else if (data.weather[0].main == "Snow") {
        weatherImage.src = "./Images/snow.png";
    }

    document.querySelector(".weather").style.display = "block";
}

botonBuscar.addEventListener("click", () => {
    checarClima(ciudadInput.value);
})
