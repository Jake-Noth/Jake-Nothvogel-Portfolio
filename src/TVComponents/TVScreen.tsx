import { useContext, useEffect, useRef, useState } from "react";
import Screen1 from "../screens/Screen1";
import Screen2 from "../screens/Screen2";
import Screen3 from "../screens/Screen3";
import ScreenRender from "./ScreenRender";
import ScreensContext from "../screenContext";



export default function TVScreen() {

    const screenComponents = [
        <Screen1/>,
        <Screen2/>,
        <Screen3/>
    ]

    const canvasRef = useRef<HTMLCanvasElement>(null)
    const screensContext = useContext(ScreensContext)
    const screens = screensContext?.screens ?? [];
    console.log('parent')

    const drawBlankScreen = () => {
        const canvas = canvasRef.current
        if(canvas){
            const ctx = canvas.getContext('2d')
            if(ctx){
                ctx.fillStyle = 'black'
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            }
        }
    }

    useEffect(()=>{
        //drawBlankScreen()
    },[])

    return (
        <div id="main-screen">
            <canvas id="canvas" ref={canvasRef} />
            {screens.length < screenComponents.length && (
                <ScreenRender screens={screenComponents} />
            )}
        </div>
    );
}
