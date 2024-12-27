import { CSSProperties, useState } from "react";
import Project1Card from "../ProjectScreens/Project1";
import Project2Card from "../ProjectScreens/Project2";

export default function Screen3() {
    const [showCards, setShowCards] = useState(true)
    const [detailedView, setDetailedView] = useState<null|JSX.Element>(null)

  const projectsContainerStyles: CSSProperties = {
    height: "100%",
    width: "100%",
    border: "3px solid black",
    marginTop: "0%",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflow: "hidden",
    
  };

  const projectsSectionStyles: CSSProperties = {
    width: "80%", // Adjust width relative to parent container
    height: "100%",
    display: "flex",
    flexDirection: "row",
    overflowX: "auto", // Enable horizontal scrolling
    gap: "1%", // Spacing between cards
    padding: "10px", // Add padding to avoid cramped edges
    touchAction:"pan-x"
  };

  const cardStyles: CSSProperties = {
    minWidth: "clamp(200px, 20vw, 500px)",
    height: "100%",
    border: "2px solid black",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightgray",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const projects = [
    <Project1Card setShowCards={setShowCards} setDetailedView ={setDetailedView}/>,
    <Project2Card setShowCards={setShowCards} setDetailedView ={setDetailedView}/>
  ];

  return (
    <div style={{ ...projectsContainerStyles }}>
      <div
        style={{
          width: "90%",
          textAlign: "center",
          fontSize: "clamp(16px, 5vw, 36px)",
          borderBottom: "4px solid black",
        }}
      >
        Projects
      </div>

      <div style={{ ...projectsSectionStyles }}>
        {showCards && projects.map((project, index) => (
          <div key={index} style={{ ...cardStyles }}>
            {project}
          </div>
        ))}

        {!showCards && detailedView}
        
      </div>
    </div>
  );
}
