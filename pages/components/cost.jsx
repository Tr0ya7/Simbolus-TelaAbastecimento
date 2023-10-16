import PropInputMask from './propInputMask'

export default function Cost(props) {
    return (
        <div>
            <p>
                {props.children}
            </p>
            <PropInputMask mask="R$ 99,99" value={ props.value } onChange={ props.onChange } />
        </div>
    )
}