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

import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "./F2F-logo.png";
import "./index.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const textFile = new File(
      [`username: ${email}\npassword: ${password}`],
      "login.txt",
      { type: "text/plain" }
    );

    // Send a request to the backend with the username and password
    fetch("/login", {
      method: "POST",
      body: textFile,
    }).then((response) => {
      // Handle the response from the backend
    });
    setIsLoading(false);
  };

  return (
    <div className="content">
      <div className="image">
        <img src={logo} className="logo" alt="" />
      </div>
      <h1 className="title">Login</h1>
      <p className="description">Please sign in to continue</p>
      <form className="loginForm">
        <p>Email</p>
        <input
          type="text"
          placeholder=""
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p>Password</p>
        <input
          type="password"
          placeholder=""
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="form-extras">
          <input type="checkbox" id="rem" />
          <label htmlFor="rem">Remember Me</label>
          <p>
            <Link to="/forgot-password">Forgot Password</Link>?
          </p>
        </div>
        <input
          disabled={isLoading}
          type="submit"
          onClick={handleSubmit}
          value="Log in"></input>
      </form>
      <div className="signup">
        <p className="signup=desc">Don't have an account?&nbsp;</p>
        <p className="link-signup">
          <Link to="/home">Sign up</Link>
        </p>
      </div>
    </div>
  );
}
