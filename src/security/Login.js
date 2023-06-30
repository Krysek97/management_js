import { useState } from "react";
import axios from 'axios';
import Cookies from "universal-cookie";
// import AuthService from "../../services/AuthService";

function Login(){

  const [username , setUsername] = useState('');
  const [password , setPassword] = useState('');
  const cookie = new Cookies;

  // States for checking the errors
  const [error, setError] = useState(false);


  const handleUsernameChange =(e)=>{
    setUsername(e.target.value);
  }   
  const handlePasswordChange =(e)=>{
    setPassword(e.target.value);
  }

  
    const handleSubmit = (event) => {
      //Prevent page reload
      event.preventDefault();
      if (username === '' || password === '') {
        setError(true);
      } else {
        setError(false);
      }

      const body = {
        username: username,
        password: password
      };
      console.log(body);
      let config = {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "*",
        }
      }
  // /api/authenticate

  axios.post("http://localhost:8080/api/authenticate",body, config)
        .then((response) => {
          console.log(response.data);
          cookie.set('token', response.data.token)
          window.location.replace("/home");
        })
        .catch((error) => {
          console.log(error);
        })
    };

    const errorMessage = () => {
      return (
        <div
          className="error"
          style={{
            display: error ? '' : 'none',
          }}>
          <h1>Please enter credentials</h1>
        </div>
      );
    };


    return (
        <section className="vh-100 gradient-custom">
  <div className="container">
    <div className="row d-flex justify-content-center align-items-center py-5 h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card bg-dark text-white">
          <div className="card-body p-5 text-center">

            <form className="mb-md-5 mt-md-4 pb-5" onSubmit={(e) => {handleSubmit(e)}} >
            
              <h2 className="fw-bold mb-2 text-uppercase">Logowanie</h2>
              <p className="text-white-50 mb-5">Wprowadź login i hasło</p>
            <div className="error">
            {errorMessage()}
            </div>

              <div className="form-outline form-white mb-4">
                <input value={username} onChange={(e) => {handleUsernameChange(e)}} type="text" id="username" className="form-control form-control-lg" />
                <label className="form-label" for="username">Login </label>
              </div>

              <div className="form-outline form-white mb-4">
                <input value={password} onChange={(e) => {handlePasswordChange(e)}} type="password" id="password" className="form-control form-control-lg" />
                <label className="form-label" for="password">Hasło</label>
              </div>

              <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Zapomniałeś hasła?</a></p>

              <input className="btn btn-outline-light btn-lg px-5" type="submit" value="Zaloguj"/>

              <div className="d-flex justify-content-center text-center mt-4 pt-1">
                <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
              </div>
            </form>

            <div>
              <p className="mb-0">Nie masz konta? <a href="/register" className="text-white-50 fw-bold">Zarejestruj</a>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    );
  };
  
  export default Login;