const key = 'ZmbCRpSiW10wj277UA7aZ9waRAE2iaKM';

// GET WEATHER INFOMATION
const getWeather = async (id) => {

    const base = 'https://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return (data[0]);

};



// GET CITY INFORMATION
const getCity = async (city) => {

    const base = 'https://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return (data[0]);

};

