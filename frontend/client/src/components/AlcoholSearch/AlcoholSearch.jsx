import React from "react";
import SelectedAlcohol from './SelectedAlcohol/SelectedAlcohol.jsx';

const AlcoholSearch = ({ showLogin, logout, fakeData }) => {

  //create a button to generate a random cocktail
    //uses random cocktail API

  const searchAlcohol = () => {
    //set state to be selected tags 
    // filter alcohol based on those tags
    // render those filtered alcohols
  }

  const resetSearch = () => {
    //reset state variables
  
  }


  return (
    <div>
      {showLogin === false && (
        <>
        
          <h1>Welcome to the wonderful list of alcohol</h1>
          <span><button style={{float: 'right', cursor: 'pointer'}} onClick={() => logout()}>Log Out</button></span>
          <h3>Search different alcohol types to see recipes</h3>
          <div>
            <h3>Main Ingredient</h3>
            <form>
              <select>
                <option>Vodka</option>
                <option>Gin</option>
                <option>Rum</option>
                <option>Tequila</option>
              </select>
            </form>
            <h3>Other Ingredients</h3>
            <form>
              <select>
                <option>Vodka</option>
                <option>Gin</option>
                <option>Rum</option>
                <option>Tequila</option>
              </select>
            </form>
            <button style={{marginTop: '50px', cursor: 'pointer'}}>Search</button>
            <button style={{marginLeft: '30px', cursor: 'pointer'}}>Make new Search</button>
          <SelectedAlcohol fakeData={fakeData}/>
          </div>
        </>
      )}
    </div>
  );
};

export default AlcoholSearch;
