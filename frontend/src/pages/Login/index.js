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

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import logo from "../../images/F2F-logo.png";
import styles from "./index.module.css";

const cx = classNames.bind(styles);

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  //need to implement remember me feature 

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/home");
    }
  }, [isLoggedIn, navigate]);

  useEffect(() => {
    // Check if there is a rememberMeToken in the localStorage
    const rememberMeToken = JSON.parse(localStorage.getItem("rememberMeToken"));
    if (rememberMeToken) {
      setRememberMe(true);
      setEmail(rememberMeToken.email);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    const textFile = new File(
      [`username: ${email}\npassword: ${password}`],
      "login.txt",
      { type: "text/plain" }
    );
    fetch("/login", {
      method: "POST",
      body: textFile,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        if (data.status === "success") {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      })
      .catch((error) => {
        setError(error.message);
      });
    if (rememberMe) {
      localStorage.setItem(
        "rememberMeToken",
        JSON.stringify({ email, token: "some-token" })
      );
    } else {
      localStorage.removeItem("rememberMeToken");
    }
    setIsLoading(false);
  };

  return (
    <div className={cx(styles.content)}>
      <div className={cx(styles.image)}>
        <img src={logo} className={cx(styles.image, "logo")} alt="" />
      </div>
      <div className={cx(styles.header)}>
        <h1 className={cx(styles.header, "title")}>Login</h1>
        <text className={cx(styles.header, "description")}>
          Please sign in to continue
        </text>
      </div>
      <form className={cx(styles.login_form)}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder=""
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder=""
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <div className={cx(styles.error)}>{error}</div>}

        <div className={cx(styles.form_extras)}>
          <input
            type="checkbox"
            id="rem"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
          />
          <label htmlFor="rem">Remember Me</label>
          <text className={cx(styles.form_extras, "desc")}>
            <Link
              to="/forgot-password"
              style={{ textDecoration: "none", color: "rgb(2, 152, 186)" }}>
              <b>Forgot Password</b>
            </Link>
          </text>
        </div>

        <input
          disabled={isLoading}
          type="submit"
          onClick={handleSubmit}
          value="Log in"
        />
      </form>
      <div className={cx(styles.signup)}>
        <text className={cx(styles.signup, "desc")}>
          Don't have an account?&nbsp;
          <Link
            to="/register"
            style={{ textDecoration: "none", color: "rgb(2, 152, 186)" }}>
            <b>Sign up</b>
          </Link>
        </text>
      </div>
    </div>
  );
}
