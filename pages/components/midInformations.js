import PropInput from './propInput'
import styles from '@/styles/components/midInformations.module.scss'
import { useState } from 'react'

export default function MidInformations() {
    const [measure, setMeasure] = useState('')
    const [quantity, setQuantity] = useState('')
    const [cost, setCost] = useState('')
    
    return (
        <div className={styles.midInformations}>
            <div>
                <p>
                    Quilometragem
                </p>
                <PropInput value={ measure } change={ value => setMeasure(value) } />
            </div>
            <div>
                <p>
                    Litros
                </p>
                <PropInput value={ quantity } change={ value => setQuantity(value) } />
            </div>
            <div className={styles.expense}>
                <p>
                    Custo/Litro
                </p>
                <PropInput value={ cost } change={ value => setCost(value) } />
            </div>
        </div>
    )
}