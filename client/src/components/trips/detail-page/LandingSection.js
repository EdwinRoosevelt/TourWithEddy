import React from 'react';

function LandingSection() {
  return (
      <div>
          <section id="tour-heading">
      <div class="overlay"></div>
    </section>

    <!-- Heading -->
    <section id="heading">
      <div class="container pt-5 w-75">
        <div class="row">
          <div class="col-md-6 mb-5">
            <h1 class="display-2 mb-5">Paris #2202</h1>

            <ul class="list-group mx-2">
              <li class="list-group-item">
                <i class="fas fa-rupee-sign"></i>
                2,100
              </li>
              <li class="list-group-item">
                <i class="fas fa-calendar-alt"></i>
                11 - 13 Feb 2022
              </li>
              <li class="list-group-item">
                <i class="fas fa-map-marker-alt"></i>
                Paris, France
              </li>
              <li class="list-group-item align-items-center">
                <i class="fas fa-tools"></i>
                <a href="#"
                  ><span class="badge badge-success">Edwin Roosevelt</span></a
                >
              </li>
            </ul>
          </div>
          <div class="col-md-6 p-2">
            <h1 class="display-4 mb-5">My status!</h1>
            <p>Yayiee!!! Im in!</p>
            <button class="btn btn-outline-success btn-block">
              <i class="fas fa-thumbs-up"></i>
              Confirm
            </button>
            <small class="text-muted"
              >(Paying atleast 50% of total in advance makes the life of the
              planner a lot easier)</small
            >
            <hr class="p-3" />
            <p>I need some time to confirm</p>
            <button class="btn btn-outline-warning btn-block">
              <i class="fas fa-hourglass-half"></i>
              Not Sure Yet
            </button>
            <hr class="p-3" />
            <p>I wanna come. But my parents ain't allowing me?</p>
            <button class="btn btn-outline-danger btn-block">
              <i class="fas fa-heart"></i>
              Interested
            </button>
          </div>
        </div>
      </div>
    </section>
      </div>
  );
}

export default LandingSection;
