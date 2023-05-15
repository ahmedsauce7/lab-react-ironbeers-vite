import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Navbar from '../components/Navbar'

function NewBeer() {
  const [newBeer, setNewBeer] = useState({
    name: "",
    tagline: "",
    description: "",
    firstBrewed: "",
    brewersTips: "",
    attenuationLevel: 0,
    contributedBy: "",
  });
  const navigate = useNavigate();

  const inputForm = (event) => {
    setNewBeer({ ...newBeer, [event.target.name]: event.target.value });
  };
  const submitForm = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://ih-beers-api2.herokuapp.com/beers/new",
        newBeer
      );
      if (response.status === 200) {
        navigate(`/beers`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
       <Navbar/>
       <div className='randombeer'>
      <h1>New Beer</h1>
      <form onSubmit={submitForm}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={newBeer.name}
            onChange={inputForm}
          />
        </div>
        <div>
          <label>Tagline:</label>
          <input
            type="text"
            name="tagline"
            value={newBeer.tagline}
            onChange={inputForm}
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={newBeer.description}
            onChange={inputForm}
          />
        </div>
        <div>
          <label>First Brewed:</label>
          <input
            type="text"
            name="firstBrewed"
            value={newBeer.firstBrewed}
            onChange={inputForm}
          />
        </div>
        <div>
          <label>Brewers Tips:</label>
          <input
            type="text"
            name="brewersTips"
            value={newBeer.brewersTips}
            onChange={inputForm}
          />
        </div>
        <div>
          <label>Attenuation Level:</label>
          <input
            type="number"
            name="attenuationLevel"
            value={newBeer.attenuationLevel}
            onChange={inputForm}
          />
        </div>
        <div>
          <label>Contributed By:</label>
          <input
            type="text"
            name="contributedBy"
            value={newBeer.contributedBy}
            onChange={inputForm}
          />
        </div>
        <button type="submit">Add New</button>
      </form>
    </div>
    </div>
  );
}

export default NewBeer;
