import React from "react";
import "./index.css";

const UserProfile = () => {
  return (
    <div class="profile-page">
      <div id="profile-header">
        <h1>Username</h1>
      </div>

      <div id="profile-info">
        <h1>User Information</h1>
        <p>Total Points: </p>
        <p>Number of Modules Completed: </p>
      </div>
    </div>
  );
};

export default UserProfile;
