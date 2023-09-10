import styles from '@/styles/components/informations.module.scss'
import TopInformations from './topInformations'
import MidInformations from './midInformations'
import StaticInformations from './staticInformations'
import Obs from './obs'
import PropButton from './propButton'

export default function Informations() {
    return (
        <form className={styles.informations}>
            <TopInformations />
            <MidInformations />
            <StaticInformations />
            <Obs />
            <div className={styles.button}>
                <PropButton>
                    Salvar
                </PropButton>
            </div>
        </form>
    )
}