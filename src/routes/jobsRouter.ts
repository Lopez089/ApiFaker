import express from 'express';
const dataJobs = require('../data/dataJobs.json');

const router = express.Router();

router.get('/', (req, res) => {
    res.send({ dataJobs });
});

export default router;
