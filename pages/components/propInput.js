import styles from '@/styles/components/input.module.scss'

export default function PropInput(props) {
    /*function inputOnChange(event) {
        props.change(event.target.value)
    }*/

    return <input 
                className={styles.input} 
                id={ props.id } 
                value={ props.value } 
                type={ props.type } 
                maxLength={ props.maxLength } 
                disabled={ props.disabled }
                //onChange={ inputOnChange }
            />
}