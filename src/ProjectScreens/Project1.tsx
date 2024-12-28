import { Project } from "./Project"

interface projectProps{
    setShowCards: React.Dispatch<React.SetStateAction<boolean>>
    setDetailedView: React.Dispatch<React.SetStateAction<JSX.Element | null>>
}
  
export default function Project1Card(props:projectProps){

    const project1 = new Project(props);

    project1.setCardView(
        <>Hello wth</>
    )

    project1.setDetailedProjectView(
        <>wtf</>
    )

    return project1.getCardView()
}