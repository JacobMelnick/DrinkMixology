import React from 'react'
import DisplayAlcohol from './DisplayAlcohol.jsx'
const SelectedAlcohol = ({fakeData}) => {



    return (
        <div>
            {
                fakeData.map((drink, i) => (
                    < DisplayAlcohol drink={drink} key={i}/>
                ))
            }
        </div>
    )
}

export default SelectedAlcohol