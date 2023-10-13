import styles from '@/styles/pages/abastecimento.module.scss'
import Header from './components/header'
import Informations from './components/informations'

export default function Abastecimento() {
    return <div className={styles.main}><Header /><Informations /></div>
}