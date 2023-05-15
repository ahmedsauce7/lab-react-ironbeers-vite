// import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Beers from './pages/beers'
import BeerDetials from './pages/BeerDetials'
import RandomBeer from './pages/random-beer'
import NewBeer from './pages/new-beer'
import './app.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/beers' element={<Beers />} />
        <Route path='/beers/:beerId' element={<BeerDetials />}/>
        <Route path='/random-beer' element={<RandomBeer/>}/>
        <Route path='/new-beer' element={<NewBeer/>}/>
      </Routes>
   </div>
  )
}

export default App
