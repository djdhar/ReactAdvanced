// src/components/MouseTracker.tsx

import { useEffect, useState } from "react";

type MouseTrackerProps = {
  children: (position: { x: number; y: number }) => React.ReactNode;
};

export function MouseTracker({ children }: MouseTrackerProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Function to handle mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Add the mousemove event listener
    document.addEventListener("mousemove", handleMouseMove);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // Empty dependency array to run only once when the component mounts

  return (
    <div className="h-screen">
      {children(position)}
    </div>
  );
}
