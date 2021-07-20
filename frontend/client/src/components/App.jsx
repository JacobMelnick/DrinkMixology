import React, { useEffect, useState } from "react";
import Header from "./header/Header.jsx";
import Login from "./Login/Login.jsx";
import AlcoholSearch from "./AlcoholSearch/AlcoholSearch.jsx";
import axios from "axios";

const App = () => {
  const [showRandom, setShowRandom] = useState(false);
  const [showList, setShowList] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [gin, setGin] = useState([]);
  const [vodka, setVodka] = useState([]);
  const [rum, setRum] = useState([]);
  const [tequila, setTequila] = useState([]);
  const [currentUsers, setCurrentUsers] = useState([]);
  const [drinkName, setDrinkName] = useState([])
  const [user, setUser] = useState({
    user: "",
    password: "",
  });

  useEffect(() => {
    getData();
    postData()
  }, []);

  
  const postData = () => {
    axios
      .post("/users", {
        
        username: user.user.toLowerCase(),
        password: user.password.toLowerCase(),
        drinks: [...drinkName]
      })
      .then((response) => console.log())
      .catch((err) => console.log(err));
  };

  const getData = () => {
    
      axios({
      url: "/getData",
      method: "GET",
    })
      .then((response) => {
        setGin(response.data);
      })
      .catch((err) => console.log(err));

    axios({
      url: "/getVodka",
      method: "GET",
    })
      .then((response) => {
        setVodka(response.data);
      })
      .catch((err) => console.log(err));

    axios({
      url: "/getRum",
      method: "GET",
    })
      .then((response) => {
        setRum(response.data);
      })
      .catch((err) => console.log(err));

    axios({
      url: "/getTequila",
      method: "GET",
    })
      .then((response) => {
        setTequila(response.data);
      })
      .catch((err) => console.log(err));

    axios
      .get("/users")
      .then((response) => {
        setCurrentUsers(response.data);
      })
      .catch((err) => console.log(err));
  };

  const showLoginScreen = () => {
    
    if (user.user === "" || user.password === "") {
      alert("please fill out all data to login");
    } else {
      if (currentUsers.length === 0) {
        alert("please register first");
      }
      currentUsers.map((person) => {
        if (person.username === user.user && person.password === user.password) {
          postData();
          setShowLogin(!showLogin);
        } else if (
          person.username === user.user &&
          person.password !== user.password
        ) {
          alert("wrong password");
        }
      });
    }

  };

  const handleNewUser = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const logout = () => {
    setShowRandom(false);
    setShowLogin(!showLogin);
    setShowList(false);
    setUser({ user: "", password: "" });
    setDrinkName([])
    getData();
    postData()
  };


  return (
    <div className="body">
      <div>
        <Header />
      </div>
      <div>
        <Login
          showLoginScreen={showLoginScreen}
          handleNewUser={handleNewUser}
          showLogin={showLogin}
          user={user}
          currentUsers={currentUsers}
          getData={getData}
        />
      </div>
      <div>
        <AlcoholSearch
          drinkName={drinkName}
          setDrinkName={setDrinkName}
          showLogin={showLogin}
          setShowRandom={setShowRandom}
          showRandom={showRandom}
          logout={logout}
          showList={showList}
          setShowList={setShowList}
          gin={gin}
          vodka={vodka}
          rum={rum}
          tequila={tequila}
          currentUsers={currentUsers}
          user={user}
        />
      </div>
    </div>
  );
};

export default App;
