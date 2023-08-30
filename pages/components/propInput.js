import styles from '@/styles/components/input.module.scss'

export default function PropInput({ maxLength, value, onClick, disabled }) {
    return <input className={styles.input} value={ value } type="text" maxLength={ maxLength } onClick={ onClick } disabled={ disabled } />
}