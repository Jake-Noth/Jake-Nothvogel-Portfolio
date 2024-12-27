


interface project2Props{
    setShowCards: React.Dispatch<React.SetStateAction<boolean>>
    setDetailedView: React.Dispatch<React.SetStateAction<JSX.Element | null>>
}

export default function Project2Card(props:project2Props){


    const back = () =>{
        props.setShowCards(true)
    }


    const detailedView = (
            <div style={{height:"100%", width:"100%", background:"black"}}>
                <button onClick={back}>back2</button>
            </div>
    )

    const goInDepth = () => {
        props.setShowCards(false)
        props.setDetailedView(detailedView)
    }

    
        
    return(
        <>
            <button onClick={goInDepth}>Learn More!</button>
        </>
    )
}