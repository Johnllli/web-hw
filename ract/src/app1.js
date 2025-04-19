import React, { useState } from 'react';

function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <h2>Counter App</h2>
      <p>Current Count: {count}</p>
      <div className="button-group">
        <div>
          <label>Increase the number by 1</label>
          <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
        <div>
          <label>Decrease the number by 1</label>
          <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
        <div>
          <label>Reset the number</label>
          <button onClick={() => setCount(0)}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default CounterApp;