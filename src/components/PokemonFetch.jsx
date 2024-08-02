import React, { useState } from 'react';

const PokemonFetch = () => {
    const [pokemonName, setPokemonName] = useState('');
    const [pokemonSprite, setPokemonSprite] = useState('');

    const fetchData = async () => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
            if (!response.ok) {
                throw new Error('Could not fetch resource');
            }
            const data = await response.json();
            setPokemonSprite(data.sprites.front_default);
            
        } catch (error) {
            console.error(error);
            alert("We couldn't find the pokemon :( , Try these names: Pikachu Bulbasaur Ivysaur Venusaur Charmander Charmeleon Charizard Squirtle Wartortle Blastoise Pidgey Pidgeotto")
        }
    };

    return (
        <div className='container'>
            <h1>Fetch the pokemon of your choice</h1>
            <input
                type="text"
                value={pokemonName}
                onChange={(e) => setPokemonName(e.target.value)}
                placeholder="Enter Pokemon name"
            />
            <button onClick={fetchData}>Fetch Pokemon</button><br />
            {pokemonSprite && (<img className='custom-image' src={pokemonSprite} alt="Pokemon-Sprite" style={{ display: 'block' }}/>)}
        </div>
    );
};

export default PokemonFetch;
