import React, { useState } from 'react';

function AddHogForm({ addHog }) {
  const [newHog, setNewHog] = useState({
    name: '',
    specialty: '',
    greased: false,
    weight: '',
    highestMedalAchieved: '',
    image: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewHog({ ...newHog, [name]: value });
  };


  const handleCheckboxChange = (e) => {
    setNewHog({ ...newHog, greased: e.target.checked });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addHog(newHog);
    setNewHog({ name: '', specialty: '', greased: false, weight: '', highestMedalAchieved: '', image: '' }); // Reset form
  };

  return (
    <div>
      <h3>Add a new hog</h3>
      <form onSubmit={handleFormSubmit} className="ui form">
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Hog name"
            value={newHog.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="field">
          <label>Specialty</label>
          <input
            type="text"
            name="specialty"
            placeholder="Specialty"
            value={newHog.specialty}
            onChange={handleInputChange}
          />
        </div>
        <div className="field">
          <label>Weight</label>
          <input
            type="number"
            name="weight"
            placeholder="Weight"
            value={newHog.weight}
            onChange={handleInputChange}
          />
        </div>
        <div className="field">
          <label>Highest Medal Achieved</label>
          <input
            type="text"
            name="highestMedalAchieved"
            placeholder="Highest Medal Achieved"
            value={newHog.highestMedalAchieved}
            onChange={handleInputChange}
          />
        </div>
        <div className="field">
          <label>Image URL</label>
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={newHog.image}
            onChange={handleInputChange}
          />
        </div>
        <div className="field">
          <label>
            <input
              type="checkbox"
              name="greased"
              checked={newHog.greased}
              onChange={handleCheckboxChange}
            />
            Greased
          </label>
        </div>
        <button className="ui button" type="submit">Add Hog</button>
      </form>
    </div>
  );
}


export default AddHogForm;
