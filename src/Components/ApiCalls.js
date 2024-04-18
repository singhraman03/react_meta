import { useState, useEffect } from "react";
import { Header } from 'react';

function ApiCalls(){
  const[Data, setData] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/products/1')
    .then(response => response.json())
    .then(Data => setData(Data))
    .catch(error => console.error('Error Fetching data:', error))
  }, []); // empty dependency array means this effect runs only once after the initial render

  return(
    <div className="App">
        <h1>Data from API</h1>
        <pre>{JSON.stringify(Data, null, 2)}</pre>
    </div>
  )
};

export default ApiCalls


