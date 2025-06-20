const Navbar = ({ onOpenModal }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm px-4 py-2 rounded-pill mx-auto my-3 ml-5" style={{ maxWidth: '930px' }}>
      <div className="container-fluid d-flex align-items-center justify-content-between">
        {/* Logo */}
        <a className="navbar-brand" href="#">
          <img
            src="https://cdn-icons-png.flaticon.com/512/10467/10467614.png"
            alt="logo"
            style={{ width: '40px', height: '40px' }}
          />
        </a>

        {/* Nav Links */}
        <ul className="navbar-nav flex-row gap-4 mx-auto">
          <li className="nav-item"><a className="nav-link text-dark fw-medium" href="#">Home</a></li>
          <li className="nav-item"><a className="nav-link text-dark fw-medium" href="#">Find Jobs</a></li>
          <li className="nav-item"><a className="nav-link text-dark fw-medium" href="#">Find Talents</a></li>
          <li className="nav-item"><a className="nav-link text-dark fw-medium" href="#">About us</a></li>
          <li className="nav-item"><a className="nav-link text-dark fw-medium" href="#">Testimonials</a></li>
        </ul>

        {/* Create Job Button */}
        <button
          className="btn btn-primary rounded-pill px-4 py-2"
          style={{ backgroundColor: '#8B3DFF', border: 'none' }}
          onClick={onOpenModal}
        >
          Create Jobs
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
