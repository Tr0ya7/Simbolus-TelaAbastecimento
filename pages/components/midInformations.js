import PropInput from './propInput'
import styles from '@/styles/components/midInformations.module.scss'

export default function MidInformations() {
    return (
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
    )
}