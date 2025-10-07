
function Navbar() {
  return (
    <nav>
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom px-4">
        <a className="navbar-brand fw-bold" href="/">GENTLEMAN JONES</a>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a href="/" onClick={(e) => e.preventDefault()} className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="/" onClick={(e) => e.preventDefault()} className="nav-link">New Collection</a>
          </li>
          <li className="nav-item">
            <a href="/" onClick={(e) => e.preventDefault()} className="nav-link">Menswear</a>
          </li>
          <li className="nav-item">
            <a href="/" onClick={(e) => e.preventDefault()} className="nav-link">Contact Us</a>
          </li>
        </ul>
      </nav>    </nav>
  );
}

export default Navbar;