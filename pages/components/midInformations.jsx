import styles from '@/styles/components/midInformations.module.scss'
import { useContext, useState } from 'react'
import { UserContext } from './common'
import Cost from './cost'
import Measure from './measure'
import Quantity from './quantity'

export default function MidInformations(props) {
    const [measure, setMeasure] = useState('')
    const { type, setType } = useContext(UserContext)
    const [quantity, setQuantity] = useState('')
    const [cost, setCost] = useState('')
    var measureText = 'Quilometragem'

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
                {measureText = type === 'Gerador' ? 'Horimetro' : 'Quilometragem'}
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