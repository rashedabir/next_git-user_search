import ReposCard from "./ReposCard";

function UserProfile({ user, repos }) {
  return (
    <div className="row my-1 p-3">
      <div className="col-lg-3 my-4">
        <img
          src={user.avatar_url}
          alt={user.name}
          width="100%"
          className="rounded-circle border"
        />
        <h2 className="my-0 mt-3">{user.name}</h2>
        <h5 className="text-muted my-0 mb-3">{user.login}</h5>
        <p className="my-0">{user.bio}</p>
        <a href={user.html_url} className="btn btn-success w-100 my-3">
          View Profile
        </a>
        <div className="d-flex">
          <p>
            <i className="far fa-user me-1"></i>
            <strong>{user.followers}</strong> followers
          </p>
          <p className="mx-2">•</p>
          <p>
            <strong>{user.following}</strong> following
          </p>
        </div>
        <p className="my-1">
          <i className="far fa-building me-2"></i>
          {user.company}
        </p>
        <p className="my-1">
          <i className="fas fa-map-marker-alt me-2"></i>
          {user.location}
        </p>
        <p className="my-1">
          <i className="fas fa-link me-2"></i>
          <a href={user.blog}>{user.blog}</a>
        </p>
        <p className="my-1">
          <i className="fab fa-twitter me-2"></i>
          <a href={`https://twitter.com/${user.twitter_username}`}>
            @{user.twitter_username}
          </a>
        </p>
      </div>
      <div className="col-lg-9 border rounded my-4">
        <h5 className="py-3 ps-3 border-bottom">
          <i className="fab fa-gitlab me-2"></i>Repositories
        </h5>
        <div className="row row-cols-1 row-cols-md-2 g-4 px-3 py-4">
          {repos &&
            repos.map((repos, index) => (
              <ReposCard key={index} repos={repos} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
