import styles from '@/styles/pages/abastecimento.module.scss'
import Head from 'next/head'
import Informations from './components/informations'

export default function Abastecimento() {
    return (
        <>
            <Head>
                <title>Abastecimento</title>
            </Head>
            <div className={styles.main}>
                <Informations />
            </div>
        </>
    )
}