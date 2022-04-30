import './styles.css'

export function Button({text, onClick}){
    return(
        <button onClick={onClick} className="button-component">
            {text}
        </button>
    )
    }