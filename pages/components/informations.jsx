import styles from '@/styles/components/informations.module.scss'
import TopInformations from './topInformations'
import MidInformations from './midInformations'
import StaticInformations from './staticInformations'
import Obs from './obs'
import PropButton from './propButton'

export default function Informations() {
    function informationsOnClick(data) {
        console.log(data)
    }

    return (
        <form className={styles.informations}>
            <TopInformations topInfo={ informationsOnClick } />
            <MidInformations midInfo={ informationsOnClick } />
            <StaticInformations />
            <Obs obsInfo={ informationsOnClick } />
            <div className={styles.button}>
                <PropButton onClick={ informationsOnClick }>
                    Salvar
                </PropButton>
            </div>
        </form>
    )
}