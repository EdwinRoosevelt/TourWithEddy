import React from 'react';

function PlanSection() {
  return (
    // <section id="tour-plan">
    //   <div className="container pt-2 w-75">
    //     <hr className="mt-5" />
    //     <h1 className="display-4">Tour Plan</h1>
    //     <p className="text-muted mb-5">
    //       Here is the complete agenda for the trip
    //     </p>

    //     {/* Day 00 card */}
    //     <div className="card mt-2">
    //       <div className="card-header">
    //         <i className="fas fa-calendar-day"></i>
    //         <h5 className="d-inline-block">Day 00</h5>
    //       </div>
    //       <div className="car-body">
    //         <div className="d-flex flex-wrap row-hl">
    //           {/* <!-- Day item card --> */}
    //           <div className="card m-2" style={{width: "17rem"}}></div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <section id="tour-plan">
      <div className="container pt-2 w-75 p-5 bg-white">
        <h1 className="display-4">Tour Plan</h1>
        <p className="text-muted mb-5">
          Here is the complete agenda for the trip
        </p>

        {/* <!-- Day 00 Card --> */}
        <div className="card mt-2">
          <div className="card-header">
            <h5>Day 00</h5>
          </div>
          <div className="card-body">
            <div className="d-flex flex-wrap row-hl">
              {/* <!-- Day item card --> */}
              <div className="card m-2" style={{ width: "17rem" }}>
                <div className="card-body">
                  <h4 className="card-title">Travel</h4>
                  <a className="" href="">
                    <i className="fas fa-link"></i>
                  </a>
                  <h6 className="d-inline-block card-subtitle text-muted">
                    Train: Kovai Express
                  </h6>
                  {/* <!-- From - To --> */}
                  <div className="d-flex align-items-center mt-2">
                    <div className="bg-light col-5">Vellore</div>
                    <i className="fas col-1 fa-angle-right"></i>
                    <div className="bg-light col-5">Kovai</div>
                  </div>
                  {/* <!-- Time --> */}
                  <div className="d-flex align-items-center mt-2">
                    <div className="bg-light col-5">8 PM</div>
                    <i className="fas col-1 fa-angle-right"></i>
                    <div className="bg-light col-5">6 AM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Day 01 Card --> */}
        <div className="card mt-2">
          <div className="card-header">
            <h5> Day 01</h5>
          </div>
          <div className="card-body">
            <div className="d-flex flex-wrap row-hl">
              {/* <!-- Day item card --> */}
              <div className="card m-2" style={{ width: "17rem" }}>
                <div className="card-body">
                  <h4 className="card-title">Check In</h4>
                  <a className="" href="">
                    <i className="fas fa-link"></i>
                  </a>
                  <h6 className="d-inline-block card-subtitle text-muted">
                    L'amby Bay
                  </h6>
                  <p className="card-text bg-light e p-1">
                    An Amazing hotel on the shores of Kovai.
                  </p>
                  {/* <!-- <a className="btn btn-info" href="#">Know about L'amby Bay</a> --> */}
                </div>
              </div>
              <div className="card m-2" style={{ width: "17rem" }}>
                <div className="card-body">
                  <h4 className="card-title">Travel</h4>
                  <a className="" href="">
                    <i className="fas fa-link"></i>
                  </a>
                  <h6 className="d-inline-block card-subtitle text-muted">
                    Train: Kovai Express
                  </h6>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Illo, quas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlanSection;
