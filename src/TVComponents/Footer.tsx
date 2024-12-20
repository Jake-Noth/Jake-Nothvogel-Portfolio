import AirVentContainer from "./AirVentContainer";
import NavArrowContainer from "./NavArrowContainer";
import NavBarContainer from "./NavBarContainer";



export default function Footer(){
    return(
        <div style={{display:"flex", height:"11%", width:"100%", flexDirection:"row", justifyContent:"center", paddingTop:"0.5%"}}>
            
            <AirVentContainer/>
            
            <NavBarContainer/>
            
            <NavArrowContainer/>
            
        </div>
    )
}