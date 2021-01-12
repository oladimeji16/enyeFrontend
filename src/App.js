import React, { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

import Profiles from "./components/profiles/Profiles";
import Pagination from "./components/Pagination/Pagination";

function App() {
  const [userProfiles, setUserProfiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [profilesPerPage] = useState(20);
  const [query, setQuery] = useState("");

  // useEffect to search for my data
  useEffect(() => {
    // fetch data
    const fetchProfiles = async () => {
      setLoading(true);
      const res = await axios.get("http://api.enye.tech/v1/challenge/records");
      setUserProfiles(res.data.records.profiles);
      setLoading(false);
    };

    fetchProfiles();
  }, []);

  console.log(userProfiles);

  // Search profiles using Lastname
  function search(profiles) {
    return profiles.filter(
      (profile) =>
        profile.Gender.toLowerCase().indexOf(query) > -1 ||
        profile.PaymentMethod.toLowerCase().indexOf(query) > -1 ||
        profile.CreditCardType.toLowerCase().indexOf(query) > -1
    );
  }

  const indexOfFirstProfile = (currentPage -1) * profilesPerPage;
  const currentProfile = userProfiles.slice(
    indexOfFirstProfile,
    indexOfFirstProfile + profilesPerPage
  );

  //changePage
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="App">
      <h1>Enye Frontend Challenge</h1>
      <div className="app__search">
        <input className='app__searchbox'

          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder='Search...'
        />
      </div>
      <div>
        <Profiles loading={loading} profiles={search(currentProfile)} />
        <Pagination
          paginate={paginate}
          profilesPerPage={profilesPerPage}
          totalProfiles={userProfiles.length}
        />
      </div>
    </div>
  );
}

export default App;
