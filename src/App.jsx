// import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Beers from './pages/beers'
import BeerDetials from './pages/BeerDetials'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Beers' element={<Beers />} />
        <Route path='/beers/:beerId' element={<BeerDetials />}/>
      </Routes>
   </div>
  )
}

export default App
