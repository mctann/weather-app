import { useState, useEffect } from "react";
import formatDateShort from "./lib/utils/formatDateShort";
import formatDate from "./lib/utils/formatDate";
import useGeoLocation from "./hooks/useGeoLocation";

export default function App() {
  const [weatherData, setWeatherData] = useState([]);
  const [weatherClass, setWeatherClass] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [queryValue, setQueryValue] = useState("Jakarta");
  const location = useGeoLocation();

  useEffect(() => {
    setQueryValue(location.coordinates.lat + "," + location.coordinates.lng);
  }, [location]);

  useEffect(() => {
    if (location?.loaded) {
      fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${queryValue}&days=3&aqi=no&alerts=no`
      )
        .then((res) => res.json())
        .then((data) => {
          setWeatherData(data);
          const hour = new Date(data.location?.localtime).getHours();

          if (hour >= 6 && hour < 11) {
            setWeatherClass(1);
          } else if (hour >= 11 && hour < 14) {
            setWeatherClass(2);
          } else if (hour >= 14 && hour < 16) {
            setWeatherClass(3);
          } else if (hour >= 16 && hour < 18) {
            setWeatherClass(4);
          } else if (hour >= 18 && hour < 20) {
            setWeatherClass(5);
          } else {
            setWeatherClass(6);
          }

          setIsLoading(false);
        });
    }
  }, [queryValue]);

  return (
    <div>
      {isLoading ? (
        <div class="flex items-center justify-center w-screen h-screen bg-blue-300 px-8">
          <p class="text-5xl text-white">Please enable your allocation access</p>
        </div>
      ) : (
        <div className={`bg-gradient-${weatherClass}`}>
          <div className="grid md:grid-cols-2 mx-8 md:mx-32 py-6 md:py-24">
            <div className="md:my-auto">
              <h1 className="text-3xl md:text-6xl text-center md:text-left font-medium mb-2">
                {weatherData.location?.name}
              </h1>
              <h3 className="text-xl md:text-3xl text-center md:text-left">
                {formatDate(weatherData.location?.localtime)}
              </h3>
            </div>
            <div className="flex flex-col justify-center items-center md:hidden my-8 md:my-0">
              <div className="">
                <p className="text-8xl">{weatherData.current?.temp_c}°C</p>
              </div>
            </div>
            <div className="my-auto">
              <table className="table-auto w-full">
                <tbody>
                  <tr className="border-b">
                    <td className="py-2">Cloudy</td>
                    <td className="font-semibold text-right">
                      {weatherData.current?.cloud}%
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Humidity</td>
                    <td className="font-semibold text-right">
                      {weatherData.current?.humidity}%
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Wind</td>
                    <td className="font-semibold text-right">
                      {weatherData.current?.wind_kph}km/h
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="w-full h-72 my-16 md:my-0 bg-white bg-opacity-10 backdrop-blur-md rounded drop-shadow-lg">
            <div className="grid grid-cols-3 md:grid-cols-5 px-2 md:px-16 py-2 md:py-16 h-full place-items-center">
              <div className="hidden md:block md:col-span-1">
                <img
                  src={weatherData.current?.condition.icon}
                  alt=""
                  className="w-28 h-28"
                />
              </div>
              <div className="hidden md:block md:col-span-1 mr-8">
                <h3 className="text-4xl">TODAY</h3>
                <p className="text-8xl">{weatherData.current?.temp_c}°C</p>
              </div>
              {weatherData.forecast?.forecastday.map((x) => (
                <div
                  className="col-span-1 flex justify-center items-center flex-col"
                  key={x.date_epoch}
                >
                  <h3 className="text-xl">{formatDateShort(x.date)}</h3>
                  <img
                    src={x.day.condition.icon}
                    alt=""
                    className="w-16 h-16 my-4"
                  />
                  <p className="text-xl">{x.day.avgtemp_c}°C</p>
                </div>
              ))}
            </div>
          </div>

          <footer className="p-4  shadow md:flex md:items-center md:justify-between md:p-6 bg-gray-800">
            <span className="text-sm sm:text-center text-gray-400">
              © {new Date().getFullYear()}. Michelle Tan
            </span>
          </footer>
        </div>
      )}
    </div>
  );
}
