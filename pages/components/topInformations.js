import PropInput from './propInput'
import styles from '@/styles/components/topInformations.module.scss'
import SelectInput from './SelectInput'
import { useState } from 'react'
import LoginInformations from './loginInformations'

export default function TopInformations(props) {
    const [data, setData] = useState('')
    const [employer, setEmployer] = useState('')
    const [hour, setHour] = useState('')

    const types = [
        'Veículo',
        'Gerador'
    ]

    const [type, setType] = useState('')

    const locations = [
        'Local',
        'Terceiro'
    ]

    const [local, setLocal] = useState('')

    const suplys = []

    const [suply, setSuply] = useState('')

    const fuel = [
    ]

    const [gas, setGas] = useState('')

    /*props.data = data
    props.employer = employer
    props.hour = hour
    props.type = type
    props.local = local
    props.suply = suply
    props.gas = gas*/

    return (
        <div className={styles.topInformations}>
            <div className={styles.main}>
                <p>
                    Funcionário Responsável
                </p>
                <PropInput 
                    id="employersInput" 
                    value={ employer } 
                    disabled="disabled" 
                    change={ value => setEmployer(value) }
                />
            </div>
            <div className={styles.main}>
                <p>
                    Data
                </p>
                <PropInput 
                    className="dataInput" 
                    value={ data } 
                    maxLength="8" 
                    change={ value => setData(value) }
                />
            </div>
            <div className={styles.main}>
                <p>
                    Hora
                </p>
                <PropInput value={ hour } change={ value => setHour(value) } />
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