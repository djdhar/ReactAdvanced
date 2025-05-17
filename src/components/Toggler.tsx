import React from 'react';
import Toggle from './Toggle';

export function Toggler() {
  return (
    <div>
        <hr></hr>
      <h1>Compound Components</h1>
      <Toggle>
        <Toggle.On>The toggle is ON </Toggle.On>
        <Toggle.Off>The toggle is OFF </Toggle.Off>
        <Toggle.Button />
      </Toggle>
      <hr></hr>
    </div>
  );
};
