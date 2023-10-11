import styles from '@/styles/components/inputMask.module.scss'
import { InputMask } from 'primereact/inputmask'

export default function PropInputMask(props) {
    return <InputMask 
            mask={ props.mask }
            className={styles.input}
            id={ props.id } 
            value={ props.value } 
            type={ props.type } 
            maxLength={ props.maxLength } 
            disabled={ props.disabled }
            onChange={ props.onChange }
           />
}