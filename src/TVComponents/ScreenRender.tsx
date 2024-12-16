import { useEffect, useRef, useState } from "react";
import html2canvas from "html2canvas";

interface TVScreenRenderProps {
    screens: JSX.Element[];
    setScreens: React.Dispatch<React.SetStateAction<HTMLCanvasElement[]>>
}

export default function ScreenRender(props: TVScreenRenderProps) {
    const [counter, setCounter] = useState(0);
    const renderContainerRef = useRef<HTMLDivElement | null>(null);
    const [screens, setScreens] = useState<HTMLCanvasElement[]>([])

    const captureScreen = () => {
        if (renderContainerRef.current) {
            html2canvas(renderContainerRef.current).then((canvas) => {
                if (canvas) {
                    if (counter < props.screens.length - 1) {
                        setScreens((prevScreens) => [...prevScreens, canvas]);
                        setCounter((prevCounter) => prevCounter + 1);
                        console.log('Captured and moving to next screen');
                    } else {
                        setTimeout(() => {
                            const tempScreens = [...screens, canvas]
                            props.setScreens(tempScreens)
                            setCounter((prevCounter) => prevCounter + 1);
                            console.log('just updated screens')
                        }, 2000);
                    }
                }
            });
        }
    };

    useEffect(() => {
        if (counter < props.screens.length) {
            captureScreen();
        }
    }, [counter]);

    return (
        <div
            id="renderContainer"
            ref={renderContainerRef}
            style={{ height: "100%", width: "100%", borderRadius:"30px" }}
        >
            {counter < props.screens.length ? props.screens[counter] : null}
        </div>
    );
}
