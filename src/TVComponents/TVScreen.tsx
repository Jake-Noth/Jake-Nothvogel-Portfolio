import { useEffect, useRef, useState } from "react";
import ScreenRender from "./ScreenRender";

interface TVScreenProps{
    screens : JSX.Element[]
    screenIndex: number
    loading: boolean
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
}


export default function TVScreen(props:TVScreenProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const staticScreenIntervalIDRef = useRef<number | undefined>(undefined);
    const offscreenCanvases = useRef<OffscreenCanvas[]>([])
    const [firstRender, setFirstRender] = useState(true)
    const [renderScreen, setRenderScreen] = useState(false)
    

    const loadingStaticTimer = (duration:number) =>{
        setTimeout(()=>{
            props.setLoading(false)
            setFirstRender(false)
        }, duration)
    }

    if(props.loading && !firstRender){
        loadingStaticTimer(300)
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
        loadingStaticTimer(1000)
        setTimeout(()=>{
            setRenderScreen(true)
        },200)
        
        return () =>{
            clearInterval(staticScreenIntervalIDRef.current)
        }
    }, []);

    return (
        
        <div id="main-screen">
            <canvas id="canvas" ref={canvasRef} style={props.loading ? {opacity:1}:{opacity:0.2}}/>
            {renderScreen ? props.screens[props.screenIndex]: null}
        </div>
    );
}
