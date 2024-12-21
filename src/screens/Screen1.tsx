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
        width: "50%", 
        display:"flex", 
        flexDirection:"column"
    }

    const introContainerStyles: CSSProperties = {
        height:"30%", 
        width:"100%", 
        display:"flex", 
        alignItems:"end", 
        justifyContent:"center"
    }

    const descriptionContainerStyles: CSSProperties = {
        height:"30%", 
        width:"100%", 
        display:"flex", 
        alignItems:"start", 
        justifyContent:"center", 
        paddingLeft:"1%", 
        paddingRight:"2%", 
        paddingTop:"2%", 
        fontSize:"clamp(0.8rem, 2.5vw, 1.9rem)"
    }

    const iconsContainerStyles: CSSProperties = {
        height:"40%", 
        width:"100%", 
        display:"flex", 
        flexDirection:"row", 
        justifyContent:"center", 
        alignItems:"center", 
        gap: "1%"
    }

    const linkIconContainerStyles: CSSProperties = {
        width:"30%",
        height:"40%",
        backgroundRepeat:"no-repeat", 
        backgroundPosition:"center", 
        backgroundSize:"contain"
    }


    const rightHalfDivStyles: CSSProperties = {
        height: "100%", 
        width: "50%", 
        display: "flex", 
        flexDirection: "column", 
        paddingTop:"2%", 
        paddingBottom:"2%", 
        paddingRight:"2%"
    }

    const imageContainerStyles: CSSProperties = {
        height: "100%",
        width: "auto",
        maxWidth: "100%",
        border: "2px solid black",
        backgroundImage: "url('/screen1images/picture.jpeg')",
        borderRadius: "100px",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
    };

    return (
        <div style={{...screen1ContainerStyles}}>
            <div style={{...leftHalfDivStyles}}>
                <div id="screen1-intro" style={{...introContainerStyles}}>Hi, I'm Jake</div>
                <div id="screen1-description" style={{...descriptionContainerStyles}}>

                           I’m a full-stack web developer with a degree in computer 
                            science from Illinois State University. I am based in the 
                            Chicago area and looking for opportunities in the city of Chicago.
                </div>
                <div style={{...iconsContainerStyles}}>
                    <div style={{...linkIconContainerStyles, backgroundImage:"url('/screen1images/githubIcon.svg')"}}></div>
                    <div style={{...linkIconContainerStyles, backgroundImage:"url('/screen1images/linkedinIcon.svg')"}}></div>
                    <div style={{...linkIconContainerStyles, backgroundImage:"url('/screen1images/resume.png')"}}></div>
                </div>
            </div>
            <div style={{...rightHalfDivStyles}}>
                <div style={{ ...imageContainerStyles }}></div>
            </div>
        </div>
    );
}





