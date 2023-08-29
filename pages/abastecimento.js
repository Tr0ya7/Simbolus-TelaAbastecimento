import styles from '@/styles/pages/abastecimento.module.scss'
import PropInput from './components/propInput'
import Image from 'next/image'
import PropArrow from './components/propArrow'

export default function Abastecimento() {
    function arrowOnClick() { 
        if (employersArrow) {
            employersArrow.addEventListener('click', () => {
                const employersArrow = document.querySelector('#employersArrow')
                var rotate = employersArrow.style.rotate

                if (rotate === 'unset') {
                    employersArrow.style.rotate = '180deg'
                } else {
                    employersArrow.style.rotate = 'unset'
                }
            })
        }

        if (typeArrow) {
            typeArrow.addEventListener('click', () => {
                const typeArrow = document.querySelector('#typeArrow')
                var rotate = typeArrow.style.rotate

                if (rotate === 'unset') {
                    typeArrow.style.rotate = '180deg'
                } else {
                    typeArrow.style.rotate = 'unset'
                }
            })
        }

        if (localArrow) {
            localArrow.addEventListener('click', () => {
                const localArrow = document.querySelector('#localArrow')
                var rotate = localArrow.style.rotate

                if (rotate === 'unset') {
                    localArrow.style.rotate = '180deg'
                } else {
                    localArrow.style.rotate = 'unset'
                }
            })
        }

        if (vehicleArrow) {
            vehicleArrow.addEventListener('click', () => {
                const vehicleArrow = document.querySelector('#vehicleArrow')
                var rotate = vehicleArrow.style.rotate

                if (rotate === 'unset') {
                    vehicleArrow.style.rotate = '180deg'
                } else {
                    vehicleArrow.style.rotate = 'unset'
                }
            })
        }
        
        if (fuelArrow) {
            fuelArrow.addEventListener('click', () => {
                const fuelArrow = document.querySelector('#fuelArrow')
                var rotate = fuelArrow.style.rotate

                if (rotate === 'unset') {
                    fuelArrow.style.rotate = '180deg'
                } else {
                    fuelArrow.style.rotate = 'unset'
                }
            })
        }
    }

    const dataInput = document.querySelector('.dataInput')

    if (dataInput) {
        dataInput.addEventListener('keypress', () => {
            value = dataInput.value.length
    
            if (dataInput.length === 3) {
                input.value = '/'
            }
        })
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
                    <PropInput />
                    <PropArrow className={styles.arrow} id="employersArrow" onClick={ arrowOnClick } />
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
                    <PropInput />
                    <PropArrow className={styles.arrow} id="typeArrow" onClick={ arrowOnClick } />
                </div>
                <div>
                    <p>
                        Local
                    </p>
                    <PropInput />
                    <PropArrow className={styles.arrow} id="localArrow" onClick={ arrowOnClick } />
                </div>
                <div>
                    <p>
                        Veículo
                    </p>
                    <PropInput />
                    <PropArrow className={styles.arrow} id="vehicleArrow" onClick={ arrowOnClick } />
                </div>
                <div>
                    <p>
                        Combustível
                    </p>
                    <PropInput />
                    <PropArrow className={styles.arrow} id="fuelArrow" onClick={ arrowOnClick } />
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
                        <input type="text" />
                    </div>
                </div>
            </div>
        </div>
    )
}