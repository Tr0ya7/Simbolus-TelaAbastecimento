import styles from '@/styles/components/selectInput.module.scss'

export default function SelectInput({ value, onChange, itens }) {
    return (
        <select 
            className={styles.select} 
            value={value} 
            onChange={onChange}
            required
        >
            <option className={styles.defaultText} key='Selecione um valor' value="" hidden>
                Selecione um valor
            </option>
            {Array.isArray(itens) ? (
                itens.map((item) => <option key={item.codigo}>{item}</option>)
            ) : null}
        </select>
    )
}