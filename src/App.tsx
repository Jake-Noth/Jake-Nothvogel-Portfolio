import { CSSProperties, useRef, useState } from "react";
import Screen1 from "./screens/Screen1";
import Screen2 from "./screens/Screen2";
import Screen3 from "./screens/Screen3";
import Divider from "./TVComponents/Divider";
import Footer from "./TVComponents/Footer";
import TVScreenAndBezels from "./TVComponents/TVScreenAndBezels";

export default function App() {
  const [screenIndex, setScreenIndex] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  const screenComponents = [<Screen1 />, <Screen2 />, <Screen3 />];

  const cooldownRef = useRef(false);
  const SCROLL_COOLDOWN = 1000; // ms

  const up = () => {
    if (screenIndex !== 0) {
      setLoading(true);
      setScreenIndex((prev) => prev - 1);
    }
  };

  const down = () => {
    if (screenIndex !== screenComponents.length - 1) {
      setLoading(true);
      setScreenIndex((prev) => prev + 1);
    }
  };

  const scrollHandlerStyles: CSSProperties = {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#222222",
    flexDirection: "column",
  };

  return (
    <div
      onWheel={(e) => {
        const horizontal = Math.abs(e.deltaX);
        const vertical = Math.abs(e.deltaY);

        const MIN_VERTICAL = 5;
        const MIN_HORIZONTAL = 5;

        // Ignore mostly horizontal scrolls
        if (horizontal > MIN_HORIZONTAL && horizontal > vertical) {
          e.stopPropagation();
          return;
        }

        // Ignore small vertical wobble
        if (vertical < MIN_VERTICAL) return;

        // Check cooldown
        if (cooldownRef.current) return;

        // Fire immediately
        if (e.deltaY < 0) up();
        else down();

        // Start cooldown
        cooldownRef.current = true;
        setTimeout(() => {
          cooldownRef.current = false;
        }, SCROLL_COOLDOWN);
      }}
      style={scrollHandlerStyles}
    >
      <TVScreenAndBezels
        screens={screenComponents}
        screenIndex={screenIndex}
        loading={loading}
        setLoading={setLoading}
      />

      <Divider />

      <Footer
        setScreenIndexAndLoading={(index) => {
          if (index !== screenIndex) {
            setLoading(true);
            setScreenIndex(index);
          }
        }}
        up={up}
        down={down}
      />
    </div>
  );
}