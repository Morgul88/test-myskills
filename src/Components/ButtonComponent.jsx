import { useState } from "react";
import Child from "./Child";

function ButtonComponent() {
    const [count , setCount] = useState(0);

    return (
        <div>
            <h1>Saldo: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <Child count={count} />
        </div>
    );
    
}
export default ButtonComponent;
