import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import {useState} from "react";
export default function WeatherApp(){
    const[weatherInfo , setWeatherInfo] = useState({
        city: "Dabra",
        feelslike:22.15,
        temp:22.89,
        tempMin:22.89,
        tempMax:22.89,
        humidity:35,
        weather:"broken clouds"
    })
    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo)
    }
    return(
        
        <div style={{textAlign: "center"}}>
        <h1>Weather App By Delta</h1>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
        
        </div>
    )
}