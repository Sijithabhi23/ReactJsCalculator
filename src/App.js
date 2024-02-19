import React, { useState } from 'react';
import "./App.css";
function Calculator() { 
  const [number, liveNumber] = useState("0");
  const [fvalue, setFvalue] = useState('');
  const [opera, setOpera] = useState("");
  const [svalue, setSvalue] = useState('');
  const [result, setResult] = useState("");
  const [his, storehis] = useState([]);
  const [isFlipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!isFlipped);

  };

  const setNumber = (value) => {

    // liveNumber((inputNumber) =>inputNumber + value );

    if (number === "0") {
      liveNumber(value);
      setFvalue(value);
    }
    else if (opera !== '') {
      setSvalue((inputSnumber) => inputSnumber.toString() + value.toString());
      liveNumber((inputNumber) => inputNumber.toString() + value.toString());
    }

    else {
      setFvalue((inputFnumber) => inputFnumber.toString() + value.toString());
      liveNumber((inputNumber) => inputNumber.toString() + value.toString());
    }

  };

  const setOperator = (op) => {

    liveNumber((inputNumber) => inputNumber.toString() + op.toString());
    setOpera(op);
  };


  const lastResult = () => {
    let calcResult;
    switch (opera) {
      case "+":
        calcResult=(parseFloat(fvalue) + parseFloat(svalue));
        liveNumber(parseFloat(fvalue) + parseFloat(svalue));
        break;

      case "*":
        calcResult=(parseFloat(fvalue) * parseFloat(svalue));
        liveNumber(parseFloat(fvalue) * parseFloat(svalue));
        break;

      case "-":
        calcResult=(parseFloat(fvalue) - parseFloat(svalue));
        liveNumber(parseFloat(fvalue) - parseFloat(svalue));
        break;

      case "/":
        calcResult=(parseFloat(fvalue) / parseFloat(svalue));
        liveNumber(parseFloat(fvalue) / parseFloat(svalue));
        break;

      default:
        break;


    }
    setResult(calcResult);
    storehis((his)=>[...his,`${fvalue} ${opera} ${svalue} =${calcResult}`]);
  };



  const clear = () => {
    liveNumber("0");
    setFvalue(0);
    setSvalue(0); 
  };

  return (
    <div>
      <div class="container">
        <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
          <div class="flip-card-inner">
            <div class="front-side">
              <p id="element">CASIO</p>
              <div class="box">
                <input className='input-box' type="text" id="btn" value={number}></input>
                <input className='input-box' type="hidden" id="btn" value={result} ></input>
                <div class="maths-buttons">
                  <button class="btn-c" onClick={clear}>C</button><br></br>
                  <button class="btn-history" onClick={handleFlip}>H</button><br></br>
                  <button class="btn-class" onClick={() => setNumber(7)}>7</button>
                  <button class="btn-class" onClick={() => setNumber(8)}>8</button>
                  <button class="btn-class" onClick={() => setNumber(9)}>9</button>
                  <button class="btn-class" onClick={() => setOperator("/")}>/</button><br></br>
                  <button class="btn-class" onClick={() => setNumber(4)}>4</button>
                  <button class="btn-class" onClick={() => setNumber(5)}>5</button>
                  <button class="btn-class" onClick={() => setNumber(6)}>6</button>
                  <button class="btn-class" onClick={() => setOperator("*")}>x</button><br></br>
                  <button class="btn-class" onClick={() => setNumber(1)}>1</button>
                  <button class="btn-class" onClick={() => setNumber(2)}>2</button>
                  <button class="btn-class" onClick={() => setNumber(3)}>3</button>
                  <button class="btn-class" onClick={() => setOperator("-")}>-</button><br></br>
                  <button class="btn-class" onClick={() => setNumber(0)}>0</button>
                  <button class="btn-class" onClick={() => setNumber(".")}>.</button>
                  <button class="btn-class" onClick={lastResult}>=</button>
                  <button class="btn-class" onClick={() => setOperator("+")}>+</button>
                </div>
              </div>
            </div>
            <div class="back-side">
              <p> History</p>
              <button class="btn-home" onClick={handleFlip}><img id='btn-home-img' src="/back-removebg-preview.png" alt=""></img></button>
                  <ul>
                    {his.map((data)=>(
                      <li>{data}</li>
                    ))}
                  </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Calculator;