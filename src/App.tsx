import React, { useEffect, useState } from 'react';
import './App.css';
import Forecast from './components/Forecast';
import Inputs from './components/Inputs';
import Metadata from './components/Metadata';
//@ts-ignore
// import UilReact from "@iconscout/react-unicons/icons/uil-react";
import TopButtons from './components/TopButtons';
import WeatherDetails from './components/WeatherDetails';
import getFormattedWeatherData from './constants';

function App() {
  const [query, setQuery] = useState<any>({ q: "Delhi" });
  const [units, setUnits] = useState<any>("metric");
  const [weather, setWeather] = useState<any>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {

        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  const formatBackground = () => {
		if (!weather) return "from-cyan-700 to-blue-700";
		const threshold = units === "metric" ? 30 : 86;
		if (weather.temp < threshold || weather.temp === threshold) return "from-cyan-700 to-blue-700";

		return "from-yellow-700 to-orange-700";
  };
  return (
		<div
			className={`mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br  h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}
		>
			<TopButtons setQuery={setQuery} />
			<Inputs setQuery={setQuery} units={units} setUnits={setUnits} />
			{weather && (
				<>
					<Metadata weather={weather} />
					<WeatherDetails weather={weather} />
					<Forecast title={"Hourly"} items={weather.hourly} />
					<Forecast title={"Daily"} items={weather.daily} />
				</>
			)}
		</div>
  );
}

export default App;
