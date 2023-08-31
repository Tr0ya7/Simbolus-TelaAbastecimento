import styles from '@/styles/components/input.module.scss'

export default function PropInput({ id, value, type, maxLength, disabled }) {
    return <input className={styles.input} id={ id } value={ value } type={ type } maxLength={ maxLength } disabled={ disabled } />
}