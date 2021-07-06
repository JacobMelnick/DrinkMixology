import React, {useState} from "react";
import Header from "./header/Header.jsx";
import Login from "./Login/Login.jsx";
import AlcoholSearch from "./AlcoholSearch/AlcoholSearch.jsx";
import axios from 'axios'
import alcohol from '../../../../fakedata.js'

const App = () => {
    const [showLogin, setShowLogin] = useState(true)
    const [fakeData, setFakeData] = useState(alcohol)
    const [user, setUser] = useState({
        user: '',
        password: ''
    })
    
    const getData = () => {
      console.log(alcohol);
    axios({
         url: 'www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin',
        method: 'GET'
        })
        .then((response) => console.log(response))
        .catch((err) => console.log(err))
    }

    const showLoginScreen = () => {
      if(user.user === '' || user.password === '' ) {
        alert('please fill out all data to login')
      } else {
        setShowLogin(!showLogin)
      }
      axios.post('/users', {username: user.user, password: user.password})
      .then((response) => console.log(response))
      .catch((err) => console.log(err))
      // add login authorization here
        // if user exist search db to check for correct password
            // if wrong password error message
      // if username doesnt exist add to db
        getData()
    }

    const handleNewUser = (e) => {
        const name = e.target.name
        const value = e.target.value
        setUser({...user, [name] : value})
    }

    const logout = () => {
      setShowLogin(!showLogin)
      setUser({user: '', password: ''})
    }
  
  return (
    <div className="body">
      <div>
        <Header />
      </div>
      <div>
        <Login showLoginScreen={showLoginScreen} handleNewUser={handleNewUser} showLogin={showLogin} user={user}/>
      </div>
      <div>
        <AlcoholSearch showLogin={showLogin} logout={logout} fakeData={fakeData}/>
      </div>
    </div>
  );
};

export default App;
