import { useContext, useEffect, useState } from 'react'
import Employer from './employer'
import Data from './data'
import Hour from './hour'
import { UserContext } from '@/common'
import TopInformationsSelectInput from './topInformationsSelectInput'
import TopInformationsApiSelectInput from './topInformationsApiSelectInput'

export default function TopInformations(props) {
    const {path, id, setId, type, setType} = useContext(UserContext)
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
    var currentLocal = ''
    const [suply, setSuply] = useState({})
    var [currentSuply, setCurrentSuply] = useState(suply)
    const [suplyGenerators, setSuplyGenerators] = useState([])
    const [fuel, setFuel] = useState([])
    const [currentFuel, setCurrentFuel] = useState(fuel)
    [type, setType] = useState(types)
    var currentType = ''

    if (local === locations[0]) {
        currentLocal = 0
    } else if (local === locations[1]) {
        currentLocal = 1
    }

    var vehicleText = 'Veículos'

    if (type === 'Veículo') {
        vehicleText = 'Veículos'
        currentType = 0
    } else if (type === 'Gerador') {
        vehicleText = 'Geradores'
        currentType = 1
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

    const [fetchedData, setFetchedData] = useState(false);
    
    if (fetchedData === false) {
        fetchDataVehicles();
        setFetchedData(true)
    }

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
    } else if (type === 'Veículo') {
        suplyTypes = suply
    }

    useEffect(() => {
        props.funId({
            fun_codigo: id,
        })

        props.topInfo({
            data: data,
            hora: hour,
            tipo: currentType,
            local: currentLocal,
            bem_codigo: currentSuply.codigo,
            pro_codigo: currentFuel.codigo
        })
    }, [id, data, hour, currentType, currentLocal, currentSuply, currentFuel])

    return (
        <>
            <Employer value={id} onChange={(event) => setId(event.target.value)}>
                Funcionários
            </Employer>
            <Data value={data} onChange={(event) => setData(event.target.value)}>
                Data
            </Data>
            <Hour value={hour} onChange={(event) => setHour(event.target.value)}>
                Hora
            </Hour>
            <TopInformationsSelectInput
                itens={types}
                value={type}
                onChange={(event) => setType(event.target.value)}
            >
                Tipo
            </TopInformationsSelectInput>
            <TopInformationsSelectInput 
                itens={locations} 
                value={local} 
                onChange={(event) => setLocal(event.target.value)}
            >
                Local
            </TopInformationsSelectInput>
            <TopInformationsApiSelectInput itens={suplyTypes} value={suplyTypes} onChange={setCurrentSuply}>
                { vehicleText }
            </TopInformationsApiSelectInput>
            <TopInformationsApiSelectInput itens={fuel} value={fuel} onChange={setCurrentFuel}>
                Combustível
            </TopInformationsApiSelectInput>
        </>
    )
}