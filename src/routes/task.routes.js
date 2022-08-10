const express = require('express');
const router = express.Router();

const Task = require('../models/task');

router.get('/', async (req, res) => {
    const tasks = await Task.find();
    console.log(tasks)
    res.json('received');
});

module.exports = router;