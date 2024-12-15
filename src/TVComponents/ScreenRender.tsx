import { useContext, useEffect, useRef, useState } from "react";
import html2canvas from "html2canvas";
import ScreensContext from "../screenContext";

interface TVScreenRenderProps {
    screens: JSX.Element[];
}

export default function ScreenRender(props: TVScreenRenderProps) {
    const [counter, setCounter] = useState(0);
    const renderContainerRef = useRef<HTMLDivElement | null>(null);

    const screensContext = useContext(ScreensContext);
    const { addScreen } = screensContext || {};

    const captureScreen = () => {
        if (addScreen && renderContainerRef.current) {
            console.log('Capturing screen...');
            html2canvas(renderContainerRef.current).then((canvas) => {
                if (canvas) {
                    if (counter < props.screens.length - 1) {
                        addScreen(canvas);
                        setCounter((prevCounter) => prevCounter + 1);
                        console.log('Captured and moving to next screen');
                    } else {
                        setTimeout(() => {
                            addScreen(canvas);
                            setCounter((prevCounter) => prevCounter + 1);
                            console.log('Captured last screen after delay');
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
            style={{ height: "100%", width: "100%" }}
        >
            {counter < props.screens.length ? props.screens[counter] : null}
        </div>
    );
}
