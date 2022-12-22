import "../styles/components/header.css";

const Header = (props) => {
  const { firstName = "", lastName = "", onLogoutClick } = props;

  return (
    <header className="container">
      <div className="nav-container">
        <nav className="nav">
          <h3>Home</h3>
          <h3 onClick={onLogoutClick}>Logout</h3>
        </nav>
        <p className="user-name">{`${firstName} ${lastName}`}</p>
      </div>
    </header>
  );
};

export default Header;
