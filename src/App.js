import "./App.css";
import SearchCity from "./components/SearchCity";
import WeatherDetails from "./components/WeatherDetails";

function App() {
	return (
		<div className="app">
			<h1 className="text-7xl font-bold text-center style={{ fontfamily:'Megrim', sans-serif}}">
				🌨️ Weather ⛅
			</h1>

			<div className="flex  justify-end items-center flex-col">
				<SearchCity />
				<WeatherDetails />
			</div>
		</div>
	);
}

export default App;
