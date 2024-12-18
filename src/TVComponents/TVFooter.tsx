



interface TVFooterProps{
    up: () => void
    down: () => void
}


export default function TVFooter(props:TVFooterProps){


    return(
        <footer id="footer">
            <button onClick={props.up}>up</button>
            <button onClick={props.down}>down</button>
        </footer>
    )
}