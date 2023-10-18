import PropInputMask from './propInputMask'

export default function Hour(props) {
    return (
        <div className={ props.className }>
            <p>
                { props.children }
            </p>
            <PropInputMask mask="99:99:99" value={ props.hour } onChange={ props.onChange } />
        </div>
    )
}