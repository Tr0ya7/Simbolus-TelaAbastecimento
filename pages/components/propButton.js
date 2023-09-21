import styles from '@/styles/components/propButton.module.scss'

export default function PropButton(props) {
    return (
        <button className={styles.button} type={ props.type } onClick={ props.onClick }>
            { props.children }
        </button>
    )
}