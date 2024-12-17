import { useEffect, useRef, useState } from "react";

interface TVScreenRenderProps {
    screens: JSX.Element[];
}

export default function ScreenRender(props: TVScreenRenderProps) {

    const [screen, setScreen] = useState(0);
    const scrollTimeOut = useRef<number | null>(null);

    const up = () => {
        console.log("up")
        
    };

    const down = () => {
        console.log("down")
    };

    const handleScrollValue = (scrollValue: number) => {
        scrollValue > 0 ? up() : down();
        console.log(scrollValue)
    };

    useEffect(() => {
        const handleScroll = (event: WheelEvent) => {
            if (scrollTimeOut.current) {
                clearTimeout(scrollTimeOut.current);
            }

            scrollTimeOut.current = setTimeout(() => {
                handleScrollValue(event.deltaY);
            }, 100);
        };

        window.addEventListener("wheel", handleScroll);

        return () => {
            window.removeEventListener("wheel", handleScroll);
        };
    }, []);

    return (
        props.screens[screen]
    );
}
