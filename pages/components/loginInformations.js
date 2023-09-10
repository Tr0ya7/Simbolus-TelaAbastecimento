// arrumar a linha 13

import styles from '@/styles/components/loginInformations.module.scss'
import PropInput from './propInput'
import Link from 'next/link'
import PropButton from './propButton'
import { useState } from 'react'

export default function LoginInformations() {
    const [cnpj, setCnpj] = useState('')

    return (
        <div className={styles.loginInformations}>
            <div>
                <p>
                    CNPJ
                </p>
                <PropInput value={ cnpj } maxLength="11" change={ value => setCnpj(value) } />
                <p>
                    Senha
                </p>
                <PropInput type="password" />
            </div>
            <Link href="./abastecimento">
                <PropButton type="submit">
                    Entrar
                </PropButton>
            </Link>
            <Link href="../pages/reset">
                <p className={styles.forgotPass}>
                    Esqueceu a senha
                </p>
            </Link>
        </div>
    )
}