import { useSelector } from 'react-redux';
import PropInput from './propInput'

export default function Employer (props) {
    const employer = useSelector(state => state.employer.currentCpf);
    
    return (
        <>
            <p>
                { props.children }
            </p>
            <input id="employersInput" value={ employer } disabled="disabled" />
        </>
    )
}