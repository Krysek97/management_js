import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


function Employee(){
    const [employee, setEmployee] = useState([]);
    const {id} = useParams()
    useEffect(() => {
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
      fetchEmployee();
    }, []);


    return (
     <div>
     <h2>Profil pracownika</h2>
     <div>{employee.name} {employee.lastname}</div>
     <a href={'/employee/'+id+'/shift/add'}><button>Dodaj grafik</button></a>
     </div>
    );
  };

export default Employee;