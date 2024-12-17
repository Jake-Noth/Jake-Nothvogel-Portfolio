import TVScreen from "./TVScreen";
import { ScreensProvider } from "../screenContext";

interface TVScreenContainerProps{
    screens : JSX.Element[]
    screenIndex: number
    loading: boolean
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
}


export default function TVScreenContainer(props:TVScreenContainerProps){

    return(
        <section id="section">
            <div className="column"></div>
                <ScreensProvider>
                    <TVScreen 
                        screens={props.screens} 
                        screenIndex={props.screenIndex}
                        loading={props.loading}
                        setLoading={props.setLoading}
                    />
                </ScreensProvider>
            <div className="column"></div>
        </section>
    )
}