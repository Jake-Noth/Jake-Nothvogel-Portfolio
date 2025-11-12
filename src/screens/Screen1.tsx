import { CSSProperties } from "react";

export default function Screen1() {

    const screen1ContainerStyles: CSSProperties = {
        height: "100%",
        width: "100%",
        border: "3px solid black",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "row"
    }

    const leftHalfDivStyles: CSSProperties = {
        height: "100%",
        width: "60%",
        display: "flex",
        flexDirection: "column"
    }

    const introContainerStyles: CSSProperties = {
        height: "30%",
        width: "100%",
        display: "flex",
        alignItems: "end",
        justifyContent: "center"
    }

    const descriptionContainerStyles: CSSProperties = {
        height: "30%",
        width: "100%",
        display: "flex",
        alignItems: "start",
        justifyContent: "center",
        paddingLeft: "1%",
        paddingRight: "2%",
        paddingTop: "2%",
        fontSize: "clamp(0.8rem, 2.5vw, 1.9rem)"
    }

    const iconsContainerStyles: CSSProperties = {
        height: "40%",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "6%"
    }

    const linkIconContainerStyles: CSSProperties = {
        width: "25%",
        height: "25%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "contain",
        cursor: "pointer"
    }

    const rightHalfDivStyles: CSSProperties = {
        height: "100%",
        width: "40%",
        display: "flex",
        flexDirection: "column",
        paddingTop: "2%",
        paddingBottom: "2%",
        paddingRight: "2%"
    }

    const imageContainerStyles: CSSProperties = {
        height: "100%",
        width: "auto",
        maxWidth: "100%",
        border: "2px solid black",
        backgroundImage: "url('screen1images/picture.jpeg')",
        borderRadius: "100px",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
    };

    return (
        <div style={{ ...screen1ContainerStyles }}>
            <div style={{ ...leftHalfDivStyles }}>
                <div id="screen1-intro" style={{ ...introContainerStyles }}>Hi, I'm Jake</div>
                <div id="screen1-description" style={{ ...descriptionContainerStyles }}>
                    I’m a full-stack web developer with a degree in computer
                    science from Illinois State University. I am based in the
                    Chicago area and looking for opportunities in the city of Chicago.
                </div>
                <div style={{ ...iconsContainerStyles }}>
                    <a href="https://drive.google.com/file/d/1U0u4jDkyNNP5y_SVhH2A7ke20CbAXMq2/view" target="_blank" rel="noopener noreferrer" style={{ ...linkIconContainerStyles, backgroundImage: "url('screen1images/resume.png')", display: "block" }}></a>
                    <a href="https://www.linkedin.com/in/jacob-nothvogel-45452638a/" target="_blank" rel="noopener noreferrer" style={{ ...linkIconContainerStyles, backgroundImage: "url('screen1images/linkedinIcon.svg')", display: "block" }}></a>
                    <a href="https://github.com/Jake-Noth" target="_blank" rel="noopener noreferrer" style={{ ...linkIconContainerStyles, backgroundImage: "url('screen1images/githubIcon.svg')", display: "block" }}></a>
                </div>
            </div>
            <div style={{ ...rightHalfDivStyles }}>
                <div style={{ ...imageContainerStyles }}></div>
            </div>
        </div>
    );
}





