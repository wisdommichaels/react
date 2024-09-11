import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Name from './Components/Name'
import Description from './Components/Description'
import Image from './Components/Image'
import Price from './Components/Price'

function App() {
  const user = "Wisdom"
  const user2 = "Micheal"

  return (
    <section>
        <Name/>
        <Price/>
        <Description/>
        <Image/>
    </section>
  )
}

export default App
