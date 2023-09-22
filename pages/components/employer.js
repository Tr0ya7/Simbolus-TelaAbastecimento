import { useSelector } from 'react-redux'

export default function Employer (props) {
    const employer = useSelector(state => state.employer)

    return (
        <>
            <p>
                { props.children }
            </p>
            <input id="employersInput" value={ employer.currentCpf } disabled />
        </>
    )
}