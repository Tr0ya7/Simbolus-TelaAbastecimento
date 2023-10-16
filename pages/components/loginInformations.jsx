import styles from '@/styles/components/loginInformations.module.scss'
import PropButton from './propButton'
import { useContext, useState } from 'react'
import { UserContext } from './common'
import Input from './input'
import { useRouter } from 'next/router'

export default function LoginInformations() {
    const [pass, setPass] = useState('')
    const {cpf, setCpf} = useContext(UserContext)
    const router = useRouter();

    async function login(event) {
        event.preventDefault()
        console.log(cpf, pass)

        var api = `http://192.168.2.199:5000/login/${cpf}/${pass}`

        await fetch(api)
            .then((res) => res.json())
            .then((data) => {
                if (data.msg === 'OK') {
                    router.push('./abastecimento')
                } else {
                    alert('erro')
                }
            })
    }

    return (
        <form className={styles.loginInformations} onSubmit={ login }>
            <div>
                <p>
                    CPF
                </p>
                <Input
                    value={cpf} 
                    onChange={(event) => setCpf(event.target.value)}
                    
                />
                <p>
                    Senha
                </p>
                <Input
                    className="pass"
                    value={pass}
                    type="password"
                    onChange={(event) => setPass(event.target.value)}
                />
            </div>
            <PropButton 
                className={cpf.length < 11 || pass.length < 5 ? `${styles.disabledButton}`: ``}
            >
                Entrar
            </PropButton>
        </form>
    )
}