import { useState } from 'react'
import { About } from './components/About'
import { Featured } from './components/Featured'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
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
      <Gallery/>
      <Footer/>
    </main>
    </>
  )
}

export default App
