import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const user = "Wisdom"
  const user2 = "Micheal"

  return (
    <section>
      <div className="flex justify-center items-center flex-col m-auto ml-80">
        <h1 className="text-blue-500 font-bold">Welcome to Gomycode</h1>
        <p className="text-xl">My name is {user}</p>
        <p className="text-blue-400 text-xl">My name is {user2}</p>
      </div>
    </section>
  )
}

export default App
