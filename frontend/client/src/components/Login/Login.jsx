import React, {useState} from "react";

const Login = ({showLoginScreen, handleNewUser, showLogin}) => {


   
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      { showLogin === true &&
      <>
        <h1 style={{ margin: "15px", marginLeft: "45%" }}>Please login to see recipes</h1>
        <form style={{ padding: "15px"}}>
          <input
            style={{ margin: "15px", marginLeft: "45%", width: '10%' }}
            type="text"
            name='user'
            placeholder="user"
            onChange={handleNewUser}
          ></input>
          <br></br>
          <input
            style={{ margin: "15px", marginLeft: "45%", width: '10%' }}
            type="text"
            name='password'
            placeholder="password"
            onChange={handleNewUser}
          ></input>
        </form>
          <button style={{width: '5%', marginLeft: "48%", padding: '5px', cursor: 'pointer' }}  onClick={(e) => showLoginScreen(e)}>Login</button>
        </>
      }
    </div>
  );
};

export default Login;
