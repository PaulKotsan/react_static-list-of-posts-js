import './UserInfo.scss';

export const UserInfo = ({ user }) => (
  <a className="UserInfo" href={`mailto:${user?.email}`}>
    {/* User is properly passed, checked via console.log(user) */}
    {user?.name}
  </a>
);
