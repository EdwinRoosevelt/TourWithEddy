import React from 'react';
import TripCard from './TripCard';

function TripsSection() {
  return (
    <section id="main-trips">
      <div className="container py-5">
        <h1 className="display-4 px-3 mb-5">Trips</h1>

        <div className="d-flex flex-wrap justify-content-center">
          {/* card 1 */}
          <TripCard />
          <TripCard />
          <TripCard />
        </div>
      </div>
    </section>
  );
}

export default TripsSection;
