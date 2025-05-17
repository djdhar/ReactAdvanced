import React, { useRef } from 'react';

const UncontrolledInput: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    alert(`Value: ${inputRef.current?.value}`);
  };

  console.log("UncontrolledInput rendered...");

  return (
    <div>
      <h3>Uncontrolled Input</h3>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Show Value</button>
    </div>
  );
};

export default UncontrolledInput;
