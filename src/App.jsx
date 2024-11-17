import { useState } from 'react'
import './App.css'
import AppButton from './AppButton/AppButton'
import languages from './db/languages'

function App() {
  const [ln, setLn] = useState(null)


  function handleClick(lnElement) {
    if (ln === lnElement) {
      setLn(null)
    } else {
      setLn(lnElement)
    }
  }


  return (
    <>
      <div>
        <h1>Leard Web Development</h1>
        <div>
          {languages.map(lnElement => (
            <AppButton key={lnElement.id} ln={lnElement} onClick={() => handleClick(lnElement)} />
          ))}
        </div>
      </div>
    </>
  )
}

export default App
