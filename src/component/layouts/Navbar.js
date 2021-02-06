import { Link, NavLink } from "react-router-dom";
import AddUser from "../users/AddUser";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg  bg-dark navbar_sec">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="btn btn-outline-light font-weight-bold"
                exact
                to="/"
              >
                Home
              </NavLink>
            </li>
          </ul>
        </div>
        <NavLink
          className="btn btn-outline-light font-weight-bold"
          to="/users/add"
        >
          Add User
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
