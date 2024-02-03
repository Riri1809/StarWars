

export async function getAllStarships() {
    const response = await fetch('https://swapi.dev/api/starships/');
    const data = await response.json();
    return data.results;
  }
  