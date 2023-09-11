import styles from '@/styles/components/obs.module.scss'
import { useState } from 'react'

export default function Obs() {
    const [obs, setObs] = useState('')

    function obsOnChange(event) {
        setObs(event.target.value)
    }

    return (
        <div className={styles.obs}>
            <div>
                <p>
                    Observação
                </p>
                <textarea type="text" value={ obs } onChange={ obsOnChange } />
            </div>
        </div>
    )
}