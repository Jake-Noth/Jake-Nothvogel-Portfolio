import { CSSProperties } from "react";

interface NavButtonProps {
  setScreenIndexAndLoading: (index: number) => void;
  index: number;
}

export default function NavButton({ setScreenIndexAndLoading, index }: NavButtonProps) {
  const buttonStyles: CSSProperties = {
    aspectRatio: "1/1",
    height: "100%",
    maxWidth: "100%",
    backgroundColor: "#333333",
    borderRadius: "5px",
    border: "3px solid #111111",
    boxShadow: "0px 0px 8px",
    transition: "transform 0.1s ease-in-out, box-shadow 0.1s ease-in-out",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "4%",
    cursor: "pointer",
  };

  const innerButtonStyles: CSSProperties = {
    height: "20%",
    width: "20%",
    backgroundColor: "#888888",
    borderRadius: "10px",
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div
        style={buttonStyles}
        onClick={() => setScreenIndexAndLoading(index)}
        onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.7)")}
        onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <div style={innerButtonStyles} />
      </div>
    </div>
  );
}
