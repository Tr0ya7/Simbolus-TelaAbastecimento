import styles from '@/styles/components/selectInput.module.scss'

export default function SelectInput(props) {
    return (
        <select 
            className={styles.select} 
            value={ props.value } 
            onChange={ props.onChange }
        >
            <option className={styles.defaultText} key='Selecione um valor' value="" hidden>
                Selecione um valor
            </option>
            { props.itens.map((item) => (<option key={item.codigo}>{item}</option>)) }
        </select>
    )
}