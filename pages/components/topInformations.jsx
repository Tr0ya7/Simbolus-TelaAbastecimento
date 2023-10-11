import styles from '@/styles/components/topInformations.module.scss'
import { useContext, useState } from 'react'
import Employer from './employer'
import Data from './data'
import Hour from './hour'
import Type from './type'
import Local from './local'
import Veicles from './veicles'
import Fuel from './fuel'
import { UserContext } from './common'

export default function TopInformations(props) {
    const {cpf, setCpf} = useContext(UserContext)
    const [data, setData] = useState('')
    const [hour, setHour] = useState('')
    const types = [
        'Veículo',
        'Gerador'

    ]
    const [type, setType] = useState(types)
    const locations = [
        'Local',
        'Terceiro'
    ]
    const [local, setLocal] = useState(locations)
    const [suply, setSuply] = useState([])
    const [, setSuplyLoaded] = useState(false)
    const [fuel, setFuel] = useState([])
    const [, setFuelLoaded] = useState(false)
    const path = 'http://192.168.2.199:5000'

    fetch(`${path}/veiculos`)
        .then((res) => res.json())
        .then((data) => {
            data.veiculos.map((veiculo) => suply.push(veiculo))
            setSuplyLoaded(true)
        })

    fetch(`${path}/combustiveis`)
        .then((res) => res.json())
        .then((data) => {
            data.produtos.map((gas) => fuel.push(gas.descricao))
            setFuelLoaded(true)
        })

        console.log(suply)

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
            Veiculos
            <select
                className={styles.main}
                value={suply}
                onChange={(event) => setSuply(event.target.value)}
            >
                {suply.map(item => (<option key={item.codigo}>{item.descricao}</option>))}
            </select>
            <Fuel 
                className={styles.main} 
                itens={fuel} 
                value={fuel} 
                onClick={(event) => setFuel(event.target.value)}
            >
                Combustível
            </Fuel>
        </div>
    )
}