import React from 'react';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import AuthService from '../services/AuthService';


function Navbar() {
  return (
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Manager</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" 
    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Prawcownicy
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/employee/add">Dodaj pracownika</a></li>
            <li><a class="dropdown-item" href="/employee/all">Lista pracowników</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Grafik
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Ogólny</a></li>
            <li><a class="dropdown-item" href="#">Urolpy</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Eksport</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" onClick={AuthService.logout} href="/">Wyloguj</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
}

export default Navbar;
