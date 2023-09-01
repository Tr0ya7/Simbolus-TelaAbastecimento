import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/pages/Home.module.scss'
import Image from 'next/image'
import LoginInformations from './components/loginInformations'
//import db from '../db_conection/DAO/teste.php'

const inter = Inter({ subsets: ['latin'] })

fetch('../db_conection/DAO/teste.php')
.then(response => {
  if (!response.ok) {
    console.log('Erro ao fazer a solicitação');
  }
  return response.json()
})
.then(data => {
  console.log(data);
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Abastecimento</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Image src="/images/worker.jpg" width="450" height="250" alt="worker" />
        <LoginInformations />
      </main>
    </>
  )
}