import React, { useState } from "react";
import axios from "axios";

function AddBeerPage() {
  
  const [formData, setFormData] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0, // Default to 0 for number type
    contributed_by: "",
  });

  // Event handler for form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //  logic that handles the form submission.
  const handleSubmit = (e) => {
    e.preventDefault();

    // Make a POST request to create a new beer
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", formData)
      .then(response => {
        console.log("New Beer Created:", response.data);
      })
      .catch(error => console.error("Error creating new beer:", error));
  };

  return (
    <div className="container">
      <h1>Add New Beer</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="tagline" className="form-label">Tagline</label>
          <input type="text" className="form-control" id="tagline" name="tagline" value={formData.tagline} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea className="form-control" id="description" name="description" value={formData.description} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="first_brewed" className="form-label">First Brewed</label>
          <input type="text" className="form-control" id="first_brewed" name="first_brewed" value={formData.first_brewed} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="brewers_tips" className="form-label">Brewer's Tips</label>
          <input type="text" className="form-control" id="brewers_tips" name="brewers_tips" value={formData.brewers_tips} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="attenuation_level" className="form-label">Attenuation Level</label>
          <input type="number" className="form-control" id="attenuation_level" name="attenuation_level" value={formData.attenuation_level} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="contributed_by" className="form-label">Contributed By</label>
          <input type="text" className="form-control" id="contributed_by" name="contributed_by" value={formData.contributed_by} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Add Beer</button>
      </form>
    </div>
  );
}

export default AddBeerPage;
