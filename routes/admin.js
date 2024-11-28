const express = require('express');
const Parking = require('../models/parking');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('admin');
});

router.post('/add', async (req, res) => {
    const { lotName, availability, day } = req.body;
    const parkingLot = new Parking({ lotName, availability, day });
    await parkingLot.save();
    res.redirect('/admin');
});

router.post('/delete', async (req, res) => {
    const { lotName } = req.body;
    await Parking.deleteOne({ lotName });
    res.redirect('/admin');
});

module.exports = router;
