const apiKey = "51afb30ca00563e91e6b6d94f858fd2b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&lang=es&q=";

const ciudadInput = document.querySelector(".search__input");
const botonBuscar = document.querySelector(".search__btn");

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
}

botonBuscar.addEventListener("click", () => {
    checarClima(ciudadInput.value);
})
