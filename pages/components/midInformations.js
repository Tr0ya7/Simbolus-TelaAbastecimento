import PropInput from './propInput'
import styles from '@/styles/components/midInformations.module.scss'
import { useState } from 'react'

export default function MidInformations() {
    return (
        <div className={styles.midInformations}>
            <div>
                <p className="measure">
                    Quilometragem
                </p>
                <PropInput />
            </div>
            <div>
                <p>
                    Litros
                </p>
                <PropInput />
            </div>
            <div className={styles.expense}>
                <p>
                    Custo/Litro
                </p>
                <PropInput />
            </div>
        </div>
    )
}