import { useEffect, useRef, useState } from "react";
import Screen1 from "../screens/Screen1";
import Screen2 from "../screens/Screen2";
import Screen3 from "../screens/Screen3";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import TVScreen from "./TVScreen";

export default function TV() {
  const [screenIndex, setScreenIndex] = useState<number>(0)
  const [loading, setLoading] = useState(true)

  const screenComponents = [<Screen1 />, <Screen2 />, <Screen3 />];

  const up = () =>{
    if(screenIndex != 0){
      setLoading(true)
      setScreenIndex((prev) => prev - 1)
    }
  }

  const down = () =>{
    if(screenIndex != screenComponents.length-1){
      setLoading(true)
      setScreenIndex((prev) => prev + 1)
    }
  }


  return (
    
        <ReactScrollWheelHandler
          upHandler={up}
          downHandler={down} 
          style={{height:"100%", width:"100%", display:"flex", alignItems:"center", backgroundColor:"#222222", flexDirection:"column"}}>
            
          <div style={{fontSize:"25px",color:"#999999", paddingLeft:"10%", height:"4%",width:"100%", display:"flex", justifyContent:"start", alignItems:"center"}}>Trinitron</div>

          <div id="tv-container" style={{display:"flex", alignItems:"center", justifyContent:"center", position:"relative", backgroundColor:"#333333", padding:"2%",zIndex:"2", borderRadius:"30px"}}>

            
            <div id="outer-div" style={{height:"100%", width:"100%", border:"2px solid #333333", padding:"2.5%",position:"relative", display:"flex", justifyContent:"center", alignItems:"center",backgroundColor:"#444444",borderRadius:"30px"}}>
              <canvas id="outer-canvas" style={{position:"absolute", height:"100%", width:"100%", pointerEvents:"none"}}/>
              <TVScreen screenIndex={screenIndex} screens={screenComponents} loading={loading} setLoading={setLoading}/>
            </div>
            

          </div>

        

        </ReactScrollWheelHandler>
    
    
      
  );
}
