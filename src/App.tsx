import { useState } from 'react'
import { Header } from './components/Header'
import { Navbar } from './components/Navbar'
import { CustomCursor } from './CustomCursor'
import './styles/global.scss'

function App() {

  return (
    <>
    <CustomCursor/>
    <main className='rd-main--container'>
      <Navbar/>
      <Header/>
    </main>
    </>
  )
}

export default App
