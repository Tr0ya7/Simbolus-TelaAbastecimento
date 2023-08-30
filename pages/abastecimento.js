import styles from '@/styles/pages/abastecimento.module.scss'
import PropInput from './components/propInput'
import Image from 'next/image'
import PropArrow from './components/propArrow'
import Prop_DropMenu from './components/prop_dropMenu'

export default function Abastecimento() {
    function arrowOnClick() {
        if (employersArrow) {
            const employersArrow = document.querySelector('#employersArrow')
            const employers = document.querySelector('#employers_dropMenu')
            var currentDisplay = employers.style.display
            var rotate = employersArrow.style.rotate

            employersArrow.addEventListener('click', () => {
                if (rotate === 'unset') {
                    employersArrow.style.rotate = '180deg'
                } else {
                    employersArrow.style.rotate = 'unset'
                }

                if (currentDisplay === 'none') {
                    employers.style.display = 'block'
                } else {
                    employers.style.display = 'none'
                }
            })
        }

        if (typeArrow) {
            const typeArrow = document.querySelector('#typeArrow')
            const types = document.querySelector('#types_dropMenu')
            var currentDisplay = types.style.display
            var rotate = typeArrow.style.rotate

            typeArrow.addEventListener('click', () => {
                if (rotate === 'unset') {
                    typeArrow.style.rotate = '180deg'
                } else {
                    typeArrow.style.rotate = 'unset'
                }

                if (currentDisplay === 'none') {
                    types.style.display = 'block'
                } else {
                    types.style.display = 'none'
                }
            })
        }

        if (localArrow) {
            const localArrow = document.querySelector('#localArrow')
            const local = document.querySelector('#local_dropMenu')
            var currentDisplay = local.style.display
            var rotate = localArrow.style.rotate

            localArrow.addEventListener('click', () => {
                if (rotate === 'unset') {
                    localArrow.style.rotate = '180deg'
                } else {
                    localArrow.style.rotate = 'unset'
                }

                if (currentDisplay === 'none') {
                    local.style.display = 'block'
                } else {
                    local.style.display = 'none'
                }
            })
        }

        if (suplyTypeArrow) {
            const suplyTypeArrow = document.querySelector('#suplyTypeArrow')
            const suplyType = document.querySelector('#suplyType_dropMenu')
            var currentDisplay = suplyType.style.display
            var rotate = suplyTypeArrow.style.rotate

            suplyTypeArrow.addEventListener('click', () => {
                if (rotate === 'unset') {
                    suplyTypeArrow.style.rotate = '180deg'
                } else {
                    suplyTypeArrow.style.rotate = 'unset'
                }

                if (currentDisplay === 'none') {
                    suplyType.style.display = 'block'
                } else {
                    suplyType.style.display = 'none'
                }
            })
        }
        
        if (fuelArrow) {
            const fuelArrow = document.querySelector('#fuelArrow')
            const fuel = document.querySelector('#fuel_dropMenu')
            var currentDisplay = fuel.style.display
            var rotate = fuelArrow.style.rotate

            fuelArrow.addEventListener('click', () => {
                if (rotate === 'unset') {
                    fuelArrow.style.rotate = '180deg'
                } else {
                    fuelArrow.style.rotate = 'unset'
                }

                if (currentDisplay === 'none') {
                    fuel.style.display = 'block'
                } else {
                    fuel.style.display = 'none'
                }
            })
        }
    }

    return (
        <div className={styles.main}>
            <p className={styles.title}>
                Abastecimento
            </p>
            <hr />
            <div className={styles.informations}>
                <div>
                    <p>
                        Código
                    </p>
                    <PropInput />
                    <Image src="/images/table_.png" width="15" height="15" alt="table" />
                </div>
                <div>
                    <p>
                        Funcionário Responsável
                    </p>
                    <PropInput id="employersInput" onClick={ arrowOnClick } disabled="disabled" />
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
                    <PropInput value="Veículo" onClick={ arrowOnClick } disabled="disabled" />
                    <PropArrow className={styles.arrow} id="typeArrow" onClick={ arrowOnClick } />
                    <Prop_DropMenu id="types_dropMenu" text="Veículo" text1="Gerador" />
                </div>
                <div>
                    <p>
                        Local
                    </p>
                    <PropInput onClick={ arrowOnClick } disabled="disabled" />
                    <PropArrow className={styles.arrow} id="localArrow" onClick={ arrowOnClick } />
                    <Prop_DropMenu id="local_dropMenu" text="Local" text1="Terceiros" />
                </div>
                <div>
                    <p>
                        Veículo
                    </p>
                    <PropInput onClick={ arrowOnClick } disabled="disabled" />
                    <PropArrow className={styles.arrow} id="suplyTypeArrow" onClick={ arrowOnClick } />
                    <Prop_DropMenu id="suplyType_dropMenu" text="..." text1="..." />
                </div>
                <div>
                    <p>
                        Combustível
                    </p>
                    <PropInput onClick={ arrowOnClick } disabled="disabled" />
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