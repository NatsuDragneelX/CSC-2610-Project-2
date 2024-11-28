const express = require('express');
const Parking = require('../models/parking');
const router = express.Router();

router.get('/', async (req, res) => {
    const { lotName, minAvailability } = req.query;
    const filter = {};

    if (lotName) filter.lotName = { $regex: lotName, $options: 'i' }; // Case-insensitive
    if (minAvailability) filter.availability = { $gte: parseInt(minAvailability, 10) };

    const parkingLots = await Parking.find(filter);
    res.render('availability', { parkingLots });
});


router.get('/api/parking', async (req, res) => {
    const { day, minAvailability } = req.query;
    const filter = {};
    if (day) filter.day = day;
    if (minAvailability) filter.availability = { $gte: minAvailability };

    const parkingLots = await Parking.find(filter);
    res.json(parkingLots);
});

module.exports = router;
