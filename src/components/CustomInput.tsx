import React, {
    useRef,
    useImperativeHandle,
    forwardRef,
    ForwardRefRenderFunction,
  } from 'react';
  
  // Define the type of methods that will be exposed
  export interface CustomInputHandles {
    focus: () => void;
  }
  
  const CustomInput: ForwardRefRenderFunction<CustomInputHandles, {}> = (_, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
  
    // Expose the `focus` method to parent
    useImperativeHandle(ref, () => ({
      focus: () => {
        inputRef.current?.focus();
      },
    }));
  
    return <input ref={inputRef} type="text" placeholder="Type here..." />;
  };
  
  export default forwardRef(CustomInput);
  