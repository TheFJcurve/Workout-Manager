const express = require("express");
const {
  createWorkout,
  getWorkouts,
  getWorkoutById,
} = require("../controllers/workoutController");

const router = express.Router();

// GET all workouts
router.get("/", getWorkouts);

// GET a single workout
router.get("/:id", getWorkoutById);

// POST a new workout
router.post("/", createWorkout);

// DELETE a workout
router.delete("/:id", (req, res) => {
  res.json({
    message: "Deleting workout id: " + req.params.id,
  });
});

// UPDATE a workout
router.patch("/:id", (req, res) => {
  res.json({
    message: "Updating workout id: " + req.params.id,
  });
});

module.exports = router;
