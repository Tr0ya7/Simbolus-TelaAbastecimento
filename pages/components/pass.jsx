import Input from "./input"

export default function Pass({ children, value, onChange }) {
    return (
        <>
            <p>
                { children }
            </p>
            <Input
                className="pass"
                value={ value }
                type="password"
                onChange={(event) => onChange(event.target.value)}
            />
        </>
    )
}