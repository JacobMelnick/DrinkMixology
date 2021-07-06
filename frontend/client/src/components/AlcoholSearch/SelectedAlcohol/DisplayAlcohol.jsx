import React from 'react'
import Ingredients from './Ingredients.jsx'
const DisplayAlcohol = ({drink}) => {
    
    return (
        <div style={{marginLeft: '40%'}}>
            <h2 style={{marginLeft: "10%"}}>{drink.name}</h2>
            <img src={drink.photo} style={{height: '400px', height: '600px'}}></img>
            <h3>{drink.ingredients.map((item, i) => (
                < Ingredients item={item} key={i}/>
            ))}</h3>
        </div>
    )
}


export default DisplayAlcohol