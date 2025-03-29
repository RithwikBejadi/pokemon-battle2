import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';

// Function to fetch a Pokémon by name or ID
export const getPokemon = async (nameOrId) => {
  try {
    const response = await axios.get(`${BASE_URL}${nameOrId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching Pokémon:', error);
    return null;
  }
};