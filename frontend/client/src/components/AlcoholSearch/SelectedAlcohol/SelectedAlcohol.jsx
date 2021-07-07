import React from "react";
import DisplayAlcohol from "./DisplayAlcohol.jsx";
const SelectedAlcohol = ({ random, showList, gin, selectedTag, showRandom, vodka }) => {
    
    
  return (
    <div>
      <div>
        {showList &&
          selectedTag === "Gin" && 
          gin.map((drink, i) => <DisplayAlcohol drink={drink} key={i} showList={showList}/>)}
      </div>
      <div>
        {showList &&
          selectedTag === "Vodka" && 
          vodka.map((drink, i) => <DisplayAlcohol drink={drink} key={i} showList={showList}/>)}
      </div>
      <div>
          {showList === false && showRandom === true &&
          random.drinks.map((drink, i) => <DisplayAlcohol drink={drink} key={i} showRandom={showRandom}/>)
          }
          
      </div>
    </div>
  );
};

export default SelectedAlcohol;
