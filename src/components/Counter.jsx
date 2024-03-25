import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0)
    const [isDisabled, setIsDisabled] = useState(false)
    const incrementation = () => {
        if(count === 9){
            setIsDisabled(true)
        }
        setCount(count + 1)
    }
    const decremetation = () => {
        if (count === -10){
            setCount(0)
            return
        }
        setIsDisabled(false)
        setCount(count - 1)
    }
    
    return (
        <>
            <h2>Compter les moutons</h2>
            <p>Le nombre de moutons : {count}</p>
            <button onClick={incrementation} disabled={isDisabled}>Ajouter un mouton</button>
            <button onClick={decremetation}>Retirer un mouton</button>
        </>
    )
}
export default Counter;