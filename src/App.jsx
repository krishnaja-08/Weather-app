import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [city, setCity] = useState(undefined);
  const [temp, setTemp] = useState(null);
  async function fetchData(){
    const result = await fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=f2683eb6cc65be3cdfca83ee2d73e421");
    const data = await result.json();
    setTemp(data.main.temp);

  }

  return (
    <body >
      <div className='form'>
        <label>City name:</label>
        <input value={city}
        onChange={function(event){
          setCity(event.target.value)}}/>
        <button onClick={fetchData}>Submit</button>
        <p>Temperature is : {temp}</p>
        </div>

    </body>


    
  )
}

export default App
