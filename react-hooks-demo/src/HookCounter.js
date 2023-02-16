import React, { useState } from "react";
function HookCounter() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const incrementPrev = () => {
    for (let i = 0; i < 3; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };
  return (
    <div>
      Count : {count}   
      <button onClick={() => setCount(initialCount)}>Reset</button>   
      <button onClick={() => setCount((prevCount) => count + 1)}>
        Increment
      </button>
         
      <button onClick={() => setCount((prevCount) => count - 1)}>
        Decrement
      </button>
           <button onClick={incrementPrev}>IncrementThree</button>  
    </div>
  );
}
export default HookCounter;
