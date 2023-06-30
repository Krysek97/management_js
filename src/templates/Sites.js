import { Routes, Route } from "react-router-dom";
import AddE from "../pages/employee/AddE.js";
import All from "../pages/employee/All.js";
import Chart from '../pages/chart/Chart.js';
import Error from '../pages/Error.js';
import Employee from '../pages/employee/Employee.js';
import AddC from '../pages/chart/AddC.js';
import Home from "../pages/main/Home.js";
import Login from "../security/Login.js";
import Register from "../security/Register.js";

function Sites() {
    return (
     <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/home" element={<Home/>}/>
          <Route path="*" element={<Error/>}/>
          <Route path="employee/add" element={<AddE/>}/>
          <Route path="employee/all" element={<All/>}/>
          <Route path="chart" element={<Chart/>}/>
          <Route path='employee/:id' element={<Employee/>}/> 
          <Route path='/employee/:id/shift/add' element={<AddC/>}/>
        </Routes>
    );
  }
  
  export default Sites;
  