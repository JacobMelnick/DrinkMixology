import React, {useState} from "react";
import DisplayAlcohol from "./DisplayAlcohol.jsx";
import MyList from './MyList/MyList.jsx'
import axios from 'axios'

const SelectedAlcohol = ({ random, showList, gin, selectedTag, showRandom, vodka, setDrinkName, drinkName, tequila, rum, currentUsers, user }) => {
  
  const [ids, setIds] = useState([])


  const handleAddDrink = (e, id) => {
   
    if (!drinkName.includes(e.target.innerHTML)) {
      setDrinkName(prevArray => [...prevArray, e.target.innerHTML])
    } else {
      return
    }

    axios({
      url: `http://localhost:3000/drinkInfo/${id}`,
      method: "GET",
    })
      .then((response) => {
        
        setIds(prevArray => [...prevArray, response.data])
        
      })
      .catch((err) => console.log(err));
  }

  

  return (
    <div>
        <MyList drinkName={drinkName} currentUsers={currentUsers} user={user} id={ids}/>
      <div>
        {showList &&
          selectedTag === "Gin" && 
          gin.map((drink, i) => <DisplayAlcohol handleAddDrink={handleAddDrink} drink={drink} key={i} showList={showList}/>)}
      </div>
      <div>
        {showList &&
          selectedTag === "Tequila" && 
          tequila.map((drink, i) => <DisplayAlcohol handleAddDrink={handleAddDrink} drink={drink} key={i} showList={showList}/>)}
      </div>
      <div>
        {showList &&
          selectedTag === "Rum" && 
          rum.map((drink, i) => <DisplayAlcohol handleAddDrink={handleAddDrink} drink={drink} key={i} showList={showList}/>)}
      </div>
      <div>
        {showList &&
          selectedTag === "Vodka" && 
          vodka.map((drink, i) => <DisplayAlcohol handleAddDrink={handleAddDrink} drink={drink} key={i} showList={showList}/>)}
      </div>
      <div>
          {showList === false && showRandom === true &&
          random.drinks.map((drink, i) => <DisplayAlcohol handleAddDrink={handleAddDrink} drink={drink} key={i} showRandom={showRandom}/>)
          }
      </div>
      
    </div>
  );
};

export default SelectedAlcohol;
