import React, { useState } from "react";
import CreateUser from "./create/createUser.jsx";

const Login = ({
  showLoginScreen,
  handleNewUser,
  showLogin,
  currentUsers,
  getData,
}) => {
  const [showCreate, setShowCreate] = useState(false);

  const handleCreate = () => {
    setShowCreate(true);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {showLogin === true && showCreate === false && (
        <>
          <h1 style={{ margin: "15px", marginLeft: "45%" }}>
            Please login to see recipes
          </h1>
          <form style={{ padding: "15px" }}>
            <input
              style={{
                margin: "15px",
                marginLeft: "45%",
                width: "10%",
                backgroundColor: "#EEFCF8",
                opacity: "1",
                fontWeight: "bold",
                color: "#035E7B",
                borderRadius: "25px",
              }}
              type="text"
              name="user"
              placeholder="user"
              onChange={handleNewUser}
            ></input>
            <br></br>
            <input
              style={{
                margin: "15px",
                marginLeft: "45%",
                width: "10%",
                backgroundColor: "#EEFCF8",
                opacity: "1",
                fontWeight: "bold",
                color: "#035E7B",
                borderRadius: "25px",
              }}
              type="password"
              name="password"
              placeholder="password"
              onChange={handleNewUser}
            ></input>
          </form>
          <span
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <button
              style={{
                width: "5%",
                padding: "5px",
                cursor: "pointer",
                borderRadius: "25px",
                backgroundColor: "rgba(253,187,45,1)",
                color: "black",
              }}
              onClick={(e) => showLoginScreen(e)}
            >
              Login
            </button>
            <button
              style={{
                width: "5%",
                marginLeft: "15px",
                padding: "5px",
                cursor: "pointer",
                borderRadius: "25px",
                backgroundColor: "rgba(253,187,45,1)",
                color: "black",
              }}
              onClick={() => handleCreate()}
            >
              Create User
            </button>
          </span>
        </>
      )}
      <div>
        {showCreate && (
          <CreateUser
            currentUsers={currentUsers}
            setShowCreate={setShowCreate}
            showCreate={showCreate}
            getData={getData}
          />
        )}
      </div>
    </div>
  );
};

export default Login;
