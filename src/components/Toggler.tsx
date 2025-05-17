import React from 'react';
import Toggle from './Toggle';

export function Toggler() {
  return (
    <div>
      <h2>Compound Component Example</h2>
      <Toggle>
        <Toggle.On>The toggle is ON</Toggle.On>
        <Toggle.Off>The toggle is OFF</Toggle.Off>
        <Toggle.Button />
      </Toggle>
    </div>
  );
};
