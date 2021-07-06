import React from 'react'

const Ingredients = ({item}) => {


    return (
        <span style={{display: 'flex', justifyContent: 'space-between'}}>
            {item}
        </span>
    )
}

export default Ingredients