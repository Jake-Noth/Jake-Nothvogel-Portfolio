import { CSSProperties } from "react"
import NavButton from "./NavButton"

interface NavBarContainerProps {
    setScreenIndexAndLoading: (index: number) => void
}
  

export default function NavBarContainer({setScreenIndexAndLoading}:NavBarContainerProps){

    const outerContainerStyles: CSSProperties = {
        height:"100%", 
        width:"45%",
        backgroundColor:"#444444",
        marginLeft:"1%", 
        marginRight:"1%", 
        borderBottomRightRadius:"20px", 
        borderBottomLeftRadius:"20px", 
        display:"flex", 
        justifyContent:"center"
    }

    const innerContainerStyles: CSSProperties = {
        height:"95%", 
        width:"97%",
        backgroundColor:"#222222", 
        borderBottomRightRadius:"20px", 
        borderBottomLeftRadius:"20px", 
        display:"flex", 
        flexDirection:"column", 
        justifyContent:"space-between", 
        alignItems:"start", 
        paddingRight:"5%", 
        paddingLeft:"5%",
    }

    const navLabelStyles: CSSProperties = {
        height:"100%", 
        width:"33%", 
        display:"flex",
        color:"#888888", 
        justifyContent:"center"
    }

    const sectionStyles: CSSProperties = {
        height:"50%", 
        width:"100%", 
        display:"flex", 
        flexDirection:"row"
    }

    

    return(
        <div style={{...outerContainerStyles}}>

            <div style={{...innerContainerStyles}}>

                <div style={{height:"100%", width:"100%"}}>

                    <div style={{...sectionStyles}}>

                        <div style={{height:"100%", width:"33%"}}>
                            <NavButton index={0} setScreenIndexAndLoading={setScreenIndexAndLoading}/>
                        </div>

                        <div style={{height:"100%", width:"33%"}}>
                            <NavButton index={1} setScreenIndexAndLoading={setScreenIndexAndLoading}/>
                        </div>

                        <div style={{height:"100%", width:"33%"}}>
                            <NavButton index={2} setScreenIndexAndLoading={setScreenIndexAndLoading}/>
                        </div>

                    </div>

                    <div style={{...sectionStyles}}>
                        <div className="nav-label" style={{...navLabelStyles}}>About</div>
                        <div className="nav-label" style={{...navLabelStyles}}>Skills</div>
                        <div className="nav-label" style={{...navLabelStyles}}>Projects</div>
                    </div>
                </div>
            </div>
        </div>
    )
}