import React, { useState, useMemo, useCallback, memo } from 'react';

// Props Interface
interface ChildProps {
  value: string;
  onClick: () => void;
}

// Child component using React.memo to prevent unnecessary re-renders
const Child = memo(({ value, onClick }: ChildProps) => {
  console.log("Child rendered");

  return (
    <div>
      <p>Child Value: {value}</p>
      <button onClick={onClick}>Click Child Button</button>
    </div>
  );
});

export function MemoStaticAndNonStatic() {
  const [count, setCount] = useState<number>(0);

  // useMemo for expensive calculation
  const expensiveValue = useMemo(() => {
    console.log("Calculating expensive value...");
    return count * 2;
  }, [count]);

  // useCallback to memoize function reference
  const handleClick = useCallback(() => {
    console.log("Child button clicked");
  }, []);

  return (
    <div>
        <hr/>
      <h1>React Memoization : React.memo, useMemo, useCallBack</h1>
      <p>Count: {count}</p>
      <p>Expensive Value: {expensiveValue}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      {/* Passing constant prop and memoized function */}
      <Child value="Static String" onClick={handleClick} />
      <hr/>
    </div>
  );
};
