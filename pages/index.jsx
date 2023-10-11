import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/pages/Home.module.scss'
import Image from 'next/image'
import LoginInformations from './components/loginInformations'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  /*function API() {
    const url = 'http://192.168.2.199:5000/veiculos'
    fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data))
  }*/

  //API()
  
  return (
    <>
      <Head>
        <title>Abastecimento</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
          <div> 
            <Image src="/images/worker.jpg" width="640" height="427" alt="worker" />
          </div>
          <LoginInformations />
      </main>
    </>
  )
}