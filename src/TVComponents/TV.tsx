import { useState } from "react";
import Screen1 from "../screens/Screen1";
import Screen2 from "../screens/Screen2";
import Screen3 from "../screens/Screen3";
import TVFooter from "./TVFooter";
import TVHeader from "./TVHeader";
import TVScreenContainer from "./TVScreenContainer";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";

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
        style={{height:"100%", width:"100%"}}
      >
        <TVHeader/>

        <TVScreenContainer 
          screens={screenComponents} 
          screenIndex={screenIndex} 
          loading={loading} 
          setLoading={setLoading}
          />

        <TVFooter up={up} down={down}/>
      </ReactScrollWheelHandler>
  );
}
