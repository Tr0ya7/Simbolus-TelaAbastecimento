import PropInput from './propInput'

export default function (props) {
    return (
        <>
            <p>
                { props.children }
            </p>
            <PropInput id="employersInput" disabled="disabled" />
        </>
    )
}