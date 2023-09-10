import Image from 'next/image'

export default function PropArrow(props) {    
    return <Image 
                className={ props.className } 
                id={ props.id } 
                src="/images/arrow.png" 
                width="10" 
                height="10" 
                alt="arrow" 
                onClick={ props.onClick }
           />
}