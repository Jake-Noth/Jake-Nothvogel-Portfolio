import { CSSProperties } from "react"



export default function NavArrowContainer(){


    const outerContainerStyles: CSSProperties = {
        height:"100%", 
        width:"25%",
        backgroundColor:"#444444",
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

    return(
        <div style={{...outerContainerStyles}}>
            <div style={{...innerContainerStyles}}>

            </div>
        </div>
    )
}