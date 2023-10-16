import styles from '@/styles/components/topInformations.module.scss'
import { useContext, useState } from 'react'
import Employer from './employer'
import Data from './data'
import Hour from './hour'
import Type from './type'
import Local from './local'
import { UserContext } from './common'
import Vehicles from './vehicles'
import Fuel from './fuel'

export default function TopInformations(props) {
    const { cpf, setCpf, type, setType } = useContext(UserContext)
    const [data, setData] = useState('')
    const [hour, setHour] = useState('')
    var vehicleText = 'Veículos'
    const types = [
        'Veículo',
        'Gerador'
    ]
    const locations = [
        'Local',
        'Terceiro'
    ]
    const [local, setLocal] = useState(locations)
    const suplys = []
    const [suply, setSuply] = useState(suplys)
    const gas = []
    const [fuel, setFuel] = useState(gas)
    [type, setType] = useState(types)
    const path = 'http://192.168.2.199:5000'

    fetch(`${path}/veiculos`)
        .then((res) => res.json())
        .then((data) => suplys.push(...data.veiculos.map((vehicle) => vehicle)))
    
    fetch(`${path}/combustiveis`)
        .then((res) => res.json())
        .then((data) => gas.push(...data.produtos.map((fuel) => fuel)))

    function topInformationsOnChange() {
        props.topInfo([
            cpf,
            data,
            hour,
            type,
            local,
            suply,
            fuel
        ])
    }

    return (
        <div className={styles.topInformations} onChange={ topInformationsOnChange }>
            <Employer className={styles.main} value={cpf} onChange={(event) => setCpf(event.target.value)}>
                Funcionários
            </Employer>
            <Data className={styles.main} value={data} onChange={(event) => setData(event.target.value)}>
                Data
            </Data>
            <Hour className={styles.main} value={hour} onChange={(event) => setHour(event.target.value)}>
                Hora
            </Hour>
            <Type
                className={styles.main}
                itens={types}
                value={type}
                onChange={(event) => setType(event.target.value)}
            >
                Tipo
            </Type>
            <Local 
                className={styles.main} 
                itens={locations} 
                value={local} 
                onChange={(event) => setLocal(event.target.value)}
            >
                Local
            </Local>
            <Vehicles
                className={styles.main}
                itens={suplys}
                value={suply}
                onChange={(event) => setSuply(event.target.value)}
            >
                {vehicleText = type === 'Gerador' ? 'Geradores' : 'Veículos'}
            </Vehicles>
            <Fuel
                className={styles.main}
                itens={gas}
                value={fuel}
                onClick={(event) => setFuel(event.target.value)}
            >
                Combustível
            </Fuel>
        </div>
    )
}