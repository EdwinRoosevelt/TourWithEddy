import { React, Fragment } from 'react';
import LandingSection from './detail-page/LandingSection';
import PlanSection from './detail-page/PlanSection';
import ExpenseSection from "./detail-page/ExpenseSection";
import OnboardingSection from "./detail-page/OnboardingSection";

function TripDetail() {
  return (
    <Fragment>
      <LandingSection />
      <PlanSection />
      <ExpenseSection />
      <OnboardingSection />
    </Fragment>
  );
}

export default TripDetail;
