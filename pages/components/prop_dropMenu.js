import styles from '@/styles/components/prop_dropMenu.module.scss'

export default function Prop_DropMenu({ id, onClick, text, text1 }) {
    return (
        <ul className={styles.menu} id={ id } onClick={ onClick }>
            <li>
                { text }
            </li>
            <li>
                { text1 }
            </li>
        </ul>
    )
}