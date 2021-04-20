import "bootstrap/dist/css/bootstrap.css";
import {useState, useEffect} from "react";

function App() {
  const [longitude, setLongitude] = useState();
  const [latitude, setLatitude] = useState();

  useEffect(() => {
    const geoLocationData = (geoData) => {
      setLatitude(geoData.coords.latitude);
      setLongitude(geoData.coords.longitude)
    };
    window.navigator.geolocation.getCurrentPosition(geoLocationData);
  }, [])

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
