import { useState } from 'react'
import { Featured } from './components/Featured'
import { Header } from './components/Header'
import { Navbar } from './components/Navbar'
import './styles/global.scss'

function App() {

  return (
    <>
    <main className='rd-main--container'>
      <Navbar/>
      <Header/>
      <Featured/>
    </main>
    </>
  )
}

export default App
