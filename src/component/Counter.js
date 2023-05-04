// Counter.js

import React, { useState } from 'react';

function Counter(props) {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={props.onReset}>Reset</button>
    </div>
  );
}

export default Counter;
