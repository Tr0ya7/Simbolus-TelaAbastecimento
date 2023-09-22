import styles from '@/styles/components/obs.module.scss'
import { useState } from 'react'

export default function Obs(props) {
    const [obs, setObs] = useState('')

    function obsOnChange() {
        props.obsInfo({
            obs
        })
    }

    return (
        <div className={styles.obs} onChange={ obsOnChange }>
            <div>
                <p>
                    Observação
                </p>
                <textarea type="text" value={ obs } onChange={ event => setObs(event.target.value) } />
            </div>
        </div>
    )
}