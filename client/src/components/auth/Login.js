import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';

import { asyncLogin } from '../../store/AuthSlice';

function Login() {
  const [form, setForm] = useState({email: null, password: null});
  const dispatch = useDispatch();
  const loginAlerts = useSelector(state => state.auth.loginAlerts);

  const onChangeHandler = x => {
    setForm({...form, [x.target.name]: x.target.value});
  }

  const onSubmitHandler = x => {
    x.preventDefault();

    dispatch(asyncLogin(form));

  }

  return (
    <div
      className="modal fade"
      id="login-modal"
      tabindex="-1"
      data-backdrop="static"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title display-4">LOGIN</h5>
            <button type="button" className="close" data-dismiss="modal">
              <span>&times;</span>
            </button>
          </div>
          <form className="form" onSubmit={onSubmitHandler}>
            <div className="modal-body">
              {/* <!-- Modal content --> */}

              {/* <!-- Email --> */}
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <i className="fas fa-user"></i>
                  </div>
                </div>
                <input
                  type="email"
                  className={`form-control ${
                    loginAlerts.isEmailValid ? "" : "is-invalid"
                  }`}
                  placeholder="Enter Email"
                  required
                  name="email"
                  value={form.email}
                  onChange={onChangeHandler}
                />
                <div className="invalid-feedback">Email doesn't exist</div>
              </div>
              {/* <!-- Password --> */}
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <i className="fas fa-key"></i>
                  </div>
                </div>
                <input
                  type="password"
                  className={`form-control ${
                    loginAlerts.isPasswordValid ? "" : "is-invalid"
                  }`}
                  placeholder="***********"
                  required
                  name="password"
                  value={form.password}
                  onChange={onChangeHandler}
                />
                <div className="invalid-feedback">Password Invalid</div>
              </div>

              <p className="text-muted mt-2">
                Don't have an account?
                <a
                  href="#"
                  data-toggle="modal"
                  data-target="#register-modal"
                  data-dismiss="modal"
                >
                  {" "}
                  Register
                </a>
              </p>
              {/* <div class="spinner-grow " role="status">
                <span class="sr-only">Loading...</span>
              </div>
              <div class="spinner-grow" role="status">
                <span class="sr-only">Loading...</span>
              </div> */}
            </div>
            <div className="p-3">
              {!loginAlerts.isLoading && (
                <button
                  type="submit"
                  className="btn btn-success btn-block shadow"
                >
                  Login
                </button>
              )}
              {loginAlerts.isLoading && (
                <div className="btn btn-success btn-block shadow">
                  <div className="spinner-grow" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              )}
            </div>
          </form>

          {/* <!-- Google SSO --> */}
          <div className="d-flex ">
            <hr className="col-4" />
            <p className="text-muted">( or )</p>
            <hr className="col-4" />
          </div>
          <div className="p-3">
            <button className="btn btn-outline-primary btn-block shadow">
              <i className="fab fa-google"></i> Login with Google{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
