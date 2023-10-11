import Input from './input'

export default function Measure(props) {
    return (
        <div>
            <p>
                { props.children }
            </p>
            <Input value={ props.measure } onChange={ props.onChange } />
        </div>
    )
}