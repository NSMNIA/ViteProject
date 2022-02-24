import { useState } from 'react'
import { About } from './components/About'
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
      <About/>
    </main>
    </>
  )
}

export default App
