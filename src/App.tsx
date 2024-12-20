import { useState } from "react";
import Screen1 from "./screens/Screen1";
import Screen2 from "./screens/Screen2";
import Screen3 from "./screens/Screen3";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import Footer from "./TVComponents/footer";

import TvScreenAndBezels from "./TVComponents/TvScreenAndBezels";
import Divider from "./TVComponents/Divider";

export default function App() {
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
          timeout={200} 
          style={{height:"100%", width:"100%", display:"flex", alignItems:"center", backgroundColor:"#222222", flexDirection:"column"}}>

          <TvScreenAndBezels screens={screenComponents} screenIndex={screenIndex} loading={loading} setLoading={setLoading}/>  
          
          <Divider/>

          <Footer/>

        </ReactScrollWheelHandler>
  );
}
