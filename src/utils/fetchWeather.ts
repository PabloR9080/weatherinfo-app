
const apiKey = "a72807b6c32dd7c3c9f84ebd4f3a00d5";

type cityArgs = string | {lat:number; lon:number};
export const fetchWeather = async (city: cityArgs) => {
  if(!city) return;

  const url = typeof city === "string" ? 
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    :
    `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&&appid=${apiKey}&units=metric`
    ;

  try {
    const response = await fetch(url);
    const responseJson = await response.json();
    if(responseJson.cod === '400') throw new Error;
    return responseJson;
  } catch (error) {
    console.error("Error fetching the weather data", error);
    throw error;
  }
};
