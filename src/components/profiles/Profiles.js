import React from "react";

import "./Profiles.css";

const Profiles = ({ profiles, loading }) => {
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      {Object.entries(profiles).map((profile) => (
        <ul>
          <li key={profile.size}>{profile.size}</li>
        </ul>
      ))}
    </div>
  );
};

export default Profiles;
