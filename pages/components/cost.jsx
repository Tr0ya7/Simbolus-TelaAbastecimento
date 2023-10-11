import Input from './input'

export default function Cost(props) {
    return (
        <div>
            <p>
                {props.children}
            </p>
            <Input value={ props.value } onChange={ props.onChange } />
        </div>
    )
}