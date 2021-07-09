import React, { useState, useEffect } from "react";
import SelectedAlcohol from "./SelectedAlcohol/SelectedAlcohol.jsx";
import axios from "axios";

const AlcoholSearch = ({
  showLogin,
  logout,
  showList,
  setShowList,
  gin,
  vodka,
  showRandom,
  setShowRandom,
  drinkName,
  setDrinkName,
  rum,
  tequila,
  currentUsers,
  user
}) => {
  const [selectedTag, setSelectedTag] = useState("");
  const [random, setRandom] = useState([]);

  const handleClear = (e) => {
    setSelectedTag('')
  }

  const getRandom = () => {
    axios({
      url: "http://localhost:3000/random",
      method: "GET",
    })
      .then((response) => {
        setRandom(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getRandom();
  }, []);

  const setAlcohol = (e) => {
    setSelectedTag(e.target.value);
    setShowList(true);
    setShowRandom(false);
  };
  const randomDrink = () => {
    setShowList(false);
    setShowRandom(true);
    getRandom();
    handleClear()
  };

  const resetSearch = () => {
    handleClear()
    setShowList(false);
    setShowRandom(false);
  };

  return (
    <div>
      {showLogin === false && (
        <>
          <h1 style={{ margin: "30px" }}>
            Welcome to the wonderful list of alcohol
          </h1>
          <span>
            <button
              style={{ float: "right", cursor: "pointer", marginRight: "30px", borderRadius: '25px', backgroundColor: 'rgba(253,187,45,1)', color: 'black'  }}
              onClick={() => {logout(), handleClear()}}
            >
              Log Out
            </button>
          </span>
          <h3 style={{ margin: "30px" }}>
            Search different alcohol types to see recipes
          </h3>
          <div>
            <form>
              <select
                onChange={setAlcohol}
                value={selectedTag}
                style={{ margin: "30px", borderRadius: '1px', backgroundColor: 'rgba(253,187,45,1)', color: 'black' , borderRadius: '25px'  }}
              >
                <option>Choose here</option>
                <option>Vodka</option>
                <option>Gin</option>
                <option>Rum</option>
                <option>Tequila</option>
              </select>
            </form>
            <button
              style={{ margin: "30px", cursor: "pointer", borderRadius: '25px', backgroundColor: 'rgba(253,187,45,1)', color: 'black'  }}
              onClick={() => resetSearch()}
            >
              Make new Search
            </button>
            <br></br>
            <button
              style={{ marginTop: "30px", margin: "30px", cursor: "pointer", borderRadius: '25px', backgroundColor: 'rgba(253,187,45,1)', color: 'black'  }}
              onClick={() => randomDrink()}
            >
              Make Me A Random Drink
            </button>
            <SelectedAlcohol
              setDrinkName={setDrinkName}
              drinkName={drinkName}
              random={random}
              showList={showList}
              gin={gin}
              selectedTag={selectedTag}
              showRandom={showRandom}
              vodka={vodka}
              rum={rum}
              tequila={tequila}
              currentUsers={currentUsers}
              user={user}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default AlcoholSearch;
