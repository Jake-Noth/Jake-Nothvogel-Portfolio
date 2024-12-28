import { Project } from "./Project"



interface project2Props{
    setShowCards: React.Dispatch<React.SetStateAction<boolean>>
    setDetailedView: React.Dispatch<React.SetStateAction<JSX.Element | null>>
}

export default function Project2Card(props:project2Props){

    const project2 = new Project(props)

    project2.setCardView(
        <>lolllllll</>
    )

    project2.setDetailedProjectView(
        <>New View</>
    )

    return project2.cardView
}