export default function User({ user }) {
  const { avatar_url, followers, following, created_at, public_repos, name, login } = user;
  const createdDate = new Date(created_at);

  return (
    <div className="user">
      <div>
        <img
          src={avatar_url}
          className="avatar"
          
        />
      </div>
      <div>
        <a
          href={`https://github.com/${login}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {name || login}
        </a>
        <p>
          User joined on{" "}
          {`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", {
            month: "short",
          })} ${createdDate.getFullYear()}`}
        </p>
      </div>
      <div>
        <p>Public Repos</p>
        <p>{public_repos}</p>
      </div>
      <div>
        <p>Followers</p>
        <p>{followers}</p>
      </div>
      <div>
        <p>Following</p>
        <p>{following}</p>
      </div>
    </div>
  );
}
