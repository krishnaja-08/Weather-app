import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <body >
      <form>
        <label>City name:</label>
        <input type="text" id="cname"/>
        <input type="submit" value="Submit"></input>
    
      </form>
    </body>
   
    
      
     


    
  )
}

export default App
