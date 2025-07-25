const Navbar = ({ onOpenModal }) => {
const btnStyle = {
  width: '123px',
  height: '38px',
  opacity: 1,
  borderRadius: '30px',
  gap: '10px',              
  padding: '8px 24px',
  transform: 'rotate(0deg)',
  background: 'linear-gradient(180deg, #A128FF 0%, #6100AD 113.79%)'
};
 const logoStyle = {
    width: '44px',
    height: '44.68px',
    borderRadius: '50%',       // makes it circular
    boxShadow: '0px 2px 6px rgba(0,0,0,0.15)',
    objectFit: 'cover',        // ensures aspect ratio
    position: 'relative',
    top: '1.66px'
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm px-4 py-2 rounded-pill mx-auto my-3 ml-5" style={{ maxWidth: '930px',backgroundColor:'border: 1px solid rgba(252, 252, 252, 1)'}} >
      <div className="container-fluid d-flex align-items-center justify-content-between">
        {/* Logo */}
        <a className="navbar-brand" href="#">
          <img
            src="logo.png"
            alt="logo"
            style={logoStyle}
          />
        </a>

        {/* Nav Links */}
        <ul className="navbar-nav flex-row gap-4 mx-auto"
        style={{
          fontFamily:'satoshi variable, sans-serif',
          fontWeight:600,
          fontStyle:'bold',
          fontSize:'16px',
        }}>
          <li className="nav-item"><a className="nav-link text-dark fw-medium" href="#">Home</a></li>
          <li className="nav-item"><a className="nav-link text-dark fw-medium" href="#">Find Jobs</a></li>
          <li className="nav-item"><a className="nav-link text-dark fw-medium" href="#">Find Talents</a></li>
          <li className="nav-item"><a className="nav-link text-dark fw-medium" href="#">About us</a></li>
          <li className="nav-item"><a className="nav-link text-dark fw-medium" href="#">Testimonials</a></li>
        </ul>

        {/* Create Job Button */}
        <button
          className="btn btn-primary rounded-pill px-4 py-2"
          style={btnStyle}
          onClick={onOpenModal}
        >
          Create Jobs
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
