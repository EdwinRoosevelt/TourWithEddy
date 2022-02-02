import React from 'react';
import ReactDOM from 'react-dom';

function Register() {
  return ReactDOM.createPortal(
    <div
      className="modal fade"
      id="register-modal"
      data-backdrop="static"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title display-4">SIGN UP</h5>
            <button type="button" className="close" data-dismiss="modal">
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              {/* <!-- First and Last name --> */}
              <div className="form-row mb-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                  />
                </div>
              </div>

              {/* <!-- Email --> */}
              <div className="input-group mb-3">
                <input type="email" className="form-control" placeholder="Email" />
                <div className="valid-feedback">Looks good!</div>
                <div className="invalid-feedback">Enter a valid email</div>
              </div>

              {/* <!-- Phone no --> */}
              <div className="input-group mb-3">
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Phone number"
                />
                <div className="valid-feedback">Looks good!</div>
                <div className="invalid-feedback">Enter a valid email</div>
              </div>

              {/* <!-- Password --> */}
              <div className="input-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password (min 6 characters)"
                />
                <div className="valid-feedback">Looks good!</div>
                <div className="invalid-feedback">
                  Enter a password with min 6 characters
                </div>
              </div>
            </form>
            <p className="text-muted mt-2">
              Already have an account?
              <a
                href="#"
                data-toggle="modal"
                data-target="#login-modal"
                data-dismiss="modal"
              >
                {" "}
                Login
              </a>
            </p>
          </div>
          <div className="p-3">
            <button type="button" className="btn btn-success btn-block shadow">
              Sign Up
            </button>
          </div>

          {/* <!-- Google SSO --> */}
          <div className="d-flex ">
            <hr className="col-4" />
            <p className="text-muted">( or )</p>
            <hr className="col-4" />
          </div>
          <div className="p-3">
            <button className="btn btn-outline-primary btn-block shadow">
              <i className="fab fa-google"></i> Sign up with Google{" "}
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("auth-modal")
  );
}

export default Register;
