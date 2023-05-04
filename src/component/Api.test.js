import React, { useState } from 'react';
import Table from './Table';

function Article() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="clicks-1"></div>
      <div className={`clicks-${count}`}>
        {count} clicks
      </div>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <h1>Article Details</h1>
      <Table />
    </div>
  );
}

export default Article;
