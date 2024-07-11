import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx'

function App() {
  const [count, setCount] = useState(0)

  let handleClick = () => {

    console.log(count);
    setCount(count + 1);

  };

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
      </Routes>
    </>
  )
}

export default App
