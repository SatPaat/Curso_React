import {useState, useEffect, useMemo} from 'react'

const HookUseMemo = () => {

    const [number, setNumber] = useState(0)

    // const premiumNumbers = ["5", "100", "250"]

    const premiumNumbers = useMemo(() => {
        return ["5", "100", "250"]
    }, [])


    useEffect(() => {
        console.log("Premium Numbers foi alterado")
    }, [premiumNumbers])

  return (
    <div>
        <h2>useMemo</h2>
        <input type="text" onChange={(e) => setNumber(e.target.value)} />
        {premiumNumbers.includes(number) ? <p>Acertou o número</p> : ""}
    </div>
  )
}

export default HookUseMemo