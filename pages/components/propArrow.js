import Image from 'next/image'

export default function PropArrow({ className, id, onClick }) {
    return <Image className={ className } id={ id } src="/images/arrow.png" width="10" height="10" alt="arrow" onClick={ onClick } />
}