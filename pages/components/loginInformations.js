import styles from '@/styles/components/loginInformations.module.scss'
import PropButton from './propButton'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { saveData } from '../store/reducers/employer'
import { useState } from 'react'

export default function() {
    const dispatch = useDispatch()
    const [pass, setPass] = useState('')
    const employer = useSelector(state => state.employer)
    const { register, handleSubmit } = useForm({
        currentCpf: 0
    })

    async function login(data) {
        dispatch(saveData({ currentCpf: data.currentCpf }))
        
        var api = `http://192.168.2.199:5000/login/${data.currentCpf}/${pass}`

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
        <form className={styles.loginInformations} onSubmit={ handleSubmit(login) }>
            <div>
                <p>
                    CPF
                </p>
                <input
                    {...register('currentCpf', { required: true })}
                    maxLength="11"
                />
                <p>
                    Senha
                </p>
                <input
                    {...register('currentPass')} 
                    className="pass"
                    value={ pass }
                    type="password"
                    onChange={ event => setPass(event.target.value) }
                />
            </div>
            <PropButton>
                Entrar
            </PropButton>
        </form>
    )
}