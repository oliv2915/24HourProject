import "bootstrap/dist/css/bootstrap.css";
import {useState, useEffect} from "react";

function App() {
  const [longitude, setLongitude] = useState();
  const [latitude, setLatitude] = useState();

  useEffect(() => {
<<<<<<< HEAD
    const geoLocationData = (geoData) => {
      setLatitude(geoData.coords.latitude);
      setLongitude(geoData.coords.longitude)
    };
    window.navigator.geolocation.getCurrentPosition(geoLocationData);
  }, [])
=======
    return window.navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);
  
 
  
    const fetchNasaImage = async ({latitude, longitude}) => {
      const query = `${process.env.REACT_APP_NASA_EARTH_API_URL}?api_key=${process.env.REACT_APP_NASA_API_KEY}&lat=${latitude}&lon=${longitude}&date=${date}`
      
      const response = await fetch(query);
      const nasaImage = await response.json();
      
      setNasaImage(nasaImage);
      };
  
    console.log("Fetch Image")
  

  const fetchWeatherData = async ({latitude, longitude}) => {
    const query = `${process.env.REACT_APP_OPEN_WEATHER_API_URL}?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`;
    
    const response = await fetch(query);
    const weatherData = await response.json();
    
    setWeatherData(weatherData);
    };
>>>>>>> develop

  return (
    <div className="App">
      
    </div>
  );
}

export default App;

