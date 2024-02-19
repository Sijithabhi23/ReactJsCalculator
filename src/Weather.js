import React, { useEffect,useState } from 'react'
import axios from 'axios';
import "./Weather.css";
import "./unnamed-removebg-preview.png";


function Weather() {
    const [temp,Settemp] = useState(null)
    const [press,Setpress] = useState(null)
    const [alti,Setalti] = useState(null)


    const getTemp =  async() => {
        
      var response =  await axios.get("https://io.adafruit.com/api/v2/akshaypsmec/feeds/tempt")
      console.log(response.data['last_value'])

      Settemp(response.data['last_value'])
    }


    const getPressure =  async() => {
        
        var response =  await axios.get("https://io.adafruit.com/api/v2/akshaypsmec/feeds/pressure")
        console.log(response.data['last_value'])
  
        Setpress(response.data['last_value'])
      }


 const getAltitude =  async() => {

        var response =  await axios.get("https://io.adafruit.com/api/v2/akshaypsmec/feeds/altitude")
        console.log(response.data['last_value'])
  
        Setalti(response.data['last_value'])
      }

    useEffect(()=>{
        getTemp()
        getPressure()
        getAltitude()
    },[])


  return (
    <div>

        <marquee><img src='unnamed-removebg-preview.png'></img></marquee>
        <div className='card-container'>
            <div className='Weather-report'>
         <h1><label>Temperature   :   </label>{  temp != null ?temp + " "+"°C":"loading..."}</h1> 
         <h1><label>Pressure   :   </label>{  press != null ?press +" "+"Pa":"loading..."}</h1>
         <h1><marquee width="18%"><label>Altitude   :   </label>{  alti != null ?alti + " "+"m":"loading..."}</marquee></h1> 
        </div>
        </div>
    </div>
)
}

export default Weather