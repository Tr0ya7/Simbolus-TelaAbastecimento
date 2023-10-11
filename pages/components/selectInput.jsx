import styles from '@/styles/components/selectInput.module.scss'

export default function SelectInput(props) {
    return (
        <select 
            className={styles.select} 
            value={ props.value } 
            placeholder="Selecione um valor" 
            onChange={ props.onChange }
        >
            { props.itens.map(item => <option key={ item }>
                                        { item }
                                      </option>) }
        </select>
    )
}