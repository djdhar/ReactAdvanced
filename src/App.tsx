// src/App.tsx

import { CounterProvider, useCounter } from "./contexts/CounterContext";
import { MouseTracker } from "./components/MouseTracker";

function CounterDisplay() {
  const { count, increment, decrement } = useCounter();

  return (
    <div className="p-4">
      <h1 className="text-2xl">Count: {count}</h1>
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
    </div>
  );
}

export default function App() {
  return (
    <>
    <CounterProvider>
      <CounterDisplay />
    </CounterProvider>
    <MouseTracker>
      {({ x, y }) => (
        <h1 className="text-2xl">
          Mouse position: ({x}, {y})
        </h1>
      )}
    </MouseTracker>
    </>
  );
}
