import PropInputMask from "./propInputMask"

export default function Data(props) {
    return (
        <div className={ props.className }>
            <p>
                { props.children }
            </p>
            <PropInputMask mask="99/99/9999" value={ props.value } maxLength="8" onChange={ props.onChange } />
        </div>
    )
}