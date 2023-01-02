import { useState } from "react"

const ItemCount = () => {

    const [count, setCount] = useState(0)
    const decrement = () => {
        setCount(count - 1)
    }

    const increment = () => {
        for(let i = 0; i < 5; i++) {
            setCount(previo => previo + 1)
        }
        return
    }

    const reset = () => {
        setCount(0)
    }

    return (
        <div>
            <h1>Contador</h1>
            <h2>{count}</h2>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default ItemCount