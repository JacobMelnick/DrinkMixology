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
  const [user, setUser] = useState({
    user: "",
    password: "",
  });
  const [currentUsers, setCurrentUsers] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const postData = () => {
    axios
      .post("http://localhost:3000/users", {
        username: user.user.toLowerCase(),
        password: user.password.toLowerCase(),
      })
      .then((response) => console.log())
      .catch((err) => console.log(err));
  };

  const getData = () => {
    axios({
      url: "http://localhost:3000/getData",
      method: "GET",
    })
      .then((response) => {
        setGin(response.data);
      })
      .catch((err) => console.log(err));

    axios({
      url: "http://localhost:3000/getVodka",
      method: "GET",
    })
      .then((response) => {
        setVodka(response.data);
      })
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:3000/users")
      .then((response) => {
        setCurrentUsers(response.data);
      })
      .catch((err) => console.log(err));
  };

  const showLoginScreen = () => {
    if (user.user === "" || user.password === "") {
      alert("please fill out all data to login");
    } else {

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
    getData();
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
          showLogin={showLogin}
          setShowRandom={setShowRandom}
          showRandom={showRandom}
          logout={logout}
          showList={showList}
          setShowList={setShowList}
          gin={gin}
          vodka={vodka}
        />
      </div>
    </div>
  );
};

export default App;
