const cityForm = document.querySelector('form');

const updateCity = async (city) => {
    console.log(city);
}


cityForm.addEventListener('submit', e => {
    // Prevent default action that is prevent webpage refresh
    e.preventDefault();

    // Get the value of the city
    const city = cityForm.city.value.trim();
    cityForm.reset();

    // Update the UI with the new city

    updateCity(city);
});