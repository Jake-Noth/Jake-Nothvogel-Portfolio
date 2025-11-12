import { CSSProperties } from "react";
import NavButton from "./NavButton";

interface NavArrowContainerProps {
  up: () => void;
  down: () => void;
}

export default function NavArrowContainer(props: NavArrowContainerProps) {
  const outerContainerStyles: CSSProperties = {
    height: "100%",
    width: "25%",
    backgroundColor: "#444444",
    borderBottomRightRadius: "20px",
    borderBottomLeftRadius: "20px",
    display: "flex",
    justifyContent: "center",
  };

  const innerContainerStyles: CSSProperties = {
    height: "95%",
    width: "97%",
    backgroundColor: "#222222",
    borderBottomRightRadius: "20px",
    borderBottomLeftRadius: "20px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "start",
    paddingTop: "2%",
    paddingRight: "12%",
    paddingLeft: "12%",
  };

  const sectionStyles: CSSProperties = {
    height: "50%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const navLabelStyles: CSSProperties = {
    height: "100%",
    width: "50%",
    display: "flex",
    color: "#888888",
    alignItems: "center",
    justifyContent: "center",
  };

  const arrowDivStyles: CSSProperties = {
    aspectRatio: "1/1",
    height: "100%",
    maxWidth: "100%",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <div style={{ ...outerContainerStyles }}>
      <div style={{ ...innerContainerStyles }}>
        <div style={{ height: "100%", width: "100%" }}>
          <div style={{ ...sectionStyles, gap:"2%" }}>
            <div className="nav-label" style={{ ...navLabelStyles }}>
              <div
                style={{
                  ...arrowDivStyles,
                  backgroundImage: "url('NavArrowButtonPictures/upArrow.svg')",
                }}
              />
            </div>
            <div className="nav-label" style={{ ...navLabelStyles }}>
              <div
                style={{
                  ...arrowDivStyles,
                  backgroundImage: "url('NavArrowButtonPictures/upArrow.svg')",
                  transform: "rotate(180deg)",
                }}
              />
            </div>
          </div>

          <div style={{ ...sectionStyles, gap:"2%" }}>
            <div style={{ height: "100%", width: "50%" }}>
              <NavButton onClickFunction={props.up} />
            </div>
            <div style={{ height: "100%", width: "50%" }}>
              <NavButton onClickFunction={props.down} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
