const apiKey = "51afb30ca00563e91e6b6d94f858fd2b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&lang=es&q=Mexico";

async function checarClima() {
    const respuesta = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await respuesta.json();

    console.log(data);
}

checarClima();