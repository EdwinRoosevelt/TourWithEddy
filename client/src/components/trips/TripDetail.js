import { React, Fragment } from 'react';
import LandingSection from './detail-page/LandingSection';
import PlanSection from './detail-page/PlanSection';
import ExpenseSection from "./detail-page/ExpensesSection";
import OnboardingSection from "./detail-page/OnboardersSection";

const DUMMY_CONTENT = {
  details: {
    title: "Paris - 2022",
    description:
      "Join us to celebrate a magical New Year with us in Paris, France",
    budget: "2,100",
    dates: "11 -13 Feb 2022",
    venue: "Paris, France",
    author: "Edwin Roosevelt",
  },
  plan: {},
  expenses: {
    list: [{
      no: "1",
      title: "Hotel",
      description: "L'amby Bay",
      price: "1,000 x 2 nights",
      total: "2,000",
    },
    {
      no: "2",
      title: "Train Ticket",
      description: "Kovai Ecpress",
      price: "700 x 2 way",
      total: "1,400",
    }],
    total: "3,500"
  },
  onboarders: [
    {
      name: "Edwin Roosevelt",
      status: "confirm",
      color: "success",
    },
    {
      name: "Radha Krishnan",
      status: "pending",
      color: "warning",
    },
    {
      name: "Haresh Ulagam",
      status: "interested",
      color: "danger",
    },
  ]};

function TripDetail() {
  return (
    <Fragment>
      <LandingSection props={DUMMY_CONTENT.details} />
      <PlanSection />
      <ExpenseSection props={DUMMY_CONTENT.expenses} />
      <OnboardingSection props={DUMMY_CONTENT.onboarders} />
    </Fragment>
  );
}

export default TripDetail;
