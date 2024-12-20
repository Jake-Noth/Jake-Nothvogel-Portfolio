import { CSSProperties } from "react";
import AirVentContainer from "./AirVentContainer";
import NavArrowContainer from "./NavArrowContainer";
import NavBarContainer from "./NavBarContainer";

interface FooterProps {
    setScreenIndexAndLoading: (index: number) => void
}

const footerContainerStyles: CSSProperties = {
    display:"flex", 
    height:"11%", 
    width:"100%", 
    flexDirection:"row", 
    justifyContent:"center", 
    paddingTop:"0.5%"
}

export default function Footer(props:FooterProps){
    return(
        <div style={{...footerContainerStyles}}>
            
            <AirVentContainer/>
            
            <NavBarContainer setScreenIndexAndLoading ={props.setScreenIndexAndLoading} />
            
            <NavArrowContainer/>
            
        </div>
    )
}