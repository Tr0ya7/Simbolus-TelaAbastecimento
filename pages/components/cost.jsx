import Input from './input'

export default function Cost(props) {
    return (
        <div>
            <p>
                {props.children}
            </p>
            <Input mask="99,99" value={ props.value } onChange={ props.onChange } type="number" />
        </div>
    )
}