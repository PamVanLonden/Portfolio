// import reactLogo from '../assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <>
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}

      {/* <h1>Vite + React</h1> */}

        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        {/* <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      </>
    )
}
export default Counter;