import React, { useState, useEffect } from 'react';

function Promise(props) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(props.url);
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [props.url]);

  const handleClick = () => {
    const newData = { id: 1, name: 'John Doe' };
    props.onDataChange(newData);
  };

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data && (
        <>
          <p>{data.name}</p>
          <button onClick={handleClick}>Update Data</button>
        </>
      )}
    </div>
  );
}

export default Promise;
