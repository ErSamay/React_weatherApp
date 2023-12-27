import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
export default function InfoBox({info}){
    const img = "https://media.istockphoto.com/id/1694018090/photo/altocumulus-clouds.webp?b=1&s=170667a&w=0&k=20&c=2JoOjnxxK5Ffzxv_-tXlXgEPRqP1sOULbPcCGBGcghY="

    let COLD_URL = "https://images.unsplash.com/photo-1613416721439-9c2d988ab9cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fENPTEQlMjBXRUFUSEVSfGVufDB8fDB8fHww"
    let HOT_URL = "https://media.istockphoto.com/id/1323823418/photo/low-angle-view-thermometer-on-blue-sky-with-sun-shining.webp?b=1&s=170667a&w=0&k=20&c=fv4bbdGSWirsCUy06Qo3chENIEB8FN5-Z3iiw0UdL_c="
    let RAINY_URL = "https://media.istockphoto.com/id/497639283/photo/caution.jpg?s=612x612&w=0&k=20&c=dbWfyDy0Ny_NyGBaiBGQL5NljsFBg_M9n5J03Y3YQjw="
    
    return(
        <div className="InfoBox">
           <div className="cardContainer">
           <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={info.humidity > 80 ? RAINY_URL : info.temp > 15 ? HOT_URL : COLD_URL}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"} >
        <div>Temperature = {info.temp}&deg;C</div>
        <div>Humidity = {info.humidity}</div>
        <div>Min Temp = {info.tempMin}&deg;C</div>
        <div>Max Temp = {info.tempMax}&deg;C</div>
        <div>The <b>Weather</b> can be described as <i>{info.weather}</i> and feelsLike = {info.feelslike}&deg;</div>

        
        </Typography>
      </CardContent>
    
    </Card>

           </div>
           <h3>BY : Samay Jain</h3>
        </div>
        
    )
}