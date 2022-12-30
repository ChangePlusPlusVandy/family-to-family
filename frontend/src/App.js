import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import Loader from "./pages/LoadScreen/Loader";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      {" "}
      {loading ? (
        <Loader />
      ) : (
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      )}
    </div>
  );
};

export default App;
