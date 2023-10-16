export default function PropButton(props) {
    const buttonStyles = {
        "backgroundColor": "rgb(37, 150, 190)",
        "color": "white",
        "padding": "1em",
        "border": "none",
        "borderRadius": "5px",
        "transition": ".1s",
        "cursor": "pointer",
    }
    
    return (
        <button 
            className={ props.className }
            style={ buttonStyles }
            type={ props.type } 
            onClick={ props.onClick }
        >
            { props.children }
        </button>
    )
}