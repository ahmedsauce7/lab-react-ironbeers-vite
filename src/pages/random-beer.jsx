import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'

function RandomBeer() {
    const [randomBeer, setRandomBeer] = useState()
    
        const randomBeerData = async () => {
            try {
            const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
            console.log(response.status)
            if (response.status === 200){
                setRandomBeer(response.data)
            }
            }  catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        randomBeerData()
    },[])
    
    if(!randomBeer) {
        return <div>Loading random beer...</div>
    }

  return (
    <div>
         <Navbar/>
         <div className='randombeer'>
        <h1>Random Beer</h1>
        <h1>{randomBeer.name}</h1>
        <img className='beersimg' src={randomBeer.image_url} alt={randomBeer.name}/>
        <h4>Tagline: {randomBeer.tagline}</h4>
        <h4>First Brewed: {randomBeer.first_brewed}</h4>
        <h4>Attenuation: {randomBeer.attenuation_level}</h4>
        <h4>Description: {randomBeer.description}</h4>
        <h4>Contributed by:{randomBeer.contributed_by}</h4>
        </div>
        </div>
  )
}

export default RandomBeer