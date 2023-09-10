// enxutar as functions

import PropArrow from './propArrow'
import Prop_DropMenu from './prop_dropMenu'
import PropInput from './propInput'
import styles from '@/styles/components/topInformations.module.scss'
import LoginInformations from './loginInformations'
import { measure } from './midInformations'

export default function TopInformations() {
    function typeArrowOnClick() {
        const typeArrow = document.querySelector('#typeArrow')
    
        if (typeArrow) {
            const types = document.querySelector('#types_dropMenu')
            var rotate = typeArrow.style.rotate
    
            typeArrow.addEventListener('click', () => {
                if (rotate === 'unset') {
                    typeArrow.style.rotate = '180deg'
                    types.style.display = 'block'
                } else {
                    typeArrow.style.rotate = 'unset'
                    types.style.display = 'none'
                }
            })
        }
    }
    
    function localArrowOnClick() {
        const localArrow = document.querySelector('#localArrow')
    
        if (localArrow) {
            const local = document.querySelector('#local_dropMenu')
            var rotate = localArrow.style.rotate
    
            localArrow.addEventListener('click', () => {
                if (rotate === 'unset') {
                    localArrow.style.rotate = '180deg'
                    local.style.display = 'block'
                } else {
                    localArrow.style.rotate = 'unset'
                    local.style.display = 'none'
                }
            })
        }
    }
    
    function suplyTypeArrowOnClick() {
        const suplyTypeArrow = document.querySelector('#suplyTypeArrow')
    
        if (suplyTypeArrow) {
            const suplyType = document.querySelector('#suplyType_dropMenu')
            var rotate = suplyTypeArrow.style.rotate
    
            suplyTypeArrow.addEventListener('click', () => {
                if (rotate === 'unset') {
                    suplyTypeArrow.style.rotate = '180deg'
                    suplyType.style.display = 'block'
                } else {
                    suplyTypeArrow.style.rotate = 'unset'
                    suplyType.style.display = 'none'
                }
            })
        }
    }
    
    function fuelArrowOnClick() {
        const fuelArrow = document.querySelector('#fuelArrow')
    
        if (fuelArrow) {
            const fuel = document.querySelector('#fuel_dropMenu')
            var rotate = fuelArrow.style.rotate
    
            fuelArrow.addEventListener('click', () => {
                if (rotate === 'unset') {
                    fuelArrow.style.rotate = '180deg'
                    fuel.style.display = 'block'
                } else {
                    fuelArrow.style.rotate = 'unset'
                    fuel.style.display = 'none'
                }
            })
        }
    }

    function typeFirstValueOnClick() {
        const input = document.querySelector('#typeInput')
        var suply = document.querySelector('.suply')
        const firstValue = document.querySelector('.type_firstOption')
        //var measure = document.querySelector('.measure') //fazer funcionar

        input.value = firstValue.textContent
        suply.innerHTML = "Veículo"
        //measure.innerHTML = "Quilometragem" //fazer funcionar
    }

    function typeSecondValueOnClick() {
        const input = document.querySelector('#typeInput')
        var suply = document.querySelector('.suply')
        const secondValue = document.querySelector('.type_secondOption')
        //var measure = document.querySelector('.measure') //fazer funcionar

        input.value = secondValue.textContent
        suply.innerHTML = "Gerador"
        //measure.innerHTML = "Horimetro" //fazer funcionar
    }

    function localFirstValueOnClick() {
        const input = document.querySelector('#localInput')
        const firstValue = document.querySelector('.local_firstOption')

        input.value = firstValue.textContent
    }

    function localSecondValueOnClick() {
        const input = document.querySelector('#localInput')
        const secondValue = document.querySelector('.local_secondOption')

        input.value = secondValue.textContent
    }

    function suplyTypeFirstValueOnClick() {
        const input = document.querySelector('#suplyTypeInput')
        const firstValue = document.querySelector('.suplyType_firstOption')

        input.value = firstValue.textContent
    }
    
    function suplyTypeSecondValueOnClick() {
        const input = document.querySelector('#suplyTypeInput')
        const secondValue = document.querySelector('.suplyType_secondOption')
        
        input.value = secondValue.textContent
    }

    function fuelFirstValueOnClick() {
        const input = document.querySelector('#fuelInput')
        const firstValue = document.querySelector('.fuel_firstOption')
    
        input.value = firstValue.textContent
    }
    
    function fuelSecondValueOnClick() {
        const input = document.querySelector('#fuelInput')
        const secondValue = document.querySelector('.fuel_secondOption')
    
        input.value = secondValue.textContent
    }

    return (
        <div className={styles.topInformations}>
            <div className={styles.main}>
                <p>
                    Funcionário Responsável
                </p>
                <PropInput id="employersInput" disabled="disabled" value={ LoginInformations.cnpj } />
            </div>
            <div className={styles.main}>
                <p>
                    Data
                </p>
                <PropInput className="dataInput" maxLength="8" />
            </div>
            <div className={styles.main}>
                <p>
                    Hora
                </p>
                <PropInput />
            </div>
            <div className={styles.main}>
                <p>
                    Tipo
                </p>
                <PropInput id="typeInput" value="Veículo" disabled="disabled" />
                <PropArrow className={styles.arrow} id="typeArrow" onClick={ typeArrowOnClick } />
                <Prop_DropMenu 
                    id="types_dropMenu" 
                    classNameFirstOption="type_firstOption"
                    firstOptionOnClick={ typeFirstValueOnClick }
                    text="Veículo"
                    classNameSecondOption="type_secondOption" 
                    secondOptionOnClick={ typeSecondValueOnClick }
                    text1="Gerador"
                />
            </div>
            <div className={styles.main}>
                <p>
                    Local
                </p>
                <PropInput id="localInput" disabled="disabled" />
                <PropArrow className={styles.arrow} id="localArrow" onClick={ localArrowOnClick } />
                <Prop_DropMenu 
                    id="local_dropMenu" 
                    classNameFirstOption="local_firstOption"
                    firstOptionOnClick={ localFirstValueOnClick }
                    text="Local"
                    classNameSecondOption="local_secondOption"
                    secondOptionOnClick={ localSecondValueOnClick }
                    text1="Terceiros"
                />
            </div>
            <div className={styles.main}>
                <p className="suply">
                    Veículo
                </p>
                <PropInput id="suplyTypeInput" disabled="disabled" />
                <PropArrow className={styles.arrow} id="suplyTypeArrow" onClick={ suplyTypeArrowOnClick } />
                <Prop_DropMenu 
                    id="suplyType_dropMenu"
                    classNameFirstOption="suplyType_firstOption"
                    firstOptionOnClick={ suplyTypeFirstValueOnClick }
                    text="..." 
                    classNameSecondOption="suplyType_secondOption"
                    secondOptionOnClick={ suplyTypeSecondValueOnClick }
                    text1="..." 
                />
            </div>
            <div className={styles.main}>
                <p>
                    Combustível
                </p>
                <PropInput id="fuelInput" disabled="disabled" />
                <PropArrow className={styles.arrow} id="fuelArrow" onClick={ fuelArrowOnClick } />
                <Prop_DropMenu
                    id="fuel_dropMenu"
                    classNameFirstOption="fuel_firstOption"
                    firstOptionOnClick={ fuelFirstValueOnClick }
                    text="..."
                    classNameSecondOption="fuel_secondOption"
                    secondOptionOnClick={ fuelSecondValueOnClick }
                    text1="..."
                />
            </div>
        </div>
    )
}