import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import AddE from "./pages/employee/Add.js";
import All from "./pages/employee/All.js";


function App() {
  return (
    <BrowserRouter>
      <div>Zarządzanie</div>
      <div style={{display:'flex'}}>
    <Menu menuButton={<MenuButton>Pracownicy</MenuButton>}>
      <MenuItem href="/employee/add">Nowy pracownik</MenuItem>
      <MenuItem href="/employee/all">Lista pracowników</MenuItem>
    </Menu>    
    <Menu menuButton={<MenuButton>Grafik</MenuButton>}>
      <MenuItem href="" >Nowy grafik</MenuItem>
    </Menu>    
    <a href="/"><button>Strona główna</button></a>
    <a href="/login"><button>Zaloguj</button></a>
    <a href="/register"><button>Zarejestruj</button></a>
    </div>
      { <Routes>
        {/* <Route path="/" element={<Office/>}/>
         <Route path="*" element={<Error/>}/> */}
        <Route path="employee/add" element={<AddE/>}/>
        <Route path="employee/all" element={<All/>}/>
        {/* <Route path="client/:id" element={<Client/>}/>
         <Route path="client/:id/visits/add" element={<AddV/>}/> */}
        {/* <Route path="login" element={<Login/>}/>
         <Route path="register" element={<Registration/>}/> */}
      </Routes> }
      </BrowserRouter>
  );
}

export default App;
