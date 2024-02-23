import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function BeerDetailsPage() {
    // Use the useParams hook to access the URL parameter
  const { beerId } = useParams(); //useParams is used to extract the beerId from the URL parameter
  const [beer, setBeer] = useState(null);

  useEffect(() => {  
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`) // GET request to the Beers API endpoint with the beerId
      .then(response => {
       // Update the state with the beer details
        setBeer(response.data);
      })
      .catch(error => console.error("Error fetching beer details:", error));
  }, [beerId]); // Include beerId in the dependency array to re-run the effect when it changes

  if (!beer) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h1>{beer.name}</h1>
      <div className="card">
        <img src={beer.image_url} className="card-img-top" alt={beer.name} />
        <div className="card-body">
          <h5 className="card-title">{beer.tagline}</h5>
          <p className="card-text">First Brewed: {beer.first_brewed}</p>
          <p className="card-text">Attenuation Level: {beer.attenuation_level}</p>
          <p className="card-text">{beer.description}</p>
          <p className="card-text">Contributed by: {beer.contributed_by}</p>
        </div>
      </div>
    </div>
  );
}

export default BeerDetailsPage;
