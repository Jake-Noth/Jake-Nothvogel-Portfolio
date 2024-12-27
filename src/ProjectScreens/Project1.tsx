


interface projectProps{
    setShowCards: React.Dispatch<React.SetStateAction<boolean>>
    setDetailedView: React.Dispatch<React.SetStateAction<JSX.Element | null>>
}
  
export default function Project1Card(props:projectProps){


    const back = () =>{
        props.setDetailedView(null)
        props.setShowCards(true)
    }

    const detailedScreenView = (
        <div style={{height:"100%", width:"100%", background:"black"}}>
                <button onClick={back}>back1</button>
        </div>
    )

    const goInDepth = () => {
        props.setShowCards(false)
        props.setDetailedView(detailedScreenView)
    }

    return(
        <>
            <button onClick={goInDepth}>Learn More!</button>
        </>
    )
}