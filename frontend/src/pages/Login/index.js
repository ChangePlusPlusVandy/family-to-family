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
    <div>
      <img src={logo} />
      <h1 className="title">Login</h1>
      <p className="description">Please sign in to continue</p>
      <form>
        <p>Email</p>
        <input type="text" placeholder="" />
        <p>Password</p>
        <input type="text" placeholder="" />
        <input type="checkbox" />
        <p>Forgot Password?</p>
        <div className="submitButton">
          <p>Log In</p>
        </div>
      </form>
    </div>
  );
}
