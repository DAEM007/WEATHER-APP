const key = 'JNMOcri67N5fo5xXUz5iAUZuHGn484A9';

const getCity = async (city) => {

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return (data[0]);

};

getCity('akure')
    .then((data) => {
        console.log('data resolved:', data);
    })
    .catch((err) => {
        console.log('data rejected:', err);
    });