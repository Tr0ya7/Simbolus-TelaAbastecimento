import styles from '@/styles/components/selectInput.module.scss'
import { useState } from 'react'

export default function ApiSelectInput(props) {
    const [selectedValue, setSelectedValue] = useState('')

    function handleSelectChange(event) {
        const selectedOption = event.target.value
        const item = props.itens.find(item => item.descricao === selectedOption)

        if (item) {
            const newValue = {
                codigo: item.codigo,
                descricao: item.descricao
            }

            setSelectedValue(newValue)
            props.onChange(newValue)
        }
    }

    const itemsArray = Array.isArray(props.itens) ? props.itens : []

    return (
        <select 
            className={styles.select} 
            value={selectedValue.descricao} 
            onChange={handleSelectChange} 
            required
        >
            <option className={styles.defaultText} value="" hidden>
                Selecione um valor
            </option>
            {itemsArray.map((item) => (
                <option key={item.codigo} value={item.descricao}>
                    {item.descricao}
                </option>
            ))}
        </select>
    )
}