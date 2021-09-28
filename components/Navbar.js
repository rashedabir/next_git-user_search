import { useContext, useState } from "react";
import { ACTIONS } from "../store/Action";
import { DataContext } from "../store/GlobalState";

function Navbar() {
  const [search, setSearch] = useState("");

  const { state, dispatch } = useContext(DataContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const profile = await fetch(`https://api.github.com/users/${search}`);
    const profileJson = await profile.json();
    const repo = await fetch(profileJson.repos_url);
    const repoJson = await repo.json();

    dispatch({ type: ACTIONS.USER, payload: profileJson });
    dispatch({ type: ACTIONS.REPOS, payload: repoJson });
  };

  return (
    <nav className="navbar" style={{ backgroundColor: "#24292f" }}>
      <div className="container">
        <a className="navbar-brand">
          <img
            width="40px"
            src="https://icones.pro/wp-content/uploads/2021/06/icone-github-grise.png"
            alt="github"
          />
        </a>
        <form onSubmit={handleSubmit}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search User"
            aria-label="Search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
