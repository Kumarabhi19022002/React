import { useState } from 'react'
import './App.css'
import Login from './components/Login';
function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <h1> Reels 🚀🚀 </h1>
 <Login></Login>
    </div>
  )
}

export default App
