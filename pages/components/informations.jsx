import styles from '@/styles/components/informations.module.scss'
import TopInformations from './topInformations'
import MidInformations from './midInformations'
import StaticInformations from './staticInformations'
import Obs from './obs'
import PropButton from './propButton'

export default function Informations() {
    function formOnSubmit(data) {
        console.log(data)
    }

    return (
        <form className={styles.informations} onSubmit={ formOnSubmit }>
            <TopInformations topInfo={ formOnSubmit } />
            <MidInformations midInfo={ formOnSubmit } />
            <StaticInformations />
            <Obs obsInfo={ formOnSubmit } />
            <div className={styles.button}>
                <PropButton>
                    Salvar
                </PropButton>
            </div>
        </form>
    )
}