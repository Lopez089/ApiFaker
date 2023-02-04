import express from "express";

const router = express.Router();

router.get('/', (_req, res) => {
    res.json({
        "Empoints": {
            "/": "empoints de la app",
            "/api/jobs": "api de trabajos"
        }
    })
})

export default router