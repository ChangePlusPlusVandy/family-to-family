import React, { useState, useEffect, createContext } from "react";
import { Link } from "react-router-dom";
import classNames from 'classnames/bind';
import { useAuth } from "../../lib/AuthContext";
import styles from "./index.module.css";
import { NavBar } from "../NavBar";
const cx = classNames.bind(styles);

export const Home = () => {
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

  const lastName = "Adams";
  const goal = 100;
  const points = 71;

  return (
    <div>
      <div className = {cx(styles.text_div, "first")}>
        <text className = {cx(styles.welcome)}>Welcome&nbsp;</text>
        <text className = {cx(styles.welcome, "family")}>{" " + lastName} Family!</text>
      </div>
      <div className = {cx(styles.text_div, "second")}>
        <text className = {cx(styles.cruising)}>You're&nbsp;</text>
        <text className = {cx(styles.cruising, "color")}>Cruising it!</text>
      </div>
      <div className = {cx(styles.text_div)}>
        <text className = {cx(styles.points)}>{goal-points}</text>
        <text className = {cx(styles.points, "text")}>&nbsp;points away from your weekly goal</text>
      </div>
      <NavBar />
    </div>
  );
};

export default Home;
