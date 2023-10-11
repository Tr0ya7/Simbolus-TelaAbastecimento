import Input from "./input"

export default function Employer (props) {
    return (
        <div className={ props.className }>
            <p>
                { props.children }
            </p>
            <Input value={ props.value } onChange={ props.onChange } disabled />
        </div>
    )
}