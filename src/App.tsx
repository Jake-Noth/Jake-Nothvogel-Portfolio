import { CSSProperties, useState } from "react";
import Screen1 from "./screens/Screen1";
import Screen2 from "./screens/Screen2";
import Screen3 from "./screens/Screen3";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import Divider from "./TVComponents/Divider";
import Footer from "./TVComponents/Footer";
import TVScreenAndBezels from "./TVComponents/TVScreenAndBezels";

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

  const setScreenIndexAndLoading = (index:number) =>{
    setLoading(true)
    setScreenIndex(index)
  }

  const scrollHandlerStyles: CSSProperties = {
    height:"100%", 
    width:"100%", 
    display:"flex", 
    alignItems:"center", 
    backgroundColor:"#222222", 
    flexDirection:"column"
  }

  return (
        <ReactScrollWheelHandler
          upHandler={up}
          downHandler={down}
          timeout={200} 
          style={{...scrollHandlerStyles}}>

          <TVScreenAndBezels 
            screens={screenComponents} 
            screenIndex={screenIndex} 
            loading={loading} 
            setLoading={setLoading}
          />  
          
          <Divider/>

          <Footer 
            setScreenIndexAndLoading={setScreenIndexAndLoading}
            up={up}
            down={down}
          />

        </ReactScrollWheelHandler>
  );
}
