import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let handleClick = () => {

    console.log(count);
    setCount(count + 1);

  };

  return (
    <>
      <div className='container-fluid full-screen bg-dark bg-subtle d-flex justify-content-center align-items-center'>
        <button onClick={handleClick} type='button' className='btn btn-success m-2'>Click Me ({count})</button>
        <button type='button' className='btn btn-primary m-2'>Success</button>
      </div>
    </>
  )
}

export default App
