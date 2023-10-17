import styles from '@/styles/components/selectInput.module.scss'

export default function ApiSelectInput(props) {
    const itemsArray = Array.isArray(props.itens) ? props.itens : []

    return (
        <select
            className={styles.select}
            value={ props.value }
            onChange={ props.onChange }
        >
            {itemsArray.map((item) => (
                <option key={item.codigo} value={item.descricao}>
                    {item.descricao}
                </option>
            ))}
        </select>
    )
}