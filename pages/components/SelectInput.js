import styles from '@/styles/components/selectInput.module.scss'

export default function SelectInput(props) {
    function onChange(event) {
        props.change(event.target.value)
    }

    return (
        <select className={styles.select} id={ props.id } value={ props.value } onChange={ onChange }>
            {props.itens.map(item => <option key={ item }>
                { item }
            </option>)}
        </select>
    )
}