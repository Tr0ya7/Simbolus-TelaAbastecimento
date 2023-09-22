import styles from '@/styles/components/midInformations.module.scss'
import { useState } from 'react'

export default function MidInformations(props) {
    const [measure, setMeasure] = useState('')
    const [quantity, setQuantity] = useState('')
    const [cost, setCost] = useState('')

    function midInformationsOnChange() {
        props.midInfo({
            measure,
            quantity,
            cost
        })
    }
    
    return (
        <div className={styles.midInformations} onChange={ midInformationsOnChange }>
            <div>
                <p>
                    Quilometragem
                </p>
                <input value={ measure } onChange={ event => setMeasure(event.target.value) } />
            </div>
            <div>
                <p>
                    Litros
                </p>
                <input value={ quantity } onChange={ event => setQuantity(event.target.value) } />
            </div>
            <div className={styles.expense}>
                <p>
                    Custo/Litro
                </p>
                <input value={ cost } onChange={ event => setCost(event.target.value) } />
            </div>
        </div>
    )
}