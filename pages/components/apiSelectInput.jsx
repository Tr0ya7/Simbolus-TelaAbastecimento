import styles from '@/styles/components/selectInput.module.scss'
import { useState } from 'react'

export default function ApiSelectInput(props) {
    const [selectedValue, setSelectedValue] = useState('')

    function handleSelectChange(event) {
        const newValue = event.target.value
        setSelectedValue(newValue)
        props.onChange(newValue)
    }

    const itemsArray = Array.isArray(props.itens) ? props.itens : [];

    return (
        <select className={styles.select} value={selectedValue} onChange={ handleSelectChange }>
            {itemsArray.map((item) => (
                <>
                    <option className={styles.defaultText} value="" hidden>
                        Selecione um valor
                    </option>
                    <option key={item.codigo} value={item.descricao}>
                        {item.descricao}
                    </option>
                </>
            ))}
        </select>
    )
}