import React from 'react';
import logo from '../../img/TWE.png';

function Landing() {
  return (
    <section id="landing">
      <div className="landing-content row d-flex justify-content-end">
        <div className="col-md-5">
          <h1 />
          <img
            src={logo}
            class="img-fluid d-flex m-auto"
            width="400px"
            alt=""
          />
          <span class="d-flex d-flex justify-content-center">
            <p className="font-weight-bold pl-2">Join me</p>
            <p className="pl-1">to travel and explore the unexplored xD</p>
          </span>
        </div>
      </div>
    </section>
  );
}

export default Landing;
