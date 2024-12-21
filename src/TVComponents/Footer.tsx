import { CSSProperties } from "react";
import AirVentContainer from "./AirVentContainer";
import NavArrowContainer from "./NavArrowContainer";
import NavBarContainer from "./NavBarContainer";

interface FooterProps {
    setScreenIndexAndLoading: (index: number) => void;
    up: () => void;
    down: () => void;
}

export default function Footer(props:FooterProps){

    const footerContainerStyles: CSSProperties = {
        display:"flex", 
        height:"11%", 
        width:"100%", 
        flexDirection:"row", 
        justifyContent:"center", 
        paddingTop:"0.5%"
    }
    
    return(
        <div style={{...footerContainerStyles}}>
            
            <AirVentContainer/>
            
            <NavBarContainer setScreenIndexAndLoading ={props.setScreenIndexAndLoading} />
            
            <NavArrowContainer up={props.up} down={props.down}/>
            
        </div>
    )
}