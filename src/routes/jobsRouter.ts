import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('hola');
});

router.post('/', (req, res) => {});

export default router;
