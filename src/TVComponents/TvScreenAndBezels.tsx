import TVPanel from "./TVPanel"

interface TvAndBezelsProps {
    screens: JSX.Element[]
    screenIndex: number
    loading: boolean
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export default function TvScreenAndBezels(props: TvAndBezelsProps){
    return(
        <>
            <div style={{fontSize:"25px",color:"#999999", paddingLeft:"10%", height:"4%",width:"100%", display:"flex", justifyContent:"start", alignItems:"center"}}>Trinitron</div>

            <div id="tv-container" style={{display:"flex", alignItems:"center", justifyContent:"center", position:"relative", backgroundColor:"#333333", padding:"2%",zIndex:"2", borderRadius:"30px"}}>
                <div id="outer-div" style={{height:"100%", width:"100%", border:"2px solid #333333", padding:"2.5%",position:"relative", display:"flex", justifyContent:"center", alignItems:"center",backgroundColor:"#444444",borderRadius:"30px"}}>
                <canvas id="outer-canvas" style={{position:"absolute", height:"100%", width:"100%", pointerEvents:"none"}}/>
                <TVPanel screenIndex={props.screenIndex} screens={props.screens} loading={props.loading} setLoading={props.setLoading}/>
                </div>
            </div>

            <div style={{height:"3%", width:"100%", display:"flex", justifyContent:"center", fontSize:"25px", color:"#999999", marginBottom:"0.5%"}}>Sony</div>
        </>
    )
}