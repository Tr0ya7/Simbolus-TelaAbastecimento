import ApiSelectInput from "./apiSelectInput";

export default function Vehicles(props) {
    return (
        <div className={ props.className }>
            <p>
                { props.children }
            </p>
            <ApiSelectInput itens={ props.itens } value={ props.value } onChange={ props.onChange } />
        </div>
    )
}