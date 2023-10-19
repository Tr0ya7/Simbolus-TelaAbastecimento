import styles from '@/styles/components/informations.module.scss'
import { useState } from 'react'
import TopInformations from './topInformations'
import MidInformations from './midInformations'
import StaticInformations from './staticInformations'
import Obs from './obs'
import PropButton from './propButton'

export default function Informations() {
    const [formData, setFormData] = useState({})
    const [formData1, setFormData1] = useState({})
    const [formData2, setFormData2] = useState({})

    function formOnSubmit(event) {
        event.preventDefault()
        const path = 'http://192.168.2.199:5000'

        const combinedData = { ...formData, ...formData1, ...formData2 }

        try {
            fetch(`${path}/abastecimento`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(combinedData)
            })
        } catch (err) {
            console.log('Erro:', err)
        }
    }

    function updateFormData(newData) {
        setFormData(newData)
    }

    function updateFormData1(newData) {
        setFormData1(newData)
    }

    function updateFormData2(newData) {
        setFormData2(newData)
    }

    return (
        <form className={styles.informations} onSubmit={formOnSubmit}>
            <TopInformations topInfo={updateFormData} />
            <MidInformations midInfo={updateFormData1} />
            <StaticInformations />
            <Obs obsInfo={updateFormData2} />
            <div className={styles.button}>
                <PropButton type="submit">
                    Salvar
                </PropButton>
            </div>
        </form>
    );
}