import styles from '@/styles/components/input.module.scss'

export default function Input(props) {
    return <input
            className={`${styles.input} ${props.className}`}
            id={ props.id } 
            value={ props.value } 
            type={ props.type } 
            maxLength={ props.maxLength } 
            disabled={ props.disabled }
            onChange={ props.onChange }
            min="0"
            required
           />
}