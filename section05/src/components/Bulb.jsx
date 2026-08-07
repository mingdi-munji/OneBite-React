import { useState } from "react";
const Bulb = () => {
  const [light,setLight] = useState("off");
  console.log(light);
    return(
      <div> 
        {light==="off"? ( 
          <h1 style={{backgroundColor:"gray"}}>Off</h1>
        ):(
          <h1 style={{backgroundColor:"orange"}}>On</h1>
        )}
        <button onClick={() => {
          setLight(light==="off"?"on":"off");
        }}> {light=="off"?"켜기":"끄기"}</button>
      </div>
      
    );
  };

export default Bulb;