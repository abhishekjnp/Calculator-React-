import React, { useState } from 'react';
import Display from './Display';
import Button from './Button';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    if (value === 'C') {
      setInput('');
    } else if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput('Error');
      }
    } else {
      setInput((prev) => prev + value);
    }
  };

  return (
    <div className="calculator">
      <Display input={input} />
      <div className="buttons">
        {['7', '8', '9', '/'].map((val) => (
          <Button key={val} value={val} onClick={handleButtonClick} />
        ))}
        {['4', '5', '6', '*'].map((val) => (
          <Button key={val} value={val} onClick={handleButtonClick} />
        ))}
        {['1', '2', '3', '-'].map((val) => (
          <Button key={val} value={val} onClick={handleButtonClick} />
        ))}
        {['0', '.', '=', '+'].map((val) => (
          <Button key={val} value={val} onClick={handleButtonClick} />
        ))}
        <Button value="C" onClick={handleButtonClick} />
      </div>
    </div>
  );
};

export default Calculator;
