import PropInputMask from "./propInputMask"

export default function Data(props) {
    return (
        <div className={ props.className }>
            <p>
                { props.children }
            </p>
            <PropInputMask mask="9999-99-99" value={ props.value } maxLength="8" onChange={ props.onChange } />
        </div>
    )
}