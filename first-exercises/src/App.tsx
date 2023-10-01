import { useState } from 'react'
import './App.css'

export const App2 = (props: any) => <div>
  <h2>{props.saludo} ESTE ES TU FIN JUAS JUAS!</h2>

</div>

function App() {
  const [count, setCount] = useState(0)

  const countSum = () => {
    setCount(count + 1);
  }
  return (
    <>
      <h1>HOLA MUNDO</h1>
      <App2 saludo="adios" />

      <button
        onClick={countSum}
      >
        CONTADOR: {count}
      </button>
    </>
  )
}

export default App;
