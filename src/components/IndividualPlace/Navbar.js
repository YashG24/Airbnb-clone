const Navbar = () => {
  return (
    <div className="nav">
      <div className="logo">
        <a href="/homepage">Logo</a>
      </div>
      <div className="heading">
        <a href="/rural">Rural</a>
        <a href="/urban">Urban</a>
        <a href="/alllocations">All Locations</a>
      </div>
      <div>
        <button className="topBtn">SIGN IN</button>
      </div>
    </div>
  );
};

export default Navbar;
