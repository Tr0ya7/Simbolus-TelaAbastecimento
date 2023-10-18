import styles from '@/styles/components/loginInformations.module.scss'
import PropButton from './propButton'
import { useContext, useState } from 'react'
import { UserContext } from './common'
import Input from './input'
import { useRouter } from 'next/router'

export default function LoginInformations() {
    var [currentCpf, setCurrentCpf] = useState('')
    const [pass, setPass] = useState('')
    const {setId} = useContext(UserContext)
    const router = useRouter()

    async function login(event) {
        const path = 'http://192.168.2.199:5000'
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
                <p>
                    CPF
                </p>
                <Input
                    value={currentCpf} 
                    maxLength={11}
                    onChange={(event) => setCurrentCpf(event.target.value)}  
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
                className={currentCpf.length < 11 || pass.length < 5 ? `${styles.disabledButton}`: ``}   
            >
                Entrar
            </PropButton>
        </form>
    )
}