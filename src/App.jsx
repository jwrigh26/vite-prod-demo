import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

let fetched = false;

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      console.log('fetching data');
      try {
        const response = await fetch('/.netlify/functions/getApiData');
        const data = await response.json();
        console.log(data?.message);
        setData(data?.message);
      } catch (error) {
        console.error('There was an error fetching the data', error);
      }
    };
    if (!fetched) {
      fetchData();
      fetched = true;
    }
    return () => {
      fetched = false;
    };
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p>{data}</p>
    </>
  );
}

export default App;
