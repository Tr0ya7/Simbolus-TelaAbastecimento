import styles from '@/styles/components/midInformations.module.scss'
import { useState } from 'react'
import Cost from './cost'
import Measure from './measure'
import Quantity from './quantity'

export default function MidInformations(props) {
    const [measure, setMeasure] = useState('')
    const [quantity, setQuantity] = useState('')
    const [cost, setCost] = useState('')

    function midInformationsOnChange() {
        props.midInfo([
            measure,
            quantity,
            cost
        ])
    }
    
    return (
        <div className={styles.midInformations} onChange={ midInformationsOnChange }>
            <Measure value={measure} onChange={(event) => setMeasure(event.target.value)}>
                Quilometragem
            </Measure>
            <Quantity value={quantity} onChange={(event) => setQuantity(event.target.value)}>
                Litros                
            </Quantity>
            <Cost value={cost} onClick={(event) => setCost(event.target.value)}>
                Litros/Custo
            </Cost>
        </div>
    )
}