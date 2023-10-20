import styles from '@/styles/components/loginInformations.module.scss'
import PropButton from './propButton'
import { useContext, useState } from 'react'
import { UserContext } from './common'
import { useRouter } from 'next/router'
import Cpf from './cpf'
import Pass from './pass'
import Image from 'next/image'

export default function LoginInformations() {
    var [currentCpf, setCurrentCpf] = useState('')
    const [pass, setPass] = useState('')
    const {path, setId} = useContext(UserContext)
    const router = useRouter()

    async function login(event) {
        var api = `${path}/login/${currentCpf}/${pass}`

        event.preventDefault()
        await fetch(api)
            .then((res) => res.json())
            .then((data) => {
                if (data.msg === 'OK') {
                    currentCpf = data.fun_codigo
                    setId(currentCpf)
                    router.push('/abastecimento')
                } else {
                    alert('erro')
                }
            })
    }

    return (
        <form className={styles.loginInformations} onSubmit={ login }>
            <div>
                <Image 
                    src="https://www.eletrotecnicamarmontel.com.br/imagens/logo.png" 
                    width={300}
                    height={80}
                />
                <Cpf value={currentCpf} onChange={setCurrentCpf}>
                    Cpf
                </Cpf>
                <Pass value={pass} onChange={setPass}>
                    Senha
                </Pass>
            </div>
            <PropButton 
                className={currentCpf.length === 11 || pass.length >= 1
                    ? `${styles.button}` 
                    : `${styles.disabledButton}`}
            >
                Entrar
            </PropButton>
        </form>
    )
}