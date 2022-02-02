import React from 'react';

function ExpensesSection() {
  return (
    <section id="expenses">
      <div class="container mt-5 w-75">
        <hr />
        <h1 class="display-4">Expenses</h1>
        <p class="text-muted mb-5">
          This is a close approximation for the total expenses.
        </p>
        <p class="text-muted text-right">
          [Total calculated for 1 individuals.]
        </p>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th>#</th>
              <th>CATEGORY</th>
              <th>x multiplier</th>
              <th>TOTAL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">1</td>
              <td>
                <strong>Hotel</strong>
                <p class="text-muted">L'amby Bay</p>
              </td>
              <td>₹1,000 x 2 nights</td>
              <td>₹2,000</td>
            </tr>
            <tr>
              <td scope="row">2</td>
              <td>
                <strong>Train Ticket</strong>
                <p class="text-muted">Kovai Express</p>
              </td>
              <td>₹700 x 2 way</td>
              <td>₹1,400</td>
            </tr>
            <tr>
              <td scope="row"></td>
              <td>
                <strong>TOTAL</strong>
              </td>
              <td></td>
              <td>
                <strong>₹3,400</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default ExpensesSection;
