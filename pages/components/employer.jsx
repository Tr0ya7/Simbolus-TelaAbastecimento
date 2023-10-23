import styles from '@/styles/components/employer.module.scss'
import Input from "./input"

export default function Employer (props) {
    return (
        <div className={ props.className }>
            <p>
                { props.children }
            </p>
            <Input className={styles.input} value={ props.value } onChange={ props.onChange } disabled />
        </div>
    )
}