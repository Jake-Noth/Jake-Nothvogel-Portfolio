import TVScreen from "./TVScreen";
import { ScreensProvider } from "../screenContext";



export default function TVScreenContainer(){

    return(
        <section id="section">
            <div className="column"></div>
                <ScreensProvider>
                    <TVScreen/>
                </ScreensProvider>
            <div className="column"></div>
        </section>
    )
}