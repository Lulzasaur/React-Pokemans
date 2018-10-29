import React, { Component } from 'react';

class Pokecard extends Component {
    render(){
            const { id, name, type } = this.props;
            const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
            const styleObj = {
                width: '18rem',
                display:'inline-block'
            }

        return(
            <div className="card" style={styleObj}>
                <img className="card-img-top pokemans" src={image} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text">{name}</p>
                    <p className="card-text">{type}</p>
                </div>
            </div>
        )
    }
}

export default Pokecard;