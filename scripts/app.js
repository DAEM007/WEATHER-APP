const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');


const updateUI = (data) => {
    const cityDets = data.cityDets;
    const weather = data.weather;

    // update the details to the template
    details.innerHTML = `
        <h5 class="my-3">${cityDets.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `;

    // remove the d-none class if present
    if(card.classList.contains("d-none")){
        card.classList.remove("d-none");
    }

};

const updateCity = async (city) => {
   const cityDets = await getCity(city);
   const weather = await getWeather(cityDets.Key);

   return{
    //    cityDets: cityDets,
    //    weather: weather
    // The lines of code below does the same thing as well....which could as well be written on one line.
    cityDets,
    weather
   };


};


cityForm.addEventListener('submit', e => {
    // Prevent default action that is prevent webpage refresh
    e.preventDefault();

    // Get the value of the city
    const city = cityForm.city.value.trim();
    cityForm.reset();

    // Update the UI with the new city

    updateCity(city)
        .then((data) => {
            updateUI(data);
            // console.log(data);
        }).catch((err) => {
            console.log('data rejected:', err);
        });
});