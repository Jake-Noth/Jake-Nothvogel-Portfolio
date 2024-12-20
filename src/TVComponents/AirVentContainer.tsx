import { CSSProperties } from "react"


export default function AirVentContainer(){

    const cutOutStyles: CSSProperties = {
        height:"3%", 
        width:"100%", 
        background:"#444444", 
        borderRadius:"20px"
    }

    const outerDivStyles: CSSProperties = {
        height:"100%", 
        width:"20%",
        backgroundColor:"#444444", 
        borderBottomRightRadius:"20px", 
        borderBottomLeftRadius:"20px", 
        display:"flex", 
        justifyContent:"center"
    }

    const innerDivStyles: CSSProperties = {
        height:"95%", 
        width:"97%",
        backgroundColor:"#222222", 
        borderBottomRightRadius:"20px", 
        borderBottomLeftRadius:"20px", 
        display:"flex",
        flexDirection:"column", 
        alignItems:"center",
        justifyContent:"space-between", 
        paddingTop:"1%", 
        paddingBottom:"2%"
    }

    const cutOutsContainerStyles: CSSProperties = {
        width:"75%",
        height:"90%", 
        backgroundColor:"#222222", 
        display:"flex", 
        flexDirection:"column", 
        justifyContent:"space-between"
    }

    return (
        <div style={{...outerDivStyles}}>
            <div style={{...innerDivStyles}}>
                <div style={{...cutOutsContainerStyles}}>
                  <div style={{...cutOutStyles}}/>
                  <div style={{...cutOutStyles}}/>
                  <div style={{...cutOutStyles}}/>
                  <div style={{...cutOutStyles}}/>
                  <div style={{...cutOutStyles}}/>
                  <div style={{...cutOutStyles}}/>
                  <div style={{...cutOutStyles}}/>
                  <div style={{...cutOutStyles}}/>
                  <div style={{...cutOutStyles}}/>
                </div>
            </div>
        </div>
    )
}