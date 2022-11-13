import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Adduser from "./Adduser";

const Home = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(userData);
  function removeUser(id) {
    const user = [...userData];
    for(let i=0; i< user.length; i++){
        if(user[i].id == id){
            user.splice(i, 1);
            break;

        }
    }
    setUserData(user);
  }

  const showBtn =()=>{
    
  }

  return (
    <>
      <div>
        {userData.map((info) => {
          return (
            <>
              <div className="card">
                <div className="x">
                  {info.id >3 ? <button
                      className="btnX"
                      onClick={() => removeUser(info.id)}
                    >
                      X
                    </button> : null}
                    
                  
                </div>
                <div className="cardBody">
                   
                  <h3>Name: {info.name}</h3>
                  <h3>email: {info.email}</h3>
                  <h3>city: {info.address.city}</h3>
                </div>
               
              </div>
              
            </>
          );
        })}   



        <Adduser/>

      </div>
    </>
  );
};

export default Home;
