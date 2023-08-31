import styles from '@/styles/components/loginInformations.module.scss'
import PropInput from './propInput'

export default function LoginInformations() {
    return (
        <div className={styles.loginInformations}>
            <p>
                Funcionário
            </p>
            <PropInput />
            <p>
                Senha
            </p>
            <PropInput />
        </div>
    )
}