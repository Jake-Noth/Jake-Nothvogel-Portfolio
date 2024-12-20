import { useEffect, useRef, useState } from "react";

interface TVPanelProps{
    screens : JSX.Element[]
    screenIndex: number
    loading: boolean
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
}


export default function TVPanel(props:TVPanelProps) {
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

    const drawLines = () => {
        const outerDiv = document.getElementById("outer-div")!;
        const innerDiv = document.getElementById("main-screen")!;
        const canvas = document.getElementById("outer-canvas") as HTMLCanvasElement;
        const ctx = canvas.getContext("2d");
    
        if (!ctx) return;
    
        // Set canvas dimensions
        canvas.width = outerDiv.offsetWidth;
        canvas.height = outerDiv.offsetHeight;
    
        // Calculate the corners of outerDiv relative to its parent
        const outerCorners = [
            { x: 0, y: 0 }, // Top-left corner
            { x: outerDiv.offsetWidth, y: 0 }, // Top-right corner
            { x: outerDiv.offsetWidth, y: outerDiv.offsetHeight }, // Bottom-right corner
            { x: 0, y: outerDiv.offsetHeight }, // Bottom-left corner
        ];
    
        let x = (outerDiv.offsetWidth/2) - (innerDiv.offsetWidth/2)
        let y = (outerDiv.offsetHeight/2) - (innerDiv.offsetHeight/2)
        const innerCorners = [
            { x: x+30, y: y+30 }, // Top-left corner
            { x: x + innerDiv.offsetWidth -30, y: y +30 }, // Top-right corner
            { x: innerDiv.offsetWidth, y: innerDiv.offsetHeight }, // Bottom-right corner
            { x: x +30, y: y+ innerDiv.offsetHeight -30 }, // Bottom-left corner
        ];
    
        
    
        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.lineWidth =20
        ctx.lineCap = 'round'
    
        // Draw lines
        ctx.beginPath();
        ctx.moveTo(outerCorners[0].x, outerCorners[0].y);
        ctx.lineTo(innerCorners[0].x, innerCorners[0].y);
        ctx.moveTo(outerCorners[1].x, outerCorners[1].y);
        ctx.lineTo(innerCorners[1].x, innerCorners[1].y);
    
        ctx.moveTo(outerCorners[2].x, outerCorners[2].y);
        ctx.lineTo(innerCorners[2].x, innerCorners[2].y);
        ctx.moveTo(outerCorners[3].x, outerCorners[3].y);
        ctx.lineTo(innerCorners[3].x, innerCorners[3].y);
    
        ctx.strokeStyle = "#333333";
        ctx.stroke();
    };
    
    

    useEffect(() => {
        window.addEventListener('resize', drawLines)
        drawLines()
        loadNoiseCanvases()
        staticScreenIntervalIDRef.current = window.setInterval(loopStaticScreen,40);
        loadingStaticTimer(1000)
        setTimeout(()=>{
            setRenderScreen(true)
        },200)
        
        return () =>{
            clearInterval(staticScreenIntervalIDRef.current)
            window.removeEventListener('resize', drawLines)
        }
    }, []);

    return (
        
        <div id="main-screen">
            <canvas id="canvas" ref={canvasRef} style={props.loading ? {opacity:1}:{opacity:0.2}}/>
            {renderScreen ? props.screens[props.screenIndex]: null}
        </div>
    );
}
