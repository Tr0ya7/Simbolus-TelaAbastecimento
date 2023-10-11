import styles from '@/styles/components/prop_dropMenu.module.scss'

export default function Prop_DropMenu(props) {
    return (
        <ul className={styles.menu} id={ props.id }>
            <li className={ props.classNameFirstOption } onClick={ props.firstOptionOnClick }>
                { props.text }
            </li>
            <li className={ props.classNameSecondOption } onClick={ props.secondOptionOnClick }>
                { props.text1 }
            </li>
        </ul>
    )
}