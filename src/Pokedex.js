import React, { Component } from 'react';
import Pokecard from './Pokecard'

class Pokedex extends Component {
    render(){
        const pokemans = [
            {id: 4,  name: 'Charmander', type: 'fire'},
            {id: 7,  name: 'Squirtle',   type: 'water'},
            {id: 12, name: 'Butterfree', type: 'flying'},
            {id: 19, name: 'Rattata',    type: 'normal'},
            {id: 11, name: 'Metapod',    type: 'bug'},
            {id: 209, name: '?????',    type: 'bug'},
            {id: 30, name: '?????',    type: 'bug'},
            {id: 58, name: '?????',    type: 'bug'},
            {id: 99, name: '?????',    type: 'bug'},
            {id: 205, name: '?????',    type: 'bug'},
            {id: 721, name: '?????',    type: 'bug'},
            {id: 802, name: '?????',    type: 'bug'},
          ];
        
        return(
            <div>
                <h1>Pokedex</h1>
                <ul>
                {pokemans.map(h => <Pokecard id={h.id} name={h.name} type={h.type} />)}
                </ul>
            </div>
        )
    }
}

export default Pokedex;