import html2canvas from "html2canvas";
import { useEffect, useRef } from "react";

export default function Home() {
  const captureRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  return (
    <>

      <header id="header"></header>

      <section id="section">
        <div className="column"></div>

        <div id="main-screen" ref={captureRef}>
          <img id="screen-image" />
        </div>

        <div className="column"></div>
      </section>

      <footer id="footer"></footer>
    </>
  );
}
