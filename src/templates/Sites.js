import { Routes, Route } from "react-router-dom";
import AddE from "../pages/employee/AddE.js";
import All from "../pages/employee/All.js";
import Chart from '../pages/chart/Chart.js';
import Error from '../pages/Error.js';
import Main from '../pages/main/Main.js';
import Employee from '../pages/employee/Employee.js';
import AddC from '../pages/chart/AddC.js';

function Sites() {
    return (
     <Routes>
          <Route path="/" element={<Main/>}/>
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
  