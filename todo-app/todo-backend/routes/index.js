const express = require("express");
const { get, set } = require("../redis");
const router = express.Router();

const configs = require("../util/config");

let visits = 0;

/* GET index data. */
router.get("/", async (req, res) => {
  visits++;

  res.send({
    ...configs,
    visits,
  });
});

/* GET number of added todos. */
router.get("/statistics", async (_, res) => {
  try {
    let count = await get("count");
    count = parseInt(count) || 0;
    res.send({
      added_todos: count,
    });
  } catch (error) {
    res.status(500).send({ error: "Failed to retrieve statistics" });
  }
});

module.exports = router;
