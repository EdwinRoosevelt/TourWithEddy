import React from 'react';

function LandingSection({props}) {
  return (
    <div>
      <section id="tour-heading">
        <div className="overlay"></div>
      </section>

      {/* <!-- Heading --> */}
      <section
        id="heading"
        style={{
          backgroundImage: `url("https://tour-with-eddy.s3.ap-south-1.amazonaws.com/ooty.jpg")`,
          backgroundSize: "cover",
        }}
      >
        <div className="container py-5 w-75 mb-5">
          <h1 className="display-2">{props.title}</h1>
          <p className="text-secondary">{props.description}</p>
          <div className="row d-flex justify-content-between">
            {/* Left Section */}

            <div className="col-md-4 p-3 mb-4 mt-auto bg-white">
              <h1 className="display-4 mt-4 text-center">Details</h1>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <i className="fas fa-rupee-sign"></i>
                  <span> {props.budget}</span>
                </li>
                <li className="list-group-item">
                  <i className="fas fa-calendar-alt"></i>
                  <span> {props.dates}</span>
                </li>
                <li className="list-group-item">
                  <i className="fas fa-map-marker-alt"></i>

                  <span> {props.venue}</span>
                </li>
                <li className="list-group-item align-items-center">
                  <i className="fas fa-tools"></i>
                  <span> Author: </span>
                  <a href="#">
                    <span className="badge badge-success">{props.author}</span>
                  </a>
                </li>
              </ul>
            </div>
            {/* Right Section */}
            <div className="col-md-6 p-5 bg-white">
              <h1 className="display-4 mt-4">What's your status?</h1>
              <p>Yayiee!!! Im in!</p>
              <button
                className={`btn btn-outline-success btn-block ${
                  props.userTripStatus=="confirm" && "active"
                }`}
              >
                <i className="fas fa-thumbs-up"></i>
                <span> Confirm</span>
              </button>
              <small className="text-muted">
                (Paying atleast 50% of total in advance makes the life of the
                planner a lot easier)
              </small>
              <hr />
              <p>I need some time to confirm</p>
              <button className="btn btn-outline-warning btn-block">
                <i className="fas fa-hourglass-half"></i>
                <span> Not Sure Yet</span>
              </button>
              <hr />
              <p>I wanna come. But my parents ain't allowing me?</p>
              <button className="btn btn-outline-danger btn-block">
                <i className="fas fa-heart"></i>
                <span> Interested</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingSection;
