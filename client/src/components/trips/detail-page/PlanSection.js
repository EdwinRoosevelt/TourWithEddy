import React from 'react';

function PlanSection() {
  return (
      <section id="tour-plan">
      <div class="container pt-2 w-75">
        <hr class="mt-5" />
        <h1 class="display-4">Tour Plan</h1>
        <p class="text-muted mb-5">Here is the complete agenda for the trip</p>

        {/* <!-- Day 00 Card --> */}
        <div class="card mt-2">
          <div class="card-header">
            <i class="fas fa-calendar-day"></i>
            <h5 class="d-inline-block">Day 00</h5>
          </div>
          <div class="card-body">
            <div class="d-flex flex-wrap row-hl">
              {/* <!-- Day item card --> */}
              <div class="card m-2" style="width: 17rem">
                <div class="card-body">
                  <h4 class="card-title">Travel</h4>
                  <a class="" href=""><i class="fas fa-link"></i></a>
                  <h6 class="d-inline-block card-subtitle text-muted">
                    Train: Kovai Express
                  </h6>
                  {/* <!-- From - To --> */}
                  <div class="d-flex align-items-center mt-2">
                    <div class="bg-light col-5">Vellore</div>
                    <i class="fas col-1 fa-angle-right"></i>
                    <div class="bg-light col-5">Kovai</div>
                  </div>
                  {/* <!-- Time --> */}
                  <div class="d-flex align-items-center mt-2">
                    <div class="bg-light col-5">8 PM</div>
                    <i class="fas col-1 fa-angle-right"></i>
                    <div class="bg-light col-5">6 AM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Day 01 Card --> */}
        <div class="card mt-2">
          <div class="card-header">
            <i class="fas fa-calendar-day"></i>
            <h5 class="d-inline-block">Day 01</h5>
          </div>
          <div class="card-body">
            <div class="d-flex flex-wrap row-hl">
              {/* <!-- Day item card --> */}
              <div class="card m-2" style="width: 17rem">
                <div class="card-body">
                  <h4 class="card-title">Check In</h4>
                  <a class="" href=""><i class="fas fa-link"></i></a>
                  <h6 class="d-inline-block card-subtitle text-muted">
                    L'amby Bay
                  </h6>
                  <p class="card-text bg-light e p-1">
                    An Amazing hotel on the shores of Kovai.
                  </p>
                  {/* <!-- <a class="btn btn-info" href="#">Know about L'amby Bay</a> --> */}
                </div>
              </div>
              <div class="card m-2" style="width: 17rem">
                <div class="card-body">
                  <h4 class="card-title">Travel</h4>
                  <a class="" href=""><i class="fas fa-link"></i></a>
                  <h6 class="d-inline-block card-subtitle text-muted">
                    Train: Kovai Express
                  </h6>
                  <p class="card-text">
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
