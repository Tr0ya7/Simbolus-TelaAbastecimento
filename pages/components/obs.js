import styles from '@/styles/components/obs.module.scss'

export default function Obs() {
    return (
        <div className={styles.obs}>
            <div>
                <p>
                    Observação
                </p>
                <textarea type="text" />
            </div>
        </div>
    )
}