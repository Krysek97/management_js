import React, { useState } from 'react';
import axios from 'axios';

function AddE(){
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');

  const handleNameChange =(e)=>{
    setName(e.target.value);
  }
  const handleLastnameChange =(e)=>{
    setLastname(e.target.value)
  }

  const handleSubmit=(e)=>{
    alert('Dodano pracownika:"' + name + " " + lastname + '"');
    e.preventDefault();
    const body = {
      name: name,
      lastname: lastname,
    };
    console.log(body);
    let config = {
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "*",
      }
    };

    axios.post("http://localhost:8080/employee/add", body)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }
  return (
    <div>
      <form onSubmit={(e) => {handleSubmit(e)}}>
      <h2> Nowy pracownik </h2>
        <label >
          Imię:
        </label><br/>
        <input name='name' type="text" value={name} required onChange={(e) => {handleNameChange(e)}} /><br/>
        <label >
          Nazwisko:
        </label><br/>
        <input name='lastname' type="text" value={lastname} required onChange={(e) => {handleLastnameChange(e)}} /><br/>
        <input type="submit" value="Potwierdź"/>
      </form>
      </div>
   )
}

export default AddE;