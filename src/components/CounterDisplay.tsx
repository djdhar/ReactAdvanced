import { useCounter } from "../contexts/CounterContext";

export function CounterDisplay() {
  const { count, increment, decrement } = useCounter();

  return (
    <div className="p-4">
      <hr></hr>
      <h1>Context API + Custom Context Hooks</h1>
      <h3 className="text-2xl">Count: {count}</h3>
      <button
        onClick={increment}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Increment
      </button>
      <span>⠀</span>
      <button
        onClick={decrement}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Decrement
      </button>
      <hr></hr>
    </div>
  );
}