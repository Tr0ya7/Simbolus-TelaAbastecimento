import styles from '@/styles/components/informations.module.scss'
import TopInformations from './topInformations'
import MidInformations from './midInformations'
import StaticInformations from './staticInformations'
import Obs from './obs'
import PropButton from './propButton'

export default function Informations() {
    function informationsOnSubmit(data) {
        console.log(data)
    }

    return (
        <form className={styles.informations} onSubmit={ informationsOnSubmit }>
            <TopInformations topInfo={ informationsOnSubmit } />
            <MidInformations midInfo={ informationsOnSubmit } />
            <StaticInformations />
            <Obs obsInfo={ informationsOnSubmit } />
            <div className={styles.button}>
                <PropButton>
                    Salvar
                </PropButton>
            </div>
        </form>
    )
}