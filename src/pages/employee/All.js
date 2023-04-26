import React, {useState, useEffect} from 'react';
import axios from 'axios';

function All(){
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    fetchEmployees();
  }, []);
  const fetchEmployees = () => {
    axios
      .get('http://localhost:8080/employee/all')
      .then((res) => {
        //console.log(res);
        setEmployees(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
    }
  return (
    <div>
      <h1>Wszyscy pracownicy</h1>
      <div className='employee-container'>
        {employees.map((employee)=>(
          <div className='card'>
            <div>{employee.id}. {employee.name} {employee.lastname} <a class="btn btn-primary"href={'/employee/'+employee.id}>Przejdź do pracownika</a></div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default All;