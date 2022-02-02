const express = require("express");

const jwtAuth = require("../middleware/jwtAuth");
const CustomError = require("../models/custom-error");
const Trip = require("../models/TripSchema");
const User = require("../models/UserSchema");

const router = express.Router();


// route:       GET /api/trips/
// Description: List all the trips
router.get("/", async (req, res, next) => {
  try {
    const trips = await Trip.find();
    if (trips.length != 0) res.json({ trips });
    else throw new CustomError("No trips found!", 404);
  } catch (err) {
    return next(err);
  }
});


// route:       POST /api/trips/
// Description: Add a new trip to the database
router.post("/", jwtAuth, async (req, res, next) => {
  const { tripId, status, startDate, endDate, title, tripPlan, budget } =
    req.body;
  const user = await User.findById(req.id);

  try {
    const trip = new Trip({
      tripId,
      status,
      startDate,
      endDate,
      title,
      tripPlan,
      budget,
      author: user.name,
    });
    await trip.save();
    res
      .status(201)
      .json({ message: "Trip added successfully", trip: trip.title });
  } catch (err) {
    return next(new CustomError(err.message));
  }
});


// route:       GET /api/trips/:tripId
// Description: List a particular trip
router.get("/:tripId", (req, res) => {
  const tripId = req.params.tripId;
  const trip = DUMMY_TRIPS.find((trip) => trip.id == tripId);

  // throwing an error is okay for synchronous code
  // for asynchronous code: return next(error);
  if (!trip) throw new CustomError("Trip not found", 404);

  res.json({ trip, tripId });
});

module.exports = router;
