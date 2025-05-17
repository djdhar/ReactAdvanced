import React, { useRef } from 'react';
import CustomInput, { CustomInputHandles } from './CustomInput';

export function ParentCustomInput() {
  const inputRef = useRef<CustomInputHandles>(null);

  const handleFocusClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div>
      <h2>useImperativeHandle + forwardRef</h2>
      <CustomInput ref={inputRef} />
      <button onClick={handleFocusClick}>Focus Input from Parent</button>
    </div>
  );
};
