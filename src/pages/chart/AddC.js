import axios from 'axios';
import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function AddC(){
    const [date , setDate] = useState('');
    const [type , setType] = useState('');

  const [employee, setEmployee] = useState([]);
    const {id} = useParams()
    useEffect(() => {
      fetchEmployee();
    }, []);
  const fetchEmployee = () => {
    axios
      .get('http://localhost:8080/employee/'+id)
      .then((res) => {
        setEmployee(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
    }

  const handleDateChange =(e)=>{
    setDate(e.target.value);
  }
  const handleTypeChange =(e)=>{
    setType(e.target.value);
  }

  const handleSubmit=(e)=>{
    alert('Ustawiono zmianę');
      e.preventDefault();
      const body = {
        date: date,
        type: type,
        employeeId: employee.id,
      };
      console.log(body);
      let config = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        }
      };
      
      axios.post("http://localhost:8080/shift/update", body)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }

return (
  <form onSubmit={(e) => {handleSubmit(e)}}>
  <h2> Tworzenie grafiku </h2>
    <label>
        Pracownik:
      </label><br/>
      <div>{employee.name} {employee.lastname}</div>
      <label >
        Data:
      </label><br/>
      <input name='date' type="date" value={date} required onChange={(e) => {handleDateChange(e)}} /><br/>
    <DropdownButton id="dropdown-basic-button" title="Zmiana">
      <Dropdown.Item href="">Pierwsza</Dropdown.Item>
      <Dropdown.Item href="">Druga</Dropdown.Item>
      <Dropdown.Item href="">Trzecia</Dropdown.Item>
    </DropdownButton>      
    <input type="submit" value="Potwierdź"/>
    </form>
);
}       

export default AddC;