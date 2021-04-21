import "bootstrap/dist/css/bootstrap.css";
import {useState, useEffect} from "react";
import View from "./components/View";

function App() {
  const [location, setLocation] = useState({})
  const [date, setDate] = useState("")
  const [nasaImage, setNasaImage] = useState("");
  const [weatherData, setWeatherData] = useState({});

  const onSuccess = (position) => {
    const currDate = new Date().toISOString().slice(0,10);
    setDate(currDate);

    console.log(position)
    const currCoords = {
      latitude: new Number(position.coords.latitude).toFixed(2),
      longitude: new Number(position.coords.longitude).toFixed(2)
    }
    setLocation(currCoords);
    fetchWeatherData(location);
    fetchNasaImage(location);

    console.log(nasaImage)
  };

  const onError = (error) => {
    console.log(`GeoLocation Error: ${error}`)
    setWeatherData({});
    setNasaImage("");
  };

  useEffect(() => {
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
    console.log("Fetch Weather")
  };

  return (
    <div>
      <View nasaImage={nasaImage} weatherData={weatherData}/>
    </div>
  )
}

export default App;
