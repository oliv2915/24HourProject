import "bootstrap/dist/css/bootstrap.css";
import {useState, useEffect, useRef} from "react";
import View from "./components/View";

function App() {
  const location = useRef()
  const date = useRef()
  const [nasaImage, setNasaImage] = useState("");
  const [weatherData, setWeatherData] = useState({});

  const onSuccess = (position) => {
    const currDate = new Date().toISOString().slice(0,10);
    date.current = currDate; // current date

    console.log("GeoLocation Before toFixed", position)
    const currCoords = {
      latitude: new Number(position.coords.latitude).toFixed(2),
      longitude: new Number(position.coords.longitude).toFixed(2)
    }
    location.current = currCoords; // current geo location
    console.log("GeoLocation After toFixed", location)

    fetchWeatherData(location);
    fetchNasaImage(location, date);
  };

  const onError = (error) => {
    console.log(`GeoLocation Error: ${error}`)
  };

  useEffect(() => {
    return window.navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);
  
 
  
  const fetchNasaImage = async (location, date) => {
    try {
      const query = `${process.env.REACT_APP_NASA_EARTH_API_URL}?api_key=${process.env.REACT_APP_NASA_API_KEY}&lat=${location.current.latitude}&lon=${location.current.longitude}&date=${date.current}`
      console.log("NASA Fetch URL:", query)
      const response = await fetch(query);
      const nasaImage = await response.json();
      
      setNasaImage(nasaImage);
    } catch (err) {
      console.log("ERR: NASA Image Error", err)
    }
  };
  

  const fetchWeatherData = async (location) => {
    try {
      const query = `${process.env.REACT_APP_OPEN_WEATHER_API_URL}?lat=${location.current.latitude}&lon=${location.current.longitude}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`;
      console.log("Weather Fetch URL:", query)
      const response = await fetch(query);
      const weatherData = await response.json();
      setWeatherData(weatherData);
    } catch (err) {
      console.log("ERR: Weather Error", err)
    }
  };

  return (
    <div>
      <View nasaImage={nasaImage} weatherData={weatherData}/>
    </div>
  )
}

export default App;
