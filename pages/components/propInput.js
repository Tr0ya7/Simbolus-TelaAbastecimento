import styles from '@/styles/components/input.module.scss'

export default function PropInput({ id, value, maxLength, disabled }) {
    return <input className={styles.input} id={ id } value={ value } type="text" maxLength={ maxLength } disabled={ disabled } />
}