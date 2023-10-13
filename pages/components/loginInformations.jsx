import styles from '@/styles/components/loginInformations.module.scss'
import PropButton from './propButton'
import { useContext, useState } from 'react'
import { UserContext } from './common'
import Input from './input'
import Link from 'next/link'

export default function LoginInformations() {
    const [pass, setPass] = useState('')
    const {cpf, setCpf} = useContext(UserContext)

    async function login(event) {
        event.preventDefault()
        console.log(cpf, pass)

        var api = `http://192.168.2.199:5000/login/${cpf}/${pass}`

        /*await fetch(api)
            .then((res) => res.json())
            .then((data) => {
                if (data.msg === 'OK') {
                    window.location.href = "./abastecimento"
                } else {
                    alert('erro')
                }
            })*/
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
                    type="number"
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
            <Link href="/abastecimento">
                <PropButton>
                    Entrar
                </PropButton>
            </Link>
        </form>
    )
}