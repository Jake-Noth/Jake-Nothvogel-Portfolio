
interface projectProps{
    setShowCards: React.Dispatch<React.SetStateAction<boolean>>
    setDetailedView: React.Dispatch<React.SetStateAction<JSX.Element | null>>
}

export class Project{

    setShowCards:React.Dispatch<React.SetStateAction<boolean>>;
    setDetailedView: React.Dispatch<React.SetStateAction<JSX.Element | null>>
    cardView: JSX.Element | null
    detailedProjectView: JSX.Element | null

    constructor(props:projectProps){
        this.setShowCards = props.setShowCards
        this.setDetailedView = props.setDetailedView
        this.cardView = null;
        this.detailedProjectView = null; 
    }

    public setCardView(cardDetails: JSX.Element){
        this.cardView = (

            <div style={{height:"100%", width:"100%", backgroundColor:"green"}}>

                <div style={{height:"90%", width:"100%"}}>
                    {cardDetails}
                </div>

                <div style={{height:"10%", width:"100%", display:'flex', alignItems:"center", justifyContent:"center"}}>
                    <button onClick={() => this.showDetailedProjectView()}>Learn More!</button>
                </div>

            </div>
        )
    }

    public setDetailedProjectView(detailedProjectView: JSX.Element){
        this.detailedProjectView = (
            <div style={{height:"100%", width:"100%", backgroundColor:"red"}}>

                <div style={{height:"90%", width:"100%"}}>
                    {detailedProjectView}
                </div>

                <div style={{height:"10%", width:"100%", display:'flex', paddingLeft:"5%", alignItems:"center"}}>
                    <button onClick={() => this.showCards()}>Back</button>
                </div>

            </div>
        )
    }

    private showDetailedProjectView(){
        this.setShowCards(false)
        this.setDetailedView(this.detailedProjectView)
    }

    private showCards(){
        this.setShowCards(true)
        this.setDetailedView(null)
    }

    public getCardView(){
        if(!this.cardView){
            console.error("You need to give the project a card detail");
        }

        if(!this.detailedProjectView){
            console.error("You need to give the detailed project view");
        }

        return this.cardView
    }

}