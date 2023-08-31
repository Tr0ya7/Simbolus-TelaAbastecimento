import styles from '@/styles/components/informations.module.scss'
import TopInformations from './topInformations'
import MidInformations from './midInformations'
import StaticInformations from './staticInformations'
import Obs from './obs'

export default function Informations() {
    return (
        <div className={styles.informations}>
            <TopInformations />
            <MidInformations />
            <StaticInformations />
            <Obs />
        </div>
    )
}