import styles from '@/styles/components/header.module.scss'
import Link from 'next/link'

export default function Header() {
    return (
        <header className={styles.main}>
            <div>
                <p className={styles.title}>
                    Abastecimento
                </p>
                <Link href="/">
                    <p className={styles.leave}>
                        Sair
                    </p>
                </Link>
            </div>
            <hr />
        </header>
    )
}