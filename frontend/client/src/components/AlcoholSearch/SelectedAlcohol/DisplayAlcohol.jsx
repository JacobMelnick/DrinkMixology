import React, {useState, useEffect} from "react";


const DisplayAlcohol = ({ drink, showRandom, showList, handleAddDrink}) => {
   

  return (
    <div style={{ marginLeft: "40%" }}>
      {showList === true && (
        <>
          <h2 className="nameDrink" onClick={(e) => handleAddDrink(e, drink.idDrink)}>{drink.strDrink}</h2>
          <img
            src={drink.strDrinkThumb}
            style={{ height: "400px", height: "600px" }}
          ></img>
        </>
      )}
      {/* <h3>{drink.ingredients.map((item, i) => (
                < Ingredients item={item} key={i}/>
            ))}</h3> */}
      <div>
        {showRandom === true && (
          <>
            <h2 className="nameDrink" onClick={(e) => handleAddDrink(e, drink.idDrink)}s>{drink.strDrink}</h2>
            <span><h3>{drink.strAlcoholic}</h3></span>
            <img
              src={drink.strDrinkThumb}
              style={{ height: "400px", height: "600px" }}
            ></img>
            <span style={{display: 'flex', flexDirection: 'row'}}>
            <h4 >{drink.strIngredient1}</h4> 
            <h4 style={{marginLeft: '10px'}}>{drink.strIngredient2}</h4> 
            <h4 style={{marginLeft: '10px'}}>{drink.strIngredient3}</h4> 
            <h4 style={{marginLeft: '10px'}}>{drink.strIngredient4}</h4> 
            <h4 style={{marginLeft: '10px'}}>{drink.strIngredient5}</h4> 
            <h4 style={{marginLeft: '10px'}}>{drink.strIngredient6}</h4>
            </span>
          </>
        )}
      
      </div>
    </div>
  );
};

export default DisplayAlcohol;
