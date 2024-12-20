import { CSSProperties } from "react"

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
        flexDirection:"row", 
        justifyContent:"space-between", 
        alignItems:"start",
        paddingTop:"2%", 
        paddingRight:"12%", 
        paddingLeft:"12%"
    }

    const buttonStyles: CSSProperties = {
        aspectRatio:"1/1", 
        height:"50%", 
        maxWidth:"30%", 
        backgroundColor:"#333333", 
        borderRadius:"5px", 
        border:"3px solid #111111", 
        boxShadow: "0px 0px 8px ",
        transition: "transform 0.1s ease-in-out"
    }

    return(
        <div style={{...outerContainerStyles}}>
            <div style={{...innerContainerStyles}}>
                <div style={{...buttonStyles}} onClick={() => setScreenIndexAndLoading(0)}/>
                <div style={{...buttonStyles}} onClick={() => setScreenIndexAndLoading(1)}/>
                <div style={{...buttonStyles}} onClick={() => setScreenIndexAndLoading(2)}/>
            </div>
        </div>
    )
}