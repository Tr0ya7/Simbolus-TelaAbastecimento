// enxutar as functions

import PropArrow from './propArrow'
import Prop_DropMenu from './prop_dropMenu'
import PropInput from './propInput'
import styles from '@/styles/components/topInformations.module.scss'

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

    return (
        <div className={styles.topInformations}>
            <div className={styles.main}>
                <p>
                    Funcionário Responsável
                </p>
                <PropInput id="employersInput" disabled="disabled" />
                <Prop_DropMenu id="employers_dropMenu" text="..." text1="..." />
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
                <Prop_DropMenu id="types_dropMenu" classNameFirstOption="type_firstOption" text="Veículo" classNameSecondOption="type_secondOption" text1="Gerador" />
            </div>
            <div className={styles.main}>
                <p>
                    Local
                </p>
                <PropInput disabled="disabled" />
                <PropArrow className={styles.arrow} id="localArrow" onClick={ localArrowOnClick } />
                <Prop_DropMenu id="local_dropMenu" text="Local" text1="Terceiros" />
            </div>
            <div className={styles.main}>
                <p>
                    Veículo
                </p>
                <PropInput disabled="disabled" />
                <PropArrow className={styles.arrow} id="suplyTypeArrow" onClick={ suplyTypeArrowOnClick } />
                <Prop_DropMenu id="suplyType_dropMenu" text="..." text1="..." />
            </div>
            <div className={styles.main}>
                <p>
                    Combustível
                </p>
                <PropInput disabled="disabled" />
                <PropArrow className={styles.arrow} id="fuelArrow" onClick={ fuelArrowOnClick } />
                <Prop_DropMenu id="fuel_dropMenu" text="..." text1="..." />
            </div>
        </div>
    )
}