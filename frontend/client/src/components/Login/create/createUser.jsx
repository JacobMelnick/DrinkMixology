import React, {useEffect, useState} from 'react'
import axios from 'axios'
const CreateUser = ({currentUsers, setShowCreate, showCreate, getData}) => {
    const [newUsers, setNewUsers] = useState({
        user: '',
        password: ''
    })

    const handleAdd = () => {
        currentUsers.map((person) => {
            if(newUsers.user !== person.username && newUsers.password !== person.password){
                axios
                .post("http://localhost:3000/users", {
                  username: newUsers.user.toLowerCase(),
                  password: newUsers.password.toLowerCase(),
                })
                .then((response) => console.log())
                .catch((err) => console.log(err));
            } 
        })
        setShowCreate(!showCreate)
        getData()
    }

    const handleUser = (e) => {
        const name = e.target.name;
    const value = e.target.value;
    setNewUsers({ ...newUsers, [name]: value });
    }

    return (
        <div>
        <form style={{ padding: "15px"}}>
          <input
            style={{ margin: "15px", marginLeft: "45%", width: '10%',  backgroundColor: '#EEFCF8', opacity: '1', fontWeight: 'bold', color: '#035E7B', borderRadius: '25px' }}
            type="text"
            name='user'
            placeholder="user"
            onChange={handleUser}
          ></input>
          <br></br>
          <input
            style={{ margin: "15px", marginLeft: "45%", width: '10%', backgroundColor: '#EEFCF8', opacity: '1', fontWeight: 'bold', color: '#035E7B', borderRadius: '25px' }}
            type="text"
            name='password'
            placeholder="password"
            onChange={handleUser}
          ></input>
        </form>
        <button  style={{width: '10%', marginLeft: '45%', padding: '5px', cursor: 'pointer', borderRadius: '25px', backgroundColor: 'rgba(253,187,45,1)', color: 'black'}} onClick={() => handleAdd()}>Add new User</button>
        </div>
    )

}


export default CreateUser