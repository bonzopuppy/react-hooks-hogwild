import React from 'react';
import { Card } from 'semantic-ui-react';
import HogCard from './HogCard';

function HogList({ hogList, greasedOnly, sortBy, hideHog }) {
  
    const sortHogs = (hogs, sortBy) => {
    if (sortBy === 'name') {
      return [...hogs].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'weight') {
      return [...hogs].sort((a, b) => a.weight - b.weight);
    }
    return hogs;
  };

  const processedHogs = () => {
    let filteredHogs = greasedOnly ? hogList.filter(hog => hog.greased) : hogList;
    let sortedHogs = sortBy !== 'none' ? sortHogs(filteredHogs, sortBy) : filteredHogs;
    // Filter out hogs with the 'hidden' property set to true
    return sortedHogs.filter(hog => !hog.hidden);
  };

  return (
    <Card.Group itemsPerRow={5}>
      {processedHogs().map((hog, index) => (
        <HogCard key={hog.id || index} hog={hog} hideHog={() => hideHog(hog.id)} />
      ))}
    </Card.Group>
  );
}

export default HogList;
