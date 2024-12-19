import { useState } from "react";
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
          style={{height:"100%", width:"100%", display:"flex", alignItems:"center", justifyContent:"center", backgroundColor:"#333333"}}>

          <div style={{height:"80%", width:"80%", display:"flex", alignItems:"center", justifyContent:"center", backgroundColor:"#444444", padding:"4%"}}>

            <div style={{height:"100%", width:"100%", border:"2px solid black", padding:"7%"}}>
              <TVScreen screenIndex={screenIndex} screens={screenComponents} loading={loading} setLoading={setLoading}/>
            </div>
            

          </div>

        

        </ReactScrollWheelHandler>
    
    
      
  );
}
