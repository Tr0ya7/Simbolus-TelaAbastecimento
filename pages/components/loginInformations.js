import styles from '@/styles/components/loginInformations.module.scss'
import DefaultInput from './propInput'

export default function LoginInformations() {
    return (
        <div className={styles.loginInformations}>
            <p>
                Funcionário
            </p>
            <DefaultInput />
            <p>
                Senha
            </p>
            <DefaultInput />
        </div>
    )
}