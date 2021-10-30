// import jwtDecode from "jwt-decode";
import http from "./httpService";

const loginEndpoint = "http://localhost:4000/user/login";
const signupEndpoint = "api/users";
const tokenKey = "token";

http.setJwt(getJwt());

export async function login(email, password) {
    const {data}  = await http.post(loginEndpoint, { email, password });
    const { token: jwt } = data;
    localStorage.setItem(tokenKey, jwt);
    return data
  }
  
  export function register(user) {
    return http.post(signupEndpoint, {
      email: user.username,
      password: user.password,
      name: user.name,
    });
  }

  export function getJwt() {
    return localStorage.getItem(tokenKey);
  }

  export function logout() {
    localStorage.removeItem(tokenKey);
  }

//   export function getCurrentUser() {
//     try {
//       const jwt = localStorage.getItem(tokenKey);
//       return jwtDecode(jwt);
//     } catch (ex) {
//       return null;
//     }
//   }