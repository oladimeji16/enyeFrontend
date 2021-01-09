import React, { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

import Profiles from "./components/profiles/Profiles";
import Pagination from "./components/Pagination/Pagination";

function App() {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [profilesPerPage] = useState(20);

  // useEffect to search for my data
  useEffect(() => {
    // fetch data
    const fetchProfiles = async () => {
      setLoading(true);
      const res = await axios.get("http://api.enye.tech/v1/challenge/records");
      setProfiles(res.data);
      setLoading(false);
    };

    fetchProfiles();
  }, []);

  console.log(profiles);

  const indexOfLastProfile = currentPage * profilesPerPage;
  const indexOfFirstProfile = indexOfLastProfile * profilesPerPage;
  const currentProfile = profiles.slice(
    indexOfFirstProfile,
    indexOfLastProfile
  );

  //changePage
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="App">
      <div className="app__main">
        <Profiles loading={loading} profiles={currentProfile} />
        <Pagination
          paginate={paginate}
          profilesPerPage={profilesPerPage}
          totalProfiles={profiles.length}
        />
      </div>
    </div>
  );
}

export default App;
