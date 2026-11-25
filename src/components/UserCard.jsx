
function UserCard({ user }) {
  return (
    <div className="user-card">

      <div className="user-avatar">
        {user.name.charAt(0).toUpperCase()}
      </div>

      <div className="user-info">

        <h3>{user.name}</h3>

        <div className="user-detail">
          <span className="detail-icon">✉</span>
          <a href={`mailto:${user.email}`}>
            {user.email}
          </a>
        </div>

        <div className="user-detail">
          <span className="detail-icon">☎</span>
          <span>{user.phone}</span>
        </div>

        <div className="user-detail">
          <span className="detail-icon">📍</span>
          <span>{user.address.city}</span>
        </div>

        <div className="company-info">
          <span>COMPANY</span>
          <p>{user.company.name}</p>
        </div>

      </div>

    </div>
  );
}

export default UserCard;
