const express = require("express");
const router = express.Router();

const {
  createTrip,
  getMyTrips,
  deleteTrip,
  updateTrip
} = require("../controllers/tripController");

const authMiddleware = require("../middleware/authMiddleware");


// Save trip (Protected route)
router.post(
  "/",
  authMiddleware,
  createTrip
);


// Get logged-in user's trips
router.get(
  "/mytrips",
  authMiddleware,
  getMyTrips
);


// Delete trip (Protected route)
router.delete(
  "/:id",
  authMiddleware,
  deleteTrip
);


// Update trip (Protected route)
router.put(
  "/:id",
  authMiddleware,
  updateTrip
);


module.exports = router;