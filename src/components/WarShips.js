import React, { useEffect, useState } from 'react';
import { getAllStarships } from '../Services/sw-api';

function WarShips() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const starshipsData = await getAllStarships();
      setStarships(starshipsData);
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      {starships.map((starship) => (
        <div key={starship.name} className="starshipCard">
          <p>{starship.name}</p>
        </div>
      ))}
    </div>
  );
}

export default WarShips;
