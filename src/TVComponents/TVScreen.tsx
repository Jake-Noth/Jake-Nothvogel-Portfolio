import { useEffect, useRef, useState } from "react";
import Screen1 from "../screens/Screen1";
import Screen2 from "../screens/Screen2";
import Screen3 from "../screens/Screen3";
import ScreenRender from "./ScreenRender";

export default function TVScreen() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [screens, setScreens] = useState<HTMLCanvasElement[]>([]);
    const staticScreenIntervalIDRef = useRef<number | undefined>(undefined);
    const [canvasReady, setCanvasReady] = useState(false);

    const screenComponents = [<Screen2 />, <Screen1 />, <Screen3 />];

    const loopStaticScreens = () => {
        const img = new Image();
        img.src = "../../public/Troll1.png";
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");
        img.onload = () => {
            if (canvas && ctx) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                const noiseTexture = generateNoise(500, 0.4);
                const offscreenCanvas = new OffscreenCanvas(
                    noiseTexture.width,
                    noiseTexture.height
                );
                const offscreenCtx = offscreenCanvas.getContext("2d");
                if (offscreenCtx) {
                    offscreenCtx.putImageData(noiseTexture, 0, 0);
                    const pattern = ctx.createPattern(offscreenCanvas, "repeat");
                    if (pattern) {
                        ctx.fillStyle = pattern;
                        ctx.fillRect(0, 0, canvas.width, canvas.height);
                        if (!canvasReady) {
                            setCanvasReady(true);
                        }
                    }
                }
            }
        };
    };

    useEffect(() => {
        if (screens.length !== screenComponents.length) {
            staticScreenIntervalIDRef.current = window.setInterval(loopStaticScreens, 10);
        } else {
            if (staticScreenIntervalIDRef.current !== undefined) {
                clearInterval(staticScreenIntervalIDRef.current);
                staticScreenIntervalIDRef.current = undefined;
            }
        }
    }, [screens.length]);

    function generateNoise(size: number, intensity: number) {
        const noise = new ImageData(size, size);
        for (let i = 0; i < noise.data.length; i += 4) {
            const noiseValue = Math.random() * 255 * intensity;
            noise.data[i] = noise.data[i + 1] = noise.data[i + 2] = noiseValue;
            noise.data[i + 3] = 255;
        }
        return noise;
    }

    return (
        <div id="main-screen">
            <canvas id="canvas" ref={canvasRef} />
            {canvasReady && (
                <ScreenRender screens={screenComponents} setScreens={setScreens} />
            )}
        </div>
    );
}
