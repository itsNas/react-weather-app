import { WEATHER_API_URL, WEATHER_API_KEY } from "../api";
export const useWeather = () => {
  async function submitRequest(search) {
    const endpoint = `${WEATHER_API_URL}/weather?q=${search}&units=metric&appid=${WEATHER_API_KEY}`;

    try {
      const response = await fetch(endpoint, { mode: "cors" });
      if (!response.ok) throw new Error(`City ${search} not found`);
      const data = getData(await response.json());
      return data;
    } catch (error) {
      alert(error);
      return null;
    }
  }

  function getData(data) {
    const {
      name,
      main: { temp, feels_like, humidity },
      wind: { speed },
    } = data;
    return { name, temp, feels_like, humidity, speed };
  }

  return {
    submitRequest,
    getData,
  };
};
