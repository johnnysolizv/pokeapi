import React, { useState } from 'react';
import fetchAxios from '../actions/fetchAxios';

const Pokemones = () => {
    const [items, setItems] = useState([]);


    const getPokemon = async () => {
        try{
            const arr = await fetchAxios();
            setItems(arr);
        } catch (err) {
            alert(err);
        }
    }

    const listItems = items.map((name, key) => <li key={key}>{name}</li>);

    return (
        <section className="pokemon-section">
            <h1>Pokemon API</h1>
            <button onClick={getPokemon}>Fetch Pokemon</button>
            <ul>{listItems}</ul>
        </section>
    );
};

export default Pokemones;
