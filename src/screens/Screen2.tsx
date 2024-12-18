import { CSSProperties } from "react";






export default function Screen2(){

    const sharedIconStyles: CSSProperties = {
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height:"100%",
        width:"50%",
      };
    
      const sharedIconContainerStyles: CSSProperties = {
        height:"25%", 
        width:"100%", 
        marginTop:"10%", 
        display:"flex", 
        flexDirection:"row"
      }


    return(
        <div
            style={{
                height:"100%",
                width:"100%",
                paddingTop:"10%",
                paddingBottom:"10%",
                display:"flex",
                flexDirection:"row"
            }}
        >
            
            <div
                style={{
                    height:"100%",
                    width:"50%",
                    borderRight:"0.5px solid black",
                    display:"flex",
                    alignItems:"center",
                    flexDirection:"column",
                    fontSize:"30px"
                }}
            >
                skills
                <div style={{...sharedIconContainerStyles}}>
                    <div style={{...sharedIconStyles, backgroundImage: `url('/screen2/typescriptIcon.svg')`}}></div>
                    <div style={{...sharedIconStyles, backgroundImage: `url('/screen2/htmlIcon.webp')`}}></div>
                </div>
                <div style={{...sharedIconContainerStyles}}>
                    <div style={{...sharedIconStyles, backgroundImage: `url('/screen2/javaIcon.webp')`}}></div>
                    <div style={{...sharedIconStyles, backgroundImage: `url('/screen2/pythonIcon.webp')`}}></div>
                </div>
                <div style={{...sharedIconContainerStyles}}>
                    <div style={{...sharedIconStyles, backgroundImage: `url('/screen2/reactIcon.png')`}}></div>
                    <div style={{...sharedIconStyles, backgroundImage: `url('/screen2/sqlIcon.png')`}}></div>
                </div>
            </div>

            <div
                style={{
                    height:"100%",
                    width:"50%",
                    borderLeft:"0.5px solid black",
                    display:"flex",
                    justifyContent:"center",
                }}
            >
                Experience
            </div>
        </div>
    )
}