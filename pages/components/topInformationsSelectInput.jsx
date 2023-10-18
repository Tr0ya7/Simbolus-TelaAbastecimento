import SelectInput from "./selectInput";

export default function TopInformationsSelectInput(props) {
    return (
        <div className={ props.className }>
            <p>
                { props.children }
            </p>
            <SelectInput itens={ props.itens } value={ props.value } onChange={ props.onChange } />
        </div>
    )
}