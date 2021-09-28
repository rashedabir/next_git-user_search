function ReposCard({ repos }) {
  return (
    <div className="col">
      <div className="card border mb-2">
        <div className="card-header bg-transparent border-bottom d-flex justify-content-between">
          <a className="my-0" href={repos.git_url}>
            <i className="fab fa-gitlab me-2"></i>
            {repos.name}
          </a>
          <p className="border rounded-pill px-2 my-0">Public</p>
        </div>
        <div className="card-body text-dark">
          <p className="card-text">{repos.description}</p>
        </div>
        <div className="card-footer bg-transparent border-top d-flex justify-content-between">
          <p className="my-0">
            <strong>{repos.language}</strong>
          </p>
          <p className="my-0">
            Created at:{" "}
            <strong>{new Date().toDateString(repos.created_at)}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ReposCard;
