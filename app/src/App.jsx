import { useState } from 'react'
import Button from './components/Button'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="btn">
      <Button btn = {'Hello 1'}/>
      <Button btn = {'Hello 2'}/>
      <Button btn = {'Hello 3'}/>
      <Button btn = {'Hello 4'}/>
    </div>
    </>
  )
}

export default App
