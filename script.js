// pokemon.js
const getPokemon = async () => {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/typhlosion');
        const data = await response.json();
        
        const container = document.getElementById('pokemon-container');
        container.innerHTML = `
            <div class="pokemon-card">
                <h2>Favorite Pokemon:</h2>
                <h3>${data.name.toUpperCase()}</h3>
                <img src="${data.sprites.front_default}" alt="${data.name}">
                <p>Types: ${data.types.map(type => type.type.name).join(', ')}</p>
            </div>
        `;
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('pokemon-container').innerHTML = 'Error loading Pokemon API!';
    }
};

document.addEventListener('DOMContentLoaded', getPokemon);