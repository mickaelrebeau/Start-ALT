import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/Home/HomePage'
import PortfolioPage from './pages/Portfolio/PortfolioPage'
import ServicesPage from './pages/Services/ServicesPage'
import ContactPage from './pages/Contact/ContactPage'
import Navbar from './composents/Navbar/Navbar'
import Footer from './composents/Footer/Footer'

function App() {

  return (
    <>
      <div className='App'>
        <Navbar></Navbar>
        <Routes>
          <Route path="/Start-ALT" element={<HomePage/>}></Route>
          <Route path="/portfolio" element={<PortfolioPage/>}></Route>
          <Route path="/services" element={<ServicesPage/>}></Route>
          <Route path="/contact" element={<ContactPage/>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
