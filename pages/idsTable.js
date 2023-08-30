import styles from '@/styles/pages/idsTable.module.scss'

export default function IdsTable() {
    return (
    <div class={styles.table}>
        <div class={styles.field}>
            Descrição
        </div>
        <div class={styles.field}>
            Placa/N. Série
        </div>
        <div class={styles.field}>
            Funcionário
        </div>
        <div class={styles.field}>
            Data
        </div>
        <div class={styles.field}>
            Tipo
        </div>
        <div class={styles.field}>
            Código
        </div>
        <div class={styles.subField}>
            ...
        </div>
        <div class={styles.subField}>
            ...
        </div>
        <div class={styles.subField}>
            ...
        </div>
        <div class={styles.subField}>
            ...
        </div>
        <div class={styles.subField}>
            ...
        </div>
        <div class={styles.subField}>
            ...
        </div>
    </div>
    )
}