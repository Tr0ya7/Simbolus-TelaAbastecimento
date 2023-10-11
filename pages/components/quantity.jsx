import Input from './input'

export default function Quantity(props) {
    return (
        <div>
            <p>
                { props.children }
            </p>
            <Input value={ props.quantity } onChange={ props.onChange } />
        </div>
    )
}