import React from "react";

function TripCard() {
  return (
    <div id="trip-card" className="card mb-4">
      <a href="#" className="stretched-link"></a>
      <div className="row no-gutters">
        <div className="col-4">
          {/* Tour image link */}
          <img
            src="https://tour-with-eddy.s3.ap-south-1.amazonaws.com/ooty.jpg"
            className="img-fluid"
            alt="..."
          />
        </div>
        <div className="col-8">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              {/* Tour title */}
              <h5 className="card-title">NEW YEAR - GOA</h5>

              {/* Tour Status */}
              <span class="bg-danger text-white p-2">Upcoming!</span>
              {/* <span class="bg-dark text-white p-2">Completed</span>
              <span className="bg-info text-white p-2">In proposal</span> */}
            </div>
            {/* Tour details */}
            <p className="card-text">30 Dec - 02 Jan 2023</p>
            <p className="card-text">Budget: 2,000</p>
            <p className="card-text">Confirm before: 30 Nov</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TripCard;
