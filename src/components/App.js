import React, { useState } from 'react';
import Nav from './Nav';
import AddHogForm from './AddHogForm';
import HogList from './HogList';
import Filters from './Filters';
import { v4 as uuidv4 } from 'uuid';

import hogs from '../porkers_data';

function App() {

  console.log(hogs);
  const [hogList, setHogs] = useState(
    hogs.map(hog => ({...hog, id: uuidv4(), hidden: false}))
  );
  const [greasedOnly, setGreasedOnly] = useState(false);
  const [sortBy, setSortBy] = useState('none');

  const addHog = (hogToAdd) => {
    setHogs([...hogList, {...hogToAdd, id: uuidv4() }]);
  };

  const hideHog = (hogId) => {
    setHogs((currentHogs) => currentHogs.map(hog => {
      if (hog.id === hogId) {
        return { ...hog, hidden: !hog.hidden };
      }
      return hog;
    }));
  };

  const toggleGreasedOnly = () => {
    setGreasedOnly(!greasedOnly);
  };

  const handleSortBy = (value) => {
    setSortBy(value);
  };


  return (
    <div className="App">
      <Nav />
      <AddHogForm addHog={addHog} />
      <Filters 
        greasedOnly={greasedOnly} 
        sortBy={sortBy} 
        toggleGreasedOnly={toggleGreasedOnly} 
        handleSortBy={handleSortBy} 
      />
      <HogList 
        hogList={hogList} 
        greasedOnly={greasedOnly} 
        sortBy={sortBy} 
        hideHog={hideHog} 
      />
    </div>
  );
}

export default App;
