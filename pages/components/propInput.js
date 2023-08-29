import styles from '@/styles/components/input.module.scss'

export default function PropInput({ maxLength, value, onClick }) {
    return <input className={styles.input} value={ value } type="text" maxLength={ maxLength } />
}