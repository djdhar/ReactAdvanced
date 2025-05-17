import React, { useState } from 'react';

const ControlledInput: React.FC = () => {
  const [value, setValue] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  console.log("ControlledInput rendered...");

  return (
    <div>
      <h3>Controlled Input</h3>
      <input type="text" value={value} onChange={handleChange} />
      <p>Value: {value}</p>
    </div>
  );
};

export default ControlledInput;
