import styles from '@/styles/components/propButton.module.scss'

export default function PropButton(props) {
    function buttonOnSubmit(event) {
        //event.preventDefault()
    }

    return (
        <button className={styles.button} type={ props.type } onSubmit={ buttonOnSubmit }>
            { props.children }
        </button>
    ) 
}