function ProfileCard({ profile }) {
  return (
    <div className="col">
      <div className="card mb-3" style={{ maxWidth: "100%" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={profile.avatar_url}
              className="img-fluid rounded-start"
              alt={profile.login}
              width="100%"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title text-capitalize">{profile.login}</h5>
              <p className="card-text mb-2">
                Type: <strong>{profile.type}</strong>
              </p>
              <p className="card-text mb-2">
                Contributions: <strong>{profile.contributions}</strong>
              </p>
              <a
                href={profile.html_url}
                className="btn btn-light my-3 border text-capitalize"
              >
                see profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
