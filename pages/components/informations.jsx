import styles from '@/styles/components/informations.module.scss'
import { useEffect, useState } from 'react'
import TopInformations from './topInformations'
import MidInformations from './midInformations'
import Obs from './obs'
import PropButton from './propButton'
import Logo from './logo'

export default function Informations() {
    const [funId, setFunId] = useState('')
    const [formData, setFormData] = useState({})
    const [formData1, setFormData1] = useState({})
    const [formData2, setFormData2] = useState({})

    function formOnSubmit(event) {
        event.preventDefault()
        const path = 'http://192.168.2.199:5000'
        var combinedData = { ...funId, ...formData, ...formData1, ...formData2 }

        try {
            fetch(`${path}/abastecimento`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(combinedData)
            })
            .then((res) => {
            if(res.ok) {
                alert('Salvo')
                setFormData('')
            }})
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <form className={styles.informations} onSubmit={formOnSubmit}>
            <section>
                <Logo />
                <div className={styles.text}>
                    Abastecimento
                </div>
                <TopInformations funId={setFunId} topInfo={setFormData} />
                <MidInformations midInfo={setFormData1} />
                <Obs obsInfo={setFormData2} />
                <div className={styles.button}>
                    <PropButton type="submit">
                        Salvar
                    </PropButton>
                </div>
            </section>
        </form>
    )
}