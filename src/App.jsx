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
    <section className='bg-slate-600 rounded-lg flex justify-center items-center flex-col w-1/3 m-auto mt-10 p-5'>
        <Image/>
        <Name/>
        <Price/>
        <Description/>
    </section>
  )
}

export default App
