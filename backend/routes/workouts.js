const express = require('express')

const router = express.Router();

// GET all workouts
router.get('/', (req, res) => {
    res.json({
        message: "Get all workouts"
    })
})

// GET a single workout
router.get('/:id', (req, res) => {
    res.json({
        message: "Get workout with id: " + req.params.id
    })
})

// POST a new workout
router.post('/', (req, res) => {
    res.json({
        message: "Create a new workout"
    })
})

// DELETE a workout
router.delete('/:id', (req, res) => {
    res.json({
        message: "Deleting workout id: " + req.params.id
    })
})

// UPDATE a workout
router.patch('/:id', (req, res) => {
    res.json({
        message: "Updating workout id: " + req.params.id
    })
})

module.exports = router;