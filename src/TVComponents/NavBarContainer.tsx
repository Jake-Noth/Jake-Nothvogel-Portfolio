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
        width:"98.5%",
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
        alignItems:"center", 
        justifyContent:"center"
    }

    const sectionStyles: CSSProperties = {
        height:"50%", 
        width:"100%", 
        display:"flex", 
        flexDirection:"row"
    }

    const switchPage1 = () =>{
        setScreenIndexAndLoading(0)
    }

    const switchPage2 = () =>{
        setScreenIndexAndLoading(1)
    }

    const switchPage3 = () =>{
        setScreenIndexAndLoading(2)
    }

    return(
        <div style={{...outerContainerStyles}}>

            <div style={{...innerContainerStyles}}>

                <div style={{height:"100%", width:"100%"}}>

                    <div style={{...sectionStyles}}>
                        <div className="nav-label" style={{...navLabelStyles}}>About</div>
                        <div className="nav-label" style={{...navLabelStyles}}>Skills</div>
                        <div className="nav-label" style={{...navLabelStyles}}>Projects</div>
                    </div>

                    <div style={{...sectionStyles}}>

                        <div style={{height:"100%", width:"33%"}}>
                            <NavButton  onClickFunction={switchPage1}/>
                        </div>

                        <div style={{height:"100%", width:"33%"}}>
                            <NavButton onClickFunction={switchPage2}/>
                        </div>

                        <div style={{height:"100%", width:"33%"}}>
                            <NavButton onClickFunction={switchPage3}/>
                        </div>

                    </div>

                    
                </div>
            </div>
        </div>
    )
}