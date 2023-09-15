import PropInput from './propInput'
import styles from '@/styles/components/topInformations.module.scss'
import SelectInput from './SelectInput'
import { useState } from 'react'
import Employer from './employer'

export default function TopInformations() {
    const [data, setData] = useState('')
    const [hour, setHour] = useState('')
    const [type, setType] = useState('')
    const [local, setLocal] = useState('')
    const [suply, setSuply] = useState('')
    const [gas, setGas] = useState('')

    const types = [
        'Veículo',
        'Gerador'
    ]

    const locations = [
        'Local',
        'Terceiro'
    ]

    const suplys = []

    const fuel = [
    ]

    return (
        <div className={styles.topInformations}>
            <div className={styles.main}>
                <Employer>
                    Funcionários
                </Employer>
            </div>
            <div className={styles.main}>
                <p>
                    Data
                </p>
                <PropInput
                    className="dataInput"
                    value={data}
                    maxLength="8"
                    change={value => setData(value)}
                />
            </div>
            <div className={styles.main}>
                <p>
                    Hora
                </p>
                <PropInput value={hour} change={value => setHour(value)} />
            </div>
            <div className={styles.main}>
                <p>
                    Tipo
                </p>
                <SelectInput itens={types} value={type} change={value => setType(value)} />
            </div>
            <div className={styles.main}>
                <p>
                    Local
                </p>
                <SelectInput itens={locations} value={local} change={value => setLocal(value)} />
            </div>
            <div className={styles.main}>
                <p className="suply">
                    Veículo
                </p>
                <SelectInput itens={suplys} value={suply} change={value => setSuply(value)} />
            </div>
            <div className={styles.main}>
                <p>
                    Combustível
                </p>
                <SelectInput itens={fuel} value={gas} change={value => setGas(value)} />
            </div>
        </div>
    )
}