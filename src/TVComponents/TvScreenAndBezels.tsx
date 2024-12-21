import { CSSProperties } from "react"
import TVPanel from "./TVPanel"

interface TvAndBezelsProps {
    screens: JSX.Element[]
    screenIndex: number
    loading: boolean
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export default function TVScreenAndBezels(props: TvAndBezelsProps){

    const topBezelStyles: CSSProperties = {
        fontSize:"25px",
        color:"#999999", 
        paddingLeft:"10%", 
        height:"4%",
        width:"100%", 
        display:"flex", 
        justifyContent:"start", 
        alignItems:"center"
    }

    const TVContainerStyles: CSSProperties = {
        display:"flex", 
        alignItems:"center", 
        justifyContent:"center", 
        position:"relative", 
        backgroundColor:"#333333", 
        padding:"2%",
        zIndex:"2", 
        borderRadius:"30px"
    }

    const outerDivStyles: CSSProperties = {
        height:"100%", 
        width:"100%", 
        border:"2px solid #333333", 
        paddingBottom:"2.5%", 
        paddingLeft:"2.5%", 
        paddingRight:"2.5%", 
        paddingTop:"1.85%",
        position:"relative", 
        display:"flex", 
        justifyContent:"center", 
        alignItems:"center",
        backgroundColor:"#444444",
        borderRadius:"30px"
    }

    const outerCanvasStyles: CSSProperties = {
        position:"absolute", 
        height:"100%", 
        width:"100%", 
        pointerEvents:"none"
    }

    const bottomBezelStyles: CSSProperties = {
        height:"3%", 
        width:"100%", 
        display:"flex", 
        justifyContent:"center",
        alignItems:"center", 
        color:"#999999", 
        marginBottom:"0.5%"
    }

    return(
        <>
            <div style={{...topBezelStyles}}>Trinitron</div>

            <div id="tv-container" style={{...TVContainerStyles}}>
                <div id="outer-div" style={{...outerDivStyles}}>
                    <canvas id="outer-canvas" style={{...outerCanvasStyles}}/>
                    <TVPanel 
                        screenIndex={props.screenIndex} 
                        screens={props.screens} 
                        loading={props.loading} 
                        setLoading={props.setLoading}
                    />
                </div>
            </div>

            <div id="bottom-bezel-container" style={{...bottomBezelStyles}}>Sony</div>
        </>
    )
}