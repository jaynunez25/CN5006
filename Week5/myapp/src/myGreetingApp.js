import React from 'react';
import './App.css';

function GreetingElement() {
  const greeting = 'Hello, let’s start learning Function Components...';
  return (
    <div className="App">
      <h1>{greeting}</h1>
    </div>
  );
}

export default GreetingElement;
