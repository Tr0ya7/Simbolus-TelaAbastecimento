import styles from '@/styles/components/topInformations.module.scss'
import { useContext, useEffect, useState } from 'react'
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
    const [suply, setSuply] = useState([])
    const [currentSuply] = useState(suply)
    const [suplyGenerators, setSuplyGenerators] = useState([])
    const [currentSuplyGenerators] = useState(suplyGenerators)
    const [fuel, setFuel] = useState([])
    const [currentFuel] = useState(fuel)
    [type, setType] = useState(types)
    const path = 'http://192.168.2.199:5000'

    async function fetchDataVehicles() {
        try {
            const responseVehicles = await fetch(`${path}/veiculos`)
            const dataVehicles = await responseVehicles.json()

            setSuply(
                dataVehicles.veiculos.map((vehicle) => ({
                    codigo: vehicle.codigo,
                    descricao: vehicle.descricao
                }))
            )
    
            const responseFuel = await fetch(`${path}/combustiveis`)
            const dataFuel = await responseFuel.json()

            setFuel(
                dataFuel.produtos.map((gas) => ({
                    codigo: gas.codigo,
                    descricao: gas.descricao
                }))
            )
        } catch (error) {
            console.error('Erro ao buscar dados da API: ', error)
        }
    }
    
    useEffect(() => {
        fetchDataVehicles()
    }, [])

    async function fetchDataGenerators() {
        try {
            const responseGenerators = await fetch(`${path}/geradores`)
            const dataGenerators = await responseGenerators.json()

            setSuplyGenerators(
                dataGenerators.geradores.map((generator) => ({
                    codigo: generator.codigo,
                    descricao: generator.descricao
                }))
            )
        } catch (error) {
            console.error('Erro ao buscar dados da API: ', error)
        }
    }
    
    useEffect(() => {
        fetchDataGenerators()
    }, [])

    const suplyTypes = type === 'Gerador' ? suplyGenerators : suply
    const setSuplyData = type === 'Gerador'
        ? (event) => setSuplyGenerators(event.target.value) 
        : (event) => setSuply(event.target.value)

    function topInformationsOnChange() {
        props.topInfo([
            cpf,
            data,
            hour,
            type,
            local,
            currentSuply,
            currentSuplyGenerators,
            currentFuel
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
                itens={suplyTypes}
                value={suplyTypes}
                onChange={setSuplyData} //{(event) => setSuply(event.target.value)}
            >
                {vehicleText = type === 'Gerador' ? 'Geradores' : 'Veículos'}
            </Vehicles>
            <Fuel
                className={styles.main}
                itens={fuel}
                value={fuel}
                onChange={(event) => setFuel(event.target.value)}
            >
                Combustível
            </Fuel>
        </div>
    )
}