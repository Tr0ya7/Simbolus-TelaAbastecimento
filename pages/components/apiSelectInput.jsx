import styles from '@/styles/components/selectInput.module.scss'

export default function ApiSelectInput(props) {
    return (
        <select 
            className={styles.select} 
            value={ props.value } 
            onChange={ props.onChange }
        >
            { props.itens.map((item) => (<option key={item.codigo}>{item}</option>)) }
        </select>
    )
}