import { Link } from "react-router-dom";
import beersImag from "../assets/beers.png";
import randomBeerImag from "../assets/random-beer.png";
import newBeerImag from "../assets/new-beer.png";


function HomePage() {
    return (
        <div className="container text-center mt-5">
          <h1 className="mb-4 display-3">Welcome to IronBeers!</h1>
          <div className="row">
            <div className="col">
              <Link to="/beers" className="nav-link">
                <img src={beersImag} alt="All Beers" className="img-fluid" /> {/* img-fluid: It's a Bootstrap class that makes an image responsive. It ensures that the image scales properly on different devices and screen sizes. */}
                
                <h2 className="mt-3">All Beers</h2>
              </Link>
              <p className="lead">Explore our extensive collection of beers.</p>
            </div>
            <div className="col">
              <Link to="/random-beer" className="nav-link">
                <img src={randomBeerImag} alt="Random Beer" className="img-fluid" />
                <h2 className="mt-3">Random Beer</h2>
              </Link>
              <p className="lead">Discover a random beer.</p>
            </div>
            <div className="col">
              <Link to="/new-beer" className="nav-link">
                <img src={newBeerImag} alt="New Beer" className="img-fluid" />
                <h2 className="mt-3">New Beer</h2>
              </Link>
              <p className="lead">Create and add a new beer.</p>
            </div>
          </div>
        </div>
      );
}

export default HomePage;


// className Attribute:
// In HTML, the class attribute is used to assign CSS classes to an element.
// In React, since class is a reserved keyword in JavaScript, you use className instead.

