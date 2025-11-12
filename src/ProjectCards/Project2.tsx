import { Project } from "./Project"



interface project2Props {
    setShowCards: React.Dispatch<React.SetStateAction<boolean>>
    setDetailedView: React.Dispatch<React.SetStateAction<JSX.Element | null>>
}

export default function Project2Card(props: project2Props) {

    const project2 = new Project(props)

    project2.setCardView(
        <div style={{ height: "100%", width: "100%", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: 'center', paddingBottom: "1%" }}>

            <div style={{ height: "3%" }}>
                Simple Lift
            </div>


            <div style={{ height: "97%", width: "100%", display: "flex", flexDirection: "column" }}>
                <p style={{ height: "40%", width: "100%", margin: 0, display: "flex", alignItems: "start", flexDirection: "column", justifyContent: "center", fontSize: "clamp(9px, 1.7vw, 18px)", padding: '1rem' }}>
                    <h6 style={{ fontStyle: "italic" }}>
                        React, Supabase
                    </h6>
                    Simple Lift — A minimalist bodybuilding tracker designed to promote progressive overload. Built with a focus on speed and simplicity, it lets users configure workout splits (e.g., push/pull/legs), assign exercises, and automatically cache and sync progress to the cloud via Supabase.
                </p>
                <div
                    style={{
                        height: "55%",
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: ".5vw"
                    }}
                >
                    <img
                        src="Split-day-page.png"
                        alt="Split day screen"
                        style={{
                            height: "100%",
                            objectFit: "contain",
                            border: "2px solid black",
                            borderRadius: "10px"
                        }}
                    />
                    <img
                        src="Exercise-page.png"
                        alt="Exercise tracking sheet"
                        style={{
                            height: "100%",
                            objectFit: "contain",
                            border: "2px solid black",
                            borderRadius: "10px"
                        }}
                    />

                </div>
            </div>
        </div>
    )

    project2.setDetailedProjectView(
        <>New View</>
    )

    return project2.cardView
}