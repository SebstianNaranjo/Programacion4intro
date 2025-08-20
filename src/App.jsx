import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='titulo'>Programacion</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          MAS +
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          MENOS -
        </button>
        <button onClick={() => setCount((count) => count = 0)}>
          REINICIO
        </button>
        <div className='contador'>
          CONTADOR {count}
        </div>
      </div>
    </>
  )
}

export default App
