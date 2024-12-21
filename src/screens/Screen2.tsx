import { CSSProperties } from "react";

export default function Screen2() {
  const iconImages = [
    "url('/screen2images/typescriptIcon.svg')",
    "url('/screen2images/htmlIcon.webp')",
    "url('/screen2images/reactIcon.png')",
    "url('/screen2images/javaIcon.webp')",
    "url('/screen2images/pythonIcon.webp')",
    "url('/screen2images/sqlIcon.png')",
  ];

  const screen2ContainerStyles:CSSProperties = {
    height: "100%",
    width: "100%",
    border: "3px solid black",
    borderRadius: "20px",
    flexDirection: "column",
    display: "flex",
    alignItems: "center",
  }

  const skillsContainerStyles:CSSProperties = {
    height: "10%",
    width: "90%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "clamp(16px, 5vw, 36px)",
    borderBottom: "4px solid black",
  }

  const iconGridStyles: CSSProperties = {
    height: "50%",
    width: "100%",
    display: "grid",
    gridTemplateRows: "repeat(2, 1fr)",
    gridTemplateColumns: "repeat(3, 1fr)",
  };

  const gridCellStyles: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const iconContainerStyles: CSSProperties = {
    aspectRatio: "1/1",
    height: "60%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "contain",
  };

  const experienceContainerStyles: CSSProperties = {
    height: "40%",
    width: "90%",
    borderTop: "4px solid black",
    paddingLeft: "2%",
    fontSize: "clamp(16px, 5vw, 36px)",
  }

  const experienceHeaderStyles: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    marginBottom: "2%",
  }

  const subHeadingStyles: CSSProperties = {
    fontSize: "clamp(14px, 2.95vw, 28px)",
    marginBottom: "1%",
  }

  const ulStyles: CSSProperties = {
    fontSize: "clamp(12px, 1.7vw, 25px)",
    paddingLeft: "2%"
  }

  return (
    <div style={{...screen2ContainerStyles}}>

      <div style={{...skillsContainerStyles}}>
        Skills
      </div>

      <div style={{ ...iconGridStyles }}>
        {[...Array(6)].map((_, index) => (
          <div key={index} style={{ ...gridCellStyles }}>
            <div
              style={{
                ...iconContainerStyles,
                backgroundImage: iconImages[index],
              }}
            />
          </div>
        ))}
      </div>
      
      <div style={{...experienceContainerStyles}}>

        <div style={{...experienceHeaderStyles}}>
          Experience
        </div>

        <div style={{...subHeadingStyles}}>
          Freelance Software Validation - AI Training
        </div>

        <ul style={{...ulStyles}}>
            <li>
                Designed and optimized prompts to enhance AI model performance and
                contextual understanding.
            </li>
            <li>
                Validated and tested AI-generated outputs for accuracy, consistency, and
                usability.
            </li>
            <li>
                Managed dependency acquisition and testing environments to verify code
                outputs.
            </li>
        </ul>
      </div>
    </div>
  );
}
