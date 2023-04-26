import MainNavbar from "../../templates/MainNavbar";
import { useState } from "react";
import axios from "axios";

function Register(){
    // States for registration
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
   
    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
   
    // Handling the name change
    const handleUsernameChange = (e) => {
      setUsername(e.target.value);
      setSubmitted(false);
    };
   
    // Handling the password change
    const handlePassword = (e) => {
      setPassword(e.target.value);
      setSubmitted(false);
    };
   
    // Handling the form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      if (username === '' || password === '') {
        setError(true);
      } else {
        setSubmitted(true);
        setError(false);
      }
    };
   
    // Showing success message
    const successMessage = () => {
      return (
        <div
          className="success"
          style={{
            display: submitted ? '' : 'none',
          }}>
          <h1>User {username} successfully registered!!</h1>
        </div>
      );
    };
   
    // Showing error message if error is true
    const errorMessage = () => {
      return (
        <div
          className="error"
          style={{
            display: error ? '' : 'none',
          }}>
          <h1>Please enter all the fields</h1>
        </div>
      );
    };

    const body = {
        username: username,
        password: password
      };
      console.log(body);

    axios.post("http://localhost:8080/api/authenticate", body)
    .then((response) => {
      console.log(response.data);
      window.location.replace("/");
    })
    .catch((error) => {
      console.log(error);
    })


    return (
        <div>
        <MainNavbar></MainNavbar>
        <div className="app">
         <div className='login-form'>
          <div className='title'>
            <div>Rejestracja</div>
          </div>
     
          {/* Calling to the methods */}
          <div className="error">
            {errorMessage()}
            {successMessage()}
          </div>
          <form onSubmit = {handleSubmit} className="input-container">
            {/* Labels and inputs for form data */}
            <label className="uname">Login</label>
            <input onChange={handleUsernameChange}
              value={username} type="text" />
     
            <label className="pass">Hasło</label>
            <input onChange={handlePassword}
              value={password} type="password" />
          
          <div className="button-container">
            <input type="submit" value={"Zarejestruj się"}/>
          </div>
            <a href="/">Masz już konto? Zaloguj się</a>
            
          </form>
          </div>
        </div>
        </div>
      );
  }
  
  export default Register;