import React, { useState } from 'react'

const Adduser = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [city, setCity] = useState('')

const addClick =()=>{
    console.log(name,email,city)
    if(name && email && city){
        alert('New user updated successfully..!!')

    }
    setName('')
    setEmail('')
    setCity('')
}

  return (
    <div className='addUser'>
      <h2>Create New User</h2>
      <label>Name :</label>
      <input type={"text"}
      value={name}
      onChange={(e)=>{setName(e.target.value)}}></input>
      <label>Email :</label>
      <input type={"text"}
      value={email}
      onChange={(e)=>{setEmail(e.target.value)}}></input>
      <label>City :</label>
      <input type={"text"}
      value={city}
      onChange={(e)=>{setCity(e.target.value)}}></input>
      <button onClick={()=>addClick()}>Create User</button>
    </div>
  )
}

export default Adduser
