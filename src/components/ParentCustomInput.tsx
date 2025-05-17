import React, { useRef } from 'react';
import CustomInput, { CustomInputHandles } from './CustomInput';

export function ParentCustomInput() {
  const inputRef = useRef<CustomInputHandles>(null);

  const handleFocusClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div>
        <hr></hr>
      <h1>Export imperative methods to parent components : useImperativeHandle + forwardRef</h1>
      <CustomInput ref={inputRef} />
      <button onClick={handleFocusClick}>Focus Input from Parent</button>
      <hr></hr>
    </div>
  );
};
