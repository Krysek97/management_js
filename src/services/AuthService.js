// import axios from "axios";

// const API_URL = "http://localhost:8080/api/authenticate";

// class AuthService {
//   login(username, password) {
//     return axios
//       .post(API_URL, {
//         username,
//         password
//       })
//       .then(response => {
//         if (response.data.accessToken) {
//           localStorage.setItem("user", JSON.stringify(response.data));
//         }

//         return response.data;
//       });
//   }

//   logout() {
//     localStorage.removeItem("user");
//   }

//   register(username, email, password) {
//     return axios.post("http://localhost:8080/user/add", {
//       username,
//       email,
//       password
//     });
//   }

//   getCurrentUser() {
//     return JSON.parse(localStorage.getItem('user'));
//   }
// }

// export default new AuthService();
