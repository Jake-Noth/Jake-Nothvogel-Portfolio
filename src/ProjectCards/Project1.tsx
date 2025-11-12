import { Project } from "./Project"

interface projectProps {
    setShowCards: React.Dispatch<React.SetStateAction<boolean>>
    setDetailedView: React.Dispatch<React.SetStateAction<JSX.Element | null>>
}

export default function Project1Card(props: projectProps) {

    const project1 = new Project(props);

    project1.setCardView(
        <div style={{ height: "100%", width: "100%", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: 'center', paddingBottom: "1%" }}>
            <a
                href="https://memcase.io"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                    height: "3%"
                }}
            >
                MemCase.io
            </a>
            <div style={{ height: "97%", width: "100%", display: "flex", flexDirection: "column" }}>
                <p style={{ height: "40%", width: "100%", margin: 0, display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "center", fontSize: "clamp(9px, 1.7vw, 18px)", padding: '1rem', }}>

                    <h6 style={{ fontStyle: "italic" }}>
                        React, TypeScript, Python, Flask, Supabase, Stripe
                    </h6>

                    MemCase — A site that allows for easy creation of phone cases that are decorated by user provided image stickers. The site includes
                    an editor for arranging and layering sticker, along with a mockup preview provided by the printify API. Once checked out the phone case is
                    shipped to your house in a weeks time.
                </p>
                <div
                    style={{
                        height: "55%",
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "end",
                        justifyContent: "center",
                        gap: ".5vw"
                    }}
                >
                    <img
                        src="demo-poster.png"
                        alt="case"
                        style={{
                            height: "100%",
                            objectFit: "contain",
                            border: "2px solid black",
                            borderRadius: "10px"
                        }}
                    />
                    <img
                        src="complete-case.JPG"
                        alt="case"
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

    project1.setDetailedProjectView(
        <>wtf</>
    )

    return project1.getCardView()
}