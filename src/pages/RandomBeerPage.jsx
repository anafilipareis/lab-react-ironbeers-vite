import React, { useState, useEffect } from "react";
import axios from "axios";

function RandomBeersPage() {
  const [randomBeer, setRandomBeer] = useState(null);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then(response => {
        setRandomBeer(response.data);
      })
      .catch(error => console.error("Error fetching random beer details:", error));
  }, []); 

  if (!randomBeer) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
     
          <h1>{randomBeer.name}</h1>
          <div className="card">
            <img src={randomBeer.image_url} className="card-img-top" alt={randomBeer.name} style={{ maxWidth: "100px" }}/>
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h5 className="card-title">{randomBeer.tagline}</h5>
                  <p className="card-text">First Brewed: {randomBeer.first_brewed}</p>
                </div>
                <div>
                  <p className="card-text">Attenuation Level: {randomBeer.attenuation_level}</p>
                </div>
              </div>
              <p className="card-text">{randomBeer.description}</p>
              <p className="card-text">Contributed by: {randomBeer.contributed_by}</p>
            </div>
          </div>
      
    </div>
  );
}

export default RandomBeersPage;
