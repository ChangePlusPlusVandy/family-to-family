// import React, { useState } from "react";
// import { Link, useHistory } from "react-router-dom";
// import { useAuth } from "../../lib/AuthContext";

// export const Login = () => {
//   const { login } = useAuth();
//   const history = useHistory();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     try {
//       await login(email, password);
//       history.push("/"); // Redirect to home page
//     } catch (error) {
//       setError(error.message);
//     }
//     setIsLoading(false);
//   };

//   return (
//     <div>
//       <h1>Welcome to the React Firebase Auth template project</h1>
//       <h1>Login</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <button disabled={isLoading} type="submit">
//           {isLoading ? "Loading..." : "Login"}
//         </button>
//         {error && <p>{error}</p>}
//       </form>
//       <p>
//         Don't have an account? <Link to="/register">Register</Link>
//       </p>
//       <p>
//         Forgot your password? <Link to="/forgot-password">Reset</Link>
//       </p>
//     </div>
//   );
// };

// export default Login;

import React from "react";
import logo from "./F2F-logo.png";
import "./index.css";

export default function Login() {
  return (
    <div className="content">
      <img src={logo} className="logo" alt="" />
      <h1 className="title">Login</h1>
      <p className="description">Please sign in to continue</p>
      <form className="loginForm">
        <p>Email</p>
        <input type="text" placeholder="" />
        <p>Password</p>
        <input type="password" placeholder="" />
        <div className="form-extras">
          <input type="checkbox" id="rem" />
          <label htmlFor="rem">Remember Me</label>
          <p>Forgot Password?</p>
        </div>
        <input type="submit" value="Log in"></input>
      </form>
      <div className="signup">
        <p className="signup=desc">Don't have an account?&nbsp;</p>
        <p className="link-signup">Sign up</p>
      </div>
    </div>
  );
}
