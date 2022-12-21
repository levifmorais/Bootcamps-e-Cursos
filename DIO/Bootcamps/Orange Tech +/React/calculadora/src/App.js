import { useState } from 'react';

function App() {

  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ["+", "-", "*", "/", "."];

  const math = require('mathjs');

  const updateCalc = value => {
    
    if ((ops.includes(value) && calc === "") || (ops.includes(value) && ops.includes(calc.slice(-1)))) {
      return
    }

    setCalc(calc + value);

    if (!ops.includes(value)) {
      setResult(math.evaluate(calc + value).toString());
    }

  }

  const calculate = () => {
    setCalc(math.evaluate(calc).toString());
  }

  const deleteLast = () => {
    if (calc === "") {
      return;
    }
    
    const value = calc.slice(0, -1);

    setCalc(value);
  }

  const clear = () => {
    setCalc("");
    setResult("");
  }

  const createDigits = () => {
    const digits = [];

    for (let i = 1; i <= 9; i++) {
      digits.push(<button onClick={() => updateCalc(i.toString())} id={i}>{i}</button>);
    }

    return digits;
  }

  console.log(createDigits());

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {result ? <span>({result})</span> : ''} {calc || "0"}
        </div>

        <div className="operators">
          <button onClick={() => updateCalc('*')}>×</button>
          <button onClick={() => updateCalc('/')}>÷</button>
          <button onClick={() => updateCalc('+')}>+</button>
          <button onClick={() => updateCalc('-')}>-</button>

          <button onClick={deleteLast}>DEL</button>
          <button onClick={clear}>C</button>
        </div>

        <div className="digits">
          {createDigits()}
          <button onClick={() => updateCalc('0')}>0</button>
          <button onClick={() => updateCalc('.')}>.</button>
          <button onClick={calculate}>=</button>
        </div>

      </div>
    </div>
  );
}

export default App;
