// src/contexts/CounterContext.tsx

import { createContext, useContext, useState, ReactNode } from "react";

// 1. Create the Context
const CounterContext = createContext<{ count: number; increment: () => void, decrement: () => void } | undefined>(undefined);

// 2. Create the Provider
export function CounterProvider({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(0);

  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
}

// 3. Create a Custom Hook
export function useCounter() {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("useCounter must be used within a CounterProvider");
  }
  return context;
}
