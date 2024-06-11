import { useState } from 'react'
import Experience from './components/Experience/Experience';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Experience/>
    </>
  )
}

export default App
