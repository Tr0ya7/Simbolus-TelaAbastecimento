import Input from "./input"

export default function Pass({ children, className, value, onChange }) {
    return (
        <>
            <p>
                { children }
            </p>
            <Input
                className={ className }
                value={ value }
                type="password"
                onChange={(event) => onChange(event.target.value)}
            />
        </>
    )
}