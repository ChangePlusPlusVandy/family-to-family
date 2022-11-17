import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../lib/AuthContext";
import styles from "./index.module.css";

const Home = () => {
  const [fact, setFact] = useState("");
  const { currentUser } = useAuth();

  // for the request to our backend API. I suggest using ReactQuery. The normal fetch() method is
  // amazing, but it gets tedious when dealing with caching, retries, and so on. ReactQuery takes
  // care of that for us.

  useEffect(() => {
    const fetchFact = async () => {
      console.log("called");
      try {
        const token = await currentUser.getIdToken();

        const payloadHeader = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };

        const res = await fetch("http://localhost:8080/data", payloadHeader);
        setFact(await res.text());
      } catch (err) {
        console.log(err);
      }
    };

    fetchFact();
  }, [currentUser]);

  return (
    <div>
      <p>
        This is the home page.
      </p>
      <div className = {styles.tab_div}>
          <button className = {styles.button}>Home</button>
          <Link to="/Modules">
              <button className = {styles.button}>Modules</button>
          </Link>
          <Link to="/profile">   
              <button className = {styles.button}>Profile</button>
          </Link>
      </div>
    </div>
  );
};

export default Home;
