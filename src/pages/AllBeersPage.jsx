import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // axios: A popular JavaScript library for making HTTP requests.


function AllBeersPage() {
    const [beers, setBeers] = useState([]);

// We then created a new effect using the useEffect hook that will run only once, during the mounting (fase de montagem) phase.
// We set the effect to run only once after the initial render by setting the empty dependency array [] as the second argument to useEffect. 
// When the component renders for the first time the effect runs and an HTTP GET request is made to the Ironbnb API. 
//The returned response data is available on the response.data property and we use it to update the state variable beers with the data from the response  
    useEffect(() => {
        axios
          .get("https://ih-beers-api2.herokuapp.com/beers")
          .then(response => setBeers(response.data))
          .catch(error => console.error("Error fetching beers:", error));
      }, []); // <- [] means: Run the effect only once, after initial render

// As the last step we render a list by mapping over the state variable beers.
    return (
        <div>
          <h1>All Beers</h1>
          <ul style={{ listStyleType: "none"}}>
            {beers.map(beer => (
              <li key={beer._id}>
                <Link to={`/beers/${beer._id}`}>
                  <img src={beer.image_url} alt={beer.name} style={{ maxWidth: "50px", marginRight: "10px" }} />
                  <p><h2><strong>{beer.name}</strong></h2></p>
                </Link>
                  <p><h3>{beer.tagline}</h3></p>
                  <p>Created by: {beer.contributed_by}</p>
                
              </li>
            ))}
          </ul>
        </div>
      );

}

export default AllBeersPage;
