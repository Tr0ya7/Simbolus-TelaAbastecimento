import PropInput from "./propInput"

export default function Data(props) {
    return (
        <>
            <p>
                { props.children }
            </p>
            <PropInput 
                className="dataInput" 
                value={ props.value } 
                maxLength="8" 
                change={ value => setData(value) } 
            />
        </>
    )
}