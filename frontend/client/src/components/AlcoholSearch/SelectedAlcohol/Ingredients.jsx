import React from 'react'

const Ingredients = ({item, curr}) => {


    return (
        <span style={{display: 'flex', justifyContent: 'space-between'}}>
            {item.strIngredient1} <br></br>
            {item.strIngredient2} <br></br>
            {item.strIngredient3} <br></br>
            {item.strIngredient4} <br></br>
            {item.strIngredient5} 
        </span>
    )
}

export default Ingredients