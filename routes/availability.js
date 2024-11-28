const express = require('express');
const Parking = require('../models/parking');
const router = express.Router();

router.get('/', async (req, res) => {
    const { day, lotName, minAvailability } = req.query;
    const filter = {};

    // Add filter for day
    if (day) filter.day = day;

    // Add filter for lot name (case-insensitive)
    if (lotName) filter.lotName = { $regex: lotName, $options: 'i' };

    // Add filter for minimum availability
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
