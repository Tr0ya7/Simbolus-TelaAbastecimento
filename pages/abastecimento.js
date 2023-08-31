import styles from '@/styles/pages/abastecimento.module.scss'
import PropInput from './components/propInput'
import Image from 'next/image'
import PropArrow from './components/propArrow'
import Prop_DropMenu from './components/prop_dropMenu'
import Link from 'next/link'

export default function Abastecimento() {
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
        <div className={styles.main}>
            <header>
                <div>
                    <p className={styles.title}>
                        Abastecimento
                    </p>
                    <Link href="/">
                        <p className={styles.leave}>
                            Sair
                        </p>
                    </Link>
                </div>
                <hr />
            </header>
            <div className={styles.informations}>
                <div>
                    <p>
                        Código
                    </p>
                    <PropInput />
                    <Link href="../idsTable">
                        <Image src="/images/table_.png" width="15" height="15" alt="table" />
                    </Link>
                </div>
                <div>
                    <p>
                        Funcionário Responsável
                    </p>
                    <PropInput id="employersInput" disabled="disabled" />
                    <PropArrow className={styles.arrow} id="employersArrow" onClick={ arrowOnClick } />
                    <Prop_DropMenu id="employers_dropMenu" text="..." text1="..." />
                </div>
                <div>
                    <p>
                        Data
                    </p>
                    <PropInput className="dataInput" maxLength="8" />
                </div>
                <div>
                    <p>
                        Hora
                    </p>
                    <PropInput />
                </div>
                <div>
                    <p>
                        Tipo
                    </p>
                    <PropInput id="type_input" value="Veículo" disabled="disabled" />
                    <PropArrow className={styles.arrow} id="typeArrow" onClick={ arrowOnClick } />
                    <Prop_DropMenu id="types_dropMenu" firstOptionOnClick={ firstOptionOnClick } text="Veículo" secondOptionOnClick={ secondOptionOnClick } text1="Gerador" />
                </div>
                <div>
                    <p>
                        Local
                    </p>
                    <PropInput disabled="disabled" />
                    <PropArrow className={styles.arrow} id="localArrow" onClick={ arrowOnClick } />
                    <Prop_DropMenu id="local_dropMenu" text="Local" text1="Terceiros" />
                </div>
                <div>
                    <p>
                        Veículo
                    </p>
                    <PropInput disabled="disabled" />
                    <PropArrow className={styles.arrow} id="suplyTypeArrow" onClick={ arrowOnClick } />
                    <Prop_DropMenu id="suplyType_dropMenu" text="..." text1="..." />
                </div>
                <div>
                    <p>
                        Combustível
                    </p>
                    <PropInput disabled="disabled" />
                    <PropArrow className={styles.arrow} id="fuelArrow" onClick={ arrowOnClick } />
                    <Prop_DropMenu id="fuel_dropMenu" text="..." text1="..." />
                </div>
                <div className={styles.midInformations}>
                    <div>
                        <p>
                            Kilometragem
                        </p>
                        <PropInput />
                    </div>
                    <div>
                        <p>
                            Litros
                        </p>
                        <PropInput />
                    </div>
                    <div className={styles.expense}>
                        <p>
                            Custo/Litro
                        </p>
                        <PropInput />
                    </div>
                </div>
                <div className={styles.staticInformations}>
                    <div>
                        <p>
                            Data e Hora:
                        </p>
                    </div>
                    <div>
                        <p>
                            Usuário:
                        </p>
                    </div>
                </div>
                <div className={styles.obs}>
                    <div>
                        <p>
                            Observação
                        </p>
                        <textarea type="text" />
                    </div>
                </div>
            </div>
        </div>
    )
}