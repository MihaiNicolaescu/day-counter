

import { useState } from "react";
import "./Style/App.css";



function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(1);
  const [message, setMessage] = useState("Today is");
  var date = new Date().toLocaleDateString("de-DE");


  function modifyCount(value){
    setCount((curentCount) => curentCount + (step * value));
    var msg = "";
    if(count === 0){
      msg = "Today is"
    }else if (count >= 1){
      msg = count + " day ago it was ";
    } else {
      msg = count * -1 + " days ago will be ";
    }
    
    setMessage(msg);
  }

  return (
    <div className="container">
      <div className="menu">
        <button onClick={() => {setStep((c) => c - 1)}}>-</button>
        <p>Step: {step}</p>
        <button onClick={() => {setStep((c) => c + 1)}}>+</button>
      </div>
      <div className="menu">
      <button onClick={()=> {modifyCount(-1)}}>-</button>
        <p>Count: {count}</p>
        <button  onClick={()=> {modifyCount(1)}}>+</button>
      </div>
      <div className="menu">
        <p className="Message">{message} {date}</p>
      </div>
    </div>
  );
}

export default App;
