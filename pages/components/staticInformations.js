import styles from '@/styles/components/staticInformations.module.scss'

export default function StaticInformations() {
    return (
        <div className={styles.staticInformations}>
            <div>
                <p>
                    Data e Hora:
                </p>
            </div>
            <div>
                <p>
                    Usuário:
                </p>
            </div>
        </div>
    )
}