import { Fragment } from "react";
import { useSelector, useDispatch } from 'react-redux';

import eddylogo from "../../img/eddy-designs.png";
import { logout } from "../../store/AuthSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <Fragment>
      <nav className="navbar navbar-expand-sm navbar-light">
        <div className="container">
          <a href="index.html" className="navbar-brand">
            <img src={eddylogo} className="img-fluid" width="100px" alt="" />
          </a>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href="#home" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#explore-head-section" className="nav-link">
                  Exploe
                </a>
              </li>
              <li className="nav-item">
                <a href="#create-head-section" className="nav-link">
                  Create
                </a>
              </li>
            </ul>
          </div>
          {/* Non Collapsible Nav elements */}
          <ul className="navbar-nav ml-auto">
            {isLoggedIn && (
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link"
                  onClick={() => dispatch(logout())}
                >
                  Logout
                </a>
              </li>
            )}
            {!isLoggedIn && (
              <li className="nav-item">
                <button
                  href="#"
                  data-toggle="modal"
                  data-target="#register-modal"
                  className="nav-link active btn btn-outline-primary text-white">
                  SignUp
                </button>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
