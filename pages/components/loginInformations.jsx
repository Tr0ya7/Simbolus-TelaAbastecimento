import styles from '@/styles/components/loginInformations.module.scss'
import PropButton from './propButton'
import { useContext, useState } from 'react'
import { UserContext } from './common'
import Link from 'next/link'
import Input from './input'

export default function LoginInformations() {
    const [pass, setPass] = useState('')
    const {cpf, setCpf} = useContext(UserContext)

    function login(event) {
        event.preventDefault()
        console.log(cpf, pass)

        //if (cpf === '123' && pass === 'teste') {
        //    window.location.href = '/abastecimento'
        //} else {
       //     alert('erro')
       // }
        
        //var api = `http://192.168.2.199:5000/login/${data.currentCpf}/${pass}`

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