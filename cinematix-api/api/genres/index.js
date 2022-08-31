import express from 'express';
import Genre from "./genreModel";

const router = express.Router();
router.get('/', async (req, res) => {
    const genres = await Genre.find();
    res.json(genres);
});

export default router;