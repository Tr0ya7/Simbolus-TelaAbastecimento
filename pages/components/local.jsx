import SelectInput from "./selectInput";

export default function Local(props) {
    return (
        <div className={ props.className }>
            <p>
                { props.children }
            </p>
            <SelectInput itens={ props.itens } value={ props.value } onChange={ props.onChange } />
        </div>
    )
}