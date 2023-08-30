import styles from '@/styles/components/prop_dropMenu.module.scss'

export default function Prop_DropMenu({ id, onClick, firstOptionOnClick, text, secondOptionOnClick, text1 }) {
    return (
        <ul className={styles.menu} id={ id } onClick={ onClick }>
            <li className="first_option" onClick={ firstOptionOnClick }>
                { text }
            </li>
            <li id="second_option" onClick={ secondOptionOnClick }>
                { text1 }
            </li>
        </ul>
    )
}