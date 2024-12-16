import { useEffect, useRef, useState } from "react";
import Screen1 from "../screens/Screen1";
import Screen2 from "../screens/Screen2";
import Screen3 from "../screens/Screen3";
import ScreenRender from "./ScreenRender";

export default function TVScreen() {

    const screenComponents = [
        <Screen1 />,
        <Screen2 />,
        <Screen3 />
    ];

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [screens, setScreens] = useState<HTMLCanvasElement[]>([]);
    const staticScreen = useRef<number | null>(null);

    if (staticScreen.current) {
        clearInterval(staticScreen.current);
    }

    function generateNoise(size: number, intensity: number) {
        const noise = new ImageData(size, size);
        for (let i = 0; i < noise.data.length; i += 4) {
            const noiseValue = Math.random() * 255 * intensity;
            noise.data[i] = noise.data[i + 1] = noise.data[i + 2] = noiseValue;
            noise.data[i + 3] = 255;
        }
        return noise;
    }

    const loopStaticScreens = () => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");
        if (canvas && ctx) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const noiseTexture = generateNoise(100,0.4)
            const offscreenCanvas = new OffscreenCanvas(noiseTexture.width, noiseTexture.height);
            const offscreenCtx = offscreenCanvas.getContext('2d');
            if (offscreenCtx) {
                offscreenCtx.putImageData(noiseTexture, 0, 0);
                const pattern = ctx.createPattern(offscreenCanvas, 'repeat');
                if (pattern) {
                    ctx.fillStyle = pattern;
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                }
            }
        }
    };

    useEffect(() => {
        staticScreen.current = setInterval(loopStaticScreens, 10);
    }, []);

    return (
        <div id="main-screen">
            <canvas id="canvas" ref={canvasRef} />
            {screens.length < screenComponents.length && (
                <ScreenRender screens={screenComponents} setScreens={setScreens} />
            )}
        </div>
    );
}


