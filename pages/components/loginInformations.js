import styles from '@/styles/components/loginInformations.module.scss'
import PropButton from './propButton'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { saveData } from '../store/reducers/employer'

export default function() {
    const dispatch = useDispatch()

    const employer = useSelector(state => state.employer)
    const { register, handleSubmit } = useForm({
        defaultValues: {
            currentCpf: '',
            currentPass: ''
        }
    })

    async function login(data, event) {
        event.preventDefault()
        dispatch(saveData({ currentCpf: data.currentCpf }))
        
        var api = `http://192.168.2.199:5000/login/${data.currentCpf}/${data.currentPass}`

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
                    {...register('currentCpf', { required: true, valueAsNumber: true })}
                    maxLength="11"
                />
                <p>
                    Senha
                </p>
                <input
                    {...register('currentPass')} 
                    className="pass"
                    type="password"
                />
            </div>
            <PropButton>
                Entrar
            </PropButton>
        </form>
    )
}