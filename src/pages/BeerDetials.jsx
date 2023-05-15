import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'

function BeerDetials() {
    const {beerId} = useParams();
    const [beers, setBeers] = useState();

    const axiosData = async () => {
        try {
        const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
        console.log(response.status)
        if (response.status === 200){
            setBeers(response.data)
        }
        }  catch (error) {
        console.log(error)
    }
}
useEffect(() => {
    axiosData()
},[beerId])

if(!beers) {
    return <div>Loading beer...</div>
}
return (
    <div>
        <Navbar/>
        <div className='randombeer'>
        <h1>{beers.name}</h1>
        <img className='beersimg' src={beers.image_url} alt={beers.name}/>
        <h4>Tagline: {beers.tagline}</h4>
        <h4>First Brewed: {beers.first_brewed}</h4>
        <h4>Attenuation: {beers.attenuation_level}</h4>
        <h4>Description: {beers.description}</h4>
        <h4>Contributed by:{beers.contributed_by}</h4>
        </div>
    </div>
)
}
export default BeerDetials;