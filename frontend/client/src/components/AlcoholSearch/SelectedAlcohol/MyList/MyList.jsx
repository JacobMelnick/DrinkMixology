import React, {useState} from "react";
import Ingredients from "../Ingredients.jsx";
const MyList = ({ drinkName, currentUsers, user, id }) => {
const [details, setDetails] = useState(false)


  return (
    <div style={{ margin: "30px" }} onClick={() => setDetails(!details)}>
      <h2 style={{ textDecoration: "underline" }}>My Saved Drinks</h2>{
          currentUsers.map((current, i) => (
              current.username === user.user ? <div key={i}>{current.drinks !== null ? current.drinks.map((item) => <h4>{item}</h4>) : null}</div> : null
          ))
        }
      <div style={{ display: "flex", flexDirection: "column", cursor: 'pointer' }} >
        {drinkName.map((drink, i) => (
            <>
            <h4 key={i} onClick={() => setDetails(!details)}>{drink}</h4>
            {details &&
            id.map((curr) => (curr.drinks.map((item, i) => (
            
              drink === item.strDrink ?
                <Ingredients curr={curr} item={item} key={i}/> : null
            
            ))))
            }
          </>
            ))}
      </div>
    </div>
  );
};

export default MyList;
