import Input from './input'
import PropInputMask from './propInputMask'

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