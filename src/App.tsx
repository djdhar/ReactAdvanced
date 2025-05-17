// src/App.tsx

import { CounterProvider } from "./contexts/CounterContext";
import { MouseTracker } from "./components/MouseTracker";
import { TransitionComponent } from "./components/TransitionComponent";
import { ModalPortal } from "./components/ModalPortal";
import { MemoStaticAndNonStatic } from "./components/MemoStaticAndNonStatic";
import { ParentCustomInput } from "./components/ParentCustomInput";
import { Toggler } from "./components/Toggler";
import { CounterDisplay } from "./components/CounterDisplay";
import { HigherOrderComponents } from "./components/HigherOrderComponents";
import { ControlledPlusUncontrolledInputs } from "./components/ControlledPlusUncontrolledInput";

export default function App() {
  return (
    <>
    <CounterProvider>
      <CounterDisplay />
    </CounterProvider>
    <MouseTracker>
      {({ x, y }) => (
        <h3 className="text-2xl">
          Mouse position: ({x}, {y})
        </h3>
      )}
    </MouseTracker>
    <HigherOrderComponents/>
    <TransitionComponent/>
    <ModalPortal/>
    <MemoStaticAndNonStatic/>
    <ParentCustomInput/>
    <ControlledPlusUncontrolledInputs/>
    <Toggler/>
    </>
  );
}
