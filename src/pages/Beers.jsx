import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Beers() {
    const [beers, setBeers] = useState([])
    const axiosData = async () => {
        try {
        const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers")
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
},[])
  return (
    <div>
        <h1>Beers</h1>
        <ul>
            {beers.map((beer) =>(
                <li key={beer._id}>
                <img className='beersimg' src={beer.image_url} alt={beer.name} />
                <h3>{beer.name}</h3>
                <h3>{beer.tagline}</h3>
                <h3>Contributed by:{beer.contributed_by}</h3>
                <Link to={`/beers/${beer._id}`}>View Detials</Link>
            </li>
            ))}
        </ul>
    </div>
  )
}

export default Beers