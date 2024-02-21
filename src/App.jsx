import "./App.css";
import Navbar from "./components/Navbar";      // <== IMPORT
import HomePage from "./pages/HomePage";       // <== IMPORT
import AllBeersPage from "./pages/AllBeersPage";     // <== IMPORT
import AddBeerPage from "./pages/AddBeerPage";   // <== IMPORT
import BeerDetailsPage from "./pages/BeerDetailsPage";         // <== IMPORT
import RandomBeerPage from "./pages/RandomBeerPage";
 
import { Routes, Route } from "react-router-dom";  // <== IMPORT

function App() {
  return (
    <div className="App">
      <Navbar />
      
      {/*   Add <Route /> components between <Routes> and </Routes>   */} 
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/beers" element={<AllBeersPage />} />
        <Route path="/random-beer" element={<RandomBeerPage />} />
        <Route path="/new-beer" element={<AddBeerPage />} />
        <Route path="/beers/:beerId" element={<BeerDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
