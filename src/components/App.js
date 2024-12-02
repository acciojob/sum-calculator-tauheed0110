
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
  const [value, setValue] = useState("");
  const [sum , setSum] = useState("");

  useEffect(()=>{
    setSum(prev => {
      return Number(prev) + Number(value);
    });
  }, [value]);

  return (
    <div>
      <h1>Sum Calculator</h1>
        <input type="number" value={value} onChange={(e)=> setValue(e.target.value)}/>
        <p>Sum: {sum}</p>
    </div>
  )
}

export default App
