import "bootstrap/dist/css/bootstrap.css";
import {useState, useEffect} from "react";
import View from "./components/View";

function App() {
  const [longitude, setLongitude] = useState();
  const [latitude, setLatitude] = useState();
  const [nasaImage, setNasaImage] = useState();
  const [weatherData, setWeatherData] = useState();

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(geoLocationData);
  }, []);


  const geoLocationData = (geoData) => {
    setLatitude(geoData.coords.latitude);
    setLongitude(geoData.coords.longitude);

    fetchNasaImage(longitude, latitude);
    fetchWeatherData(longitude, latitude);
  };
  
  const fetchNasaImage = (longitude, latitude) => {
    console.log("fetched nasa image")
  }

  const fetchWeatherData = (longitude, latitude) => {
    console.log("fetched weather data")
  }

  return (
    <div>
      <View nasaImage={nasaImage} weatherData={weatherData}/>
    </div>
  );
}

export default App;
