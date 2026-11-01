const API_KEY = "d9de1a982bdc4598b159a43747223f3d";

const BASE_URL = 
"https://api.openweathermap.org/data/2.5/weather";


export const getWeather = async (city) => {

    try {

        if(!city){
            console.log("City name missing");
            return null;
        }


        const response = await fetch(
            `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`
        );


        if(!response.ok){

            throw new Error(
                "Unable to fetch weather information"
            );

        }


        const data = await response.json();


        return {

            main: data.main,

            weather: data.weather,

            wind: data.wind,

            city: data.name,

            country: data.sys.country

        };


    } catch(error){

        console.error(
            "Weather API Error:",
            error.message
        );


        return null;

    }

};