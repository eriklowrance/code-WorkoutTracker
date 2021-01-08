const router = require("express").Router();
const { Workout } = require("../models");
const db = require("../models");

router.get("/api/workouts", async function (req, res) {
Workout.find().then(function (results) {
    res.json(results)
})
});

router.post("/api/workouts", async function (req, res) {
  try {
    res.json(await db.Workout.create({}));
  } catch (err) {
    res.status(500).end();
  }
});

router.put("/api/workouts/:id", async function (req, res) {
  try {
    res.json(
      await db.Workout.findByIdAndUpdate(
        req.params.id,
        { $push: { exercises: req.body } },
        { new: true, runValidators: true }
      )
    );
  } catch (err) {
    res.status(500).end();
  }
});

router.get("/api/workouts/range", async function (req, res) {
  try {
    res.json((
      await Workout.aggregate([
        {
          $addFields: {
            totalDuration: {
              $sum: "$exercises.duration",
            },
          },
        },
      ])
        .sort({ day: -1 })
        .limit(7)
    ). reverse());
  } catch (err) {
    res.status(500).end();
  }
});

module.exports = router;
