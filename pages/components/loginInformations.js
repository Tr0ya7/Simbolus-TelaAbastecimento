import styles from '@/styles/components/loginInformations.module.scss'
import PropInput from './propInput'
import PropButton from './propButton'
import { useState } from 'react'

export default function LoginInformations() {
    const [cpf, setCpf] = useState('')
    const [pass, setPass] = useState('')

    async function formOnSubmit(event) {
        var api = `http://192.168.2.199:5000/login/${cpf}/${pass}`
        event.preventDefault()
        
        await fetch(api)
        .then((res) => res.json())
        .then((data) => {
            if (data.msg == 'OK') {
                window.location.href = "./abastecimento"
            } else {
                alert('erro')
            }
        })
    }

    return (
        <form className={styles.loginInformations} onSubmit={ formOnSubmit }>
            <div>
                <p>
                    CPF
                </p>
                <PropInput value={ cpf } maxLength="11" change={ value => setCpf(value) } />
                <p>
                    Senha
                </p>
                <PropInput className="pass" type="password" value={ pass } change={ value => setPass(value) } />
            </div>
            <PropButton>
                Entrar
            </PropButton>
        </form>
    )
}