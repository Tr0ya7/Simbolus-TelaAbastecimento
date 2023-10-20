import PropInputMask from "./propInputMask"

export default function Cpf({ children, value, onChange }) {
    return (
        <>
            <p>
                { children }
            </p>
            <PropInputMask
                mask="99999999999"
                value={ value }
                maxLength={11}
                onChange={(event) => onChange(event.target.value)}
            />
        </>
    )
}