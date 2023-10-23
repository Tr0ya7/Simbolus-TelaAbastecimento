import { useEffect, useState } from 'react'

export default function Obs(props) {
    const [obs, setObs] = useState('')

    useEffect(() => {
        props.obsInfo({
            obs: obs
        })
    }, [obs])

    return (
        <div>
            <p>
                Observação
            </p>
            <textarea type="text" value={obs} onChange={event => setObs(event.target.value)} />
        </div>
    )
}