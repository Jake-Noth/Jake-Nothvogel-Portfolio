import { useEffect, useRef, useState } from "react";
import Screen1 from "../screens/Screen1";
import Screen2 from "../screens/Screen2";
import Screen3 from "../screens/Screen3";
import ScreenRender from "./ScreenRender";

export default function TVScreen() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const staticScreenIntervalIDRef = useRef<number | undefined>(undefined);
    const offscreenCanvases = useRef<OffscreenCanvas[]>([])
    const [loading, setLoading] = useState(true)

    const screenComponents = [<Screen1 />, <Screen2 />, <Screen3 />];

    const loadingStaticTimer = (duration:number) =>{
        setTimeout(()=>{
            setLoading(false)
        }, duration)
    }

    const loopStaticScreen = () => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");
    
        if (canvas && ctx) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
    
            const pattern = ctx.createPattern(
                offscreenCanvases.current[Math.floor(Math.random() * offscreenCanvases.current.length)],
                "repeat"
            );
    
            if (pattern) {
                ctx.fillStyle = pattern;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                
                const noiseCanvas = offscreenCanvases.current[
                    Math.floor(Math.random() * offscreenCanvases.current.length)
                ];
                ctx.drawImage(noiseCanvas, 0, 0, canvas.width, canvas.height);
            }
        }
    };

    function generateNoise(size: number, intensity: number) {
        const noise = new ImageData(size, size);
        for (let i = 0; i < noise.data.length; i += 4) {
            const noiseValue = Math.random() * 255 * intensity;
            noise.data[i] = noise.data[i + 1] = noise.data[i + 2] = noiseValue;
            noise.data[i + 3] = 255;
        }
        return noise;
    }

    const loadNoiseCanvases = () =>{

        for(let i =0; i<30;i++){
            const noiseTexture = generateNoise(500,1)
            const offscreenCanvas = new OffscreenCanvas(
                noiseTexture.width,
                noiseTexture.height
            );
            const offscreenCtx = offscreenCanvas.getContext("2d");
            if(offscreenCtx){
                offscreenCtx.putImageData(noiseTexture, 0, 0);
                offscreenCanvases.current.push(offscreenCanvas)
            }
        }
    }

    useEffect(() => {
        loadNoiseCanvases()
        staticScreenIntervalIDRef.current = window.setInterval(loopStaticScreen,40);
        loadingStaticTimer(2000)
    }, []);

    return (
        <div id="main-screen">
            <canvas id="canvas" ref={canvasRef} style={loading ? {opacity:1}:{opacity:0.3}}/>
            {!loading ? <ScreenRender screens={screenComponents} />: null}
        </div>
    );
}
