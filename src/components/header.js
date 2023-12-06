// import companyLogo from "./../assets/img/sample-logo.jpg";

const Header = () => {

  return (
  <nav className="navbar navbar-expand-sm app-theme flex header h-20">
    <div className="container">
      <div className="logo">
        <h3 className="my-0 text-white">Book Store</h3>
        {/* <img src={companyLogo} alt="logo" /> */}
      </div>
    </div>
  </nav>
  );
}
export default Header;
