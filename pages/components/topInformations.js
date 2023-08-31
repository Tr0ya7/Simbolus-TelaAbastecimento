import Image from 'next/image'
import PropArrow from './propArrow'
import Prop_DropMenu from './prop_dropMenu'
import Link from 'next/link'
import PropInput from './propInput'
import styles from '@/styles/components/topInformations.module.scss'

export default function TopInformations() {
    function arrowOnClick() {
        const employersArrow = document.querySelector('#employersArrow')
        const typeArrow = document.querySelector('#typeArrow')
        const suplyTypeArrow = document.querySelector('#suplyTypeArrow')
        const localArrow = document.querySelector('#localArrow')
        const fuelArrow = document.querySelector('#fuelArrow')

        if (employersArrow) {
            const employers = document.querySelector('#employers_dropMenu')
            var rotate = employersArrow.style.rotate

            employersArrow.addEventListener('click', () => {
                if (rotate === 'unset') {
                    employersArrow.style.rotate = '180deg'
                    employers.style.display = 'block'
                } else {
                    employersArrow.style.rotate = 'unset'
                    employers.style.display = 'none'
                }
            })
        }

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

    function firstOptionOnClick() {
        const input = document.querySelector('#type_input')
        const value = document.querySelector('#first_option')

        if (value) {
            input.value = value.textContent
        }
    }

    function secondOptionOnClick() {
        const input = document.querySelector('#type_input')
        const value = document.querySelector('#second_option')

        if (value) {
            input.value = value.textContent
        }
    }

    return (
        <>
            <div className={styles.main}>
                <p>
                    Código
                </p>
                <PropInput />
                <Link href="../idsTable">
                    <Image src="/images/table_.png" width="15" height="15" alt="table" />
                </Link>
            </div>
            <div className={styles.main}>
                <p>
                    Funcionário Responsável
                </p>
                <PropInput id="employersInput" disabled="disabled" />
                <PropArrow className={styles.arrow} id="employersArrow" onClick={arrowOnClick} />
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
                <PropInput id="type_input" value="Veículo" disabled="disabled" />
                <PropArrow className={styles.arrow} id="typeArrow" onClick={arrowOnClick} />
                <Prop_DropMenu id="types_dropMenu" firstOptionOnClick={firstOptionOnClick} text="Veículo" secondOptionOnClick={secondOptionOnClick} text1="Gerador" />
            </div>
            <div className={styles.main}>
                <p>
                    Local
                </p>
                <PropInput disabled="disabled" />
                <PropArrow className={styles.arrow} id="localArrow" onClick={arrowOnClick} />
                <Prop_DropMenu id="local_dropMenu" text="Local" text1="Terceiros" />
            </div>
            <div className={styles.main}>
                <p>
                    Veículo
                </p>
                <PropInput disabled="disabled" />
                <PropArrow className={styles.arrow} id="suplyTypeArrow" onClick={arrowOnClick} />
                <Prop_DropMenu id="suplyType_dropMenu" text="..." text1="..." />
            </div>
            <div className={styles.main}>
                <p>
                    Combustível
                </p>
                <PropInput disabled="disabled" />
                <PropArrow className={styles.arrow} id="fuelArrow" onClick={arrowOnClick} />
                <Prop_DropMenu id="fuel_dropMenu" text="..." text1="..." />
            </div>
        </>
    )
}