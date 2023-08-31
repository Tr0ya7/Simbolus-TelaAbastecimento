// arrumar a linha 13

import styles from '@/styles/components/loginInformations.module.scss'
import PropInput from './propInput'
import Link from 'next/link'

export default function LoginInformations() {
    return (
        <div className={styles.loginInformations}>
            <p>
                CPF
            </p>
            <PropInput type="number" maxLength="11" />
            <p>
                Senha
            </p>
            <PropInput type="password" />
            <Link href="./abastecimento">
                <button type="submit">
                    ENTRAR
                </button>
            </Link>
        </div>
    )
}