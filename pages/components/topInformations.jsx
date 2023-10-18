import styles from '@/styles/components/topInformations.module.scss'
import { useContext, useEffect, useState } from 'react'
import Employer from './employer'
import Data from './data'
import Hour from './hour'
import { UserContext } from './common'
import TopInformationsSelectInput from './topInformationsSelectInput'
import TopInformationsApiSelectInput from './topInformationsApiSelectInput'

export default function TopInformations(props) {
    const { id, setId, type, setType } = useContext(UserContext)
    const [data, setData] = useState('')
    const [hour, setHour] = useState('')
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
    var [currentSuply, setCurrentSuply] = useState(suply)
    const [suplyGenerators, setSuplyGenerators] = useState([])
    var [currentSuplyGenerators, setCurrentSuplyGenerators] = useState(suplyGenerators)
    const [fuel, setFuel] = useState([])
    const [currentFuel, setCurrentFuel] = useState(fuel)
    [type, setType] = useState(types)
    const path = 'http://192.168.2.199:5000'
    var vehicleText = 'Veículos'

    if (type === 'Veículo') {
        vehicleText = 'Veículos'
    } else if (type === 'Gerador') {
        vehicleText = 'Geradores'
    } else {
        vehicleText = 'Selecione um tipo'
    }

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

    async function fetchDataGas() {
        try {
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
        fetchDataGas()
    }, [])

    var suplyTypes = ''

    if (type === 'Gerador') {
        suplyTypes = suplyGenerators
        currentSuply = ''
    } else if (type === 'Veículo') {
        suplyTypes = suply
        currentSuplyGenerators = ''
    }

    const setSuplyData = type === 'Gerador'? setCurrentSuplyGenerators : setCurrentSuply

    //currentSuply = suply.map((item) => item.codigo)
    //console.log(currentSuply)

    function topInformationsOnChange() {
        props.topInfo({
            fun_codigo: id,  //ok
            data: data, //ok
            hora: hour, //ok
            tipo: type, //ok
            local: local, //ok
            veículo: currentSuply, //bem_codigo
            gerador: currentSuplyGenerators, //bem_codigo
            pro_codigo: currentFuel //pro_codigo
        })
    }

    //console.log(suply.map((item) => item.codigo), currentSuply)

    return (
        <div className={styles.topInformations} onChange={ topInformationsOnChange }>
            <Employer className={styles.main} value={id} onChange={(event) => setId(event.target.value)}>
                Funcionários
            </Employer>
            <Data className={styles.main} value={data} onChange={(event) => setData(event.target.value)}>
                Data
            </Data>
            <Hour className={styles.main} value={hour} onChange={(event) => setHour(event.target.value)}>
                Hora
            </Hour>
            <TopInformationsSelectInput
                className={styles.main}
                itens={types}
                value={type}
                onChange={(event) => setType(event.target.value)}
            >
                Tipo
            </TopInformationsSelectInput>
            <TopInformationsSelectInput 
                className={styles.main} 
                itens={locations} 
                value={local} 
                onChange={(event) => setLocal(event.target.value)}
            >
                Local
            </TopInformationsSelectInput>
            <TopInformationsApiSelectInput
                className={styles.main}
                itens={suplyTypes}
                value={suply}
                onChange={setSuplyData}
            >
                { vehicleText }
            </TopInformationsApiSelectInput>
            <TopInformationsApiSelectInput
                className={styles.main}
                itens={fuel}
                value={fuel}
                onChange={setCurrentFuel}
            >
                Combustível
            </TopInformationsApiSelectInput>
        </div>
    )
}