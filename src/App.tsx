import { About } from './components/About'
import { Featured } from './components/Featured'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Header } from './components/Header'
import { Navbar } from './components/Navbar'
import useLocoScroll from './hooks/useLocoScroll'
import './styles/global.scss'

function App() {
  useLocoScroll();
  return (
    <>
      <main className='rd-main--container' data-scroll-container>
        <Navbar />
        <Header />
        <Featured />
        <About />
        <Gallery />
        <Footer />
      </main>
    </>
  )
}

export default App
