import React from 'react';

function OnboardersSection() {
  return (
      <section id="onboarders">
      <div class="container my-5 w-75">
        <hr />
        <h1 class="display-4">Onboarders</h1>
        <p class="text-muted mb-5">
          This is a close approximation for the total expenses.
        </p>

        <ul class="list-group list-group-flush">
          <!-- Members -->
          <li
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            <a href="#" class="text-dark">Captain America</a>
            <span class="badge badge-success">Confirm</span>
          </li>
          <li
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            <a href="#" class="text-dark">Spiderman</a>
            <span class="badge badge-success">Confirm</span>
          </li>
          <li
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            <a href="#" class="text-dark">DeadPool</a>
            <span class="badge badge-danger">pending</span>
          </li>
        </ul>
        <ul class="list-group list-group-flush">
          <a
            href="#"
            class="list-group-item text-dark d-flex justify-content-between align-items-center"
          >
            Selvamani
            <span class="badge badge-warning">Interested</span>
          </a>
        </ul>
      </div>
    </section>
  );
}

export default OnboardersSection;
