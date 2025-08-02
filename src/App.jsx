import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import UI from './Components/UI'
import About from './Components/About'
import Portfolio from './Components/Portfolio'
import Contact from './Components/Contact'

import Cursor from './Components/Cursor'



import Logo from './Pages/Logo'
import Posters from './Pages/Posters'
import Menu from './Pages/Menu'
import Appui from './Pages/UI'

function App() {
  return (
    <>
      <Navbar />
      <Cursor/>
      <Routes>

        <Route
          path="/"
          element={
            <>
              <UI />
              <About />
              <Portfolio />
              <Contact />
            </>
          }
        />

 
        <Route path="/logo" element={<Logo />} />
        <Route path="/posters" element={<Posters />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/UI" element={<Appui />} />
      </Routes>

      <Footer/>

    </>
  )
}

export default App
