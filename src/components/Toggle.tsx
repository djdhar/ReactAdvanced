import React, { createContext, useContext, useState, ReactNode } from 'react';

// Context to share toggle state
interface ToggleContextType {
  on: boolean;
  toggle: () => void;
}

const ToggleContext = createContext<ToggleContextType | undefined>(undefined);

// Hook to access context safely
const useToggle = () => {
  const context = useContext(ToggleContext);
  if (!context) {
    throw new Error('Toggle compound components must be used inside <Toggle>');
  }
  return context;
};

// Main Toggle component
interface ToggleProps {
  children: ReactNode;
}

const Toggle: React.FC<ToggleProps> & {
  On: React.FC<{ children: ReactNode }>;
  Off: React.FC<{ children: ReactNode }>;
  Button: React.FC;
} = ({ children }) => {
  const [on, setOn] = useState(false);
  const toggle = () => setOn(prev => !prev);

  return (
    <ToggleContext.Provider value={{ on, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
};

// Subcomponents
Toggle.On = function ToggleOn({ children }) {
    const { on } = useToggle();
    return on ? <>{children}</> : null;
  };
  
  Toggle.Off = function ToggleOff({ children }) {
    const { on } = useToggle();
    return !on ? <>{children}</> : null;
  };
  
  Toggle.Button = function ToggleButton() {
    const { on, toggle } = useToggle();
    return (
      <button onClick={toggle}>
        {on ? 'Turn Off' : 'Turn On'}
      </button>
    );
  };

export default Toggle;
