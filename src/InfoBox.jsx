import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SevereColdIcon from '@mui/icons-material/SevereCold';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({ info }){
    const INIT_URL = 
    "https://images.unsplash.com/photo-1733164847768-694d4bd1ecf7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    
    const HOT_URL ="https://plus.unsplash.com/premium_photo-1688804790295-8356369391ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fEhPVCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

    const COLD_URL ="https://images.unsplash.com/photo-1640955788205-46267ab3b3cf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";

    const RAINY_URL ="https://images.unsplash.com/photo-1636414795389-2cd7bb362560?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fFJBSU5ZJTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

    return (<div className="InfoBox">
        <div className='cardConatiner'>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image = {
          info.humidity > 85
          ? RAINY_URL
           :info.temp > 15
           ? HOT_URL
           : COLD_URL     
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {
          info.humidity > 85 
          ? <ThunderstormIcon />
           :info.temp > 15
           ? <WbSunnyIcon />
           : <SevereColdIcon />    
        }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p>Temperature ={info.temp}&deg;C</p>
          <p>Humidity={info.humidity}</p>
          <p>Min temp = {info.tempMin}&deg;C</p>
          <p>Max temp = {info.tempMax}&deg;C</p>
          <p>The weather can be describe as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
    </div>
    );
}