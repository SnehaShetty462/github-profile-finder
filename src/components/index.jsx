import { useState, useEffect } from "react";
import User from './user.jsx';
import "./style.css"; 
export default function GithubProfileFinder() {
  const [userName, setUserName] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchGithubUserData() {
    setLoading(true);  // Start loading
    try {
      const res = await fetch(`https://api.github.com/users/${userName}`);
      const data = await res.json();
      console.log(data);
      setUserData(data);
    } catch (error) {
      console.error("Failed to fetch user data:", error);
      setUserData(null);
    }
    setLoading(false); 
  }

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  function handleSubmit() {
    fetchGithubUserData();
  }

  if (loading) {
    return <h1>Loading data please wait...</h1>;
  }

  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          name="search-by-username"
          type="text"
          placeholder="Search Github Username..."
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>

      {userData ? <User user={userData} /> : null}
    </div>
  );
}
