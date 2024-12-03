const axios = require('axios');
const cheerio = require('cheerio');
const mongoose = require('mongoose');
const Parking = require('./models/parking');

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/parking', { serverSelectionTimeoutMS: 30000 })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error('MongoDB Connection Error:', err));

const scrapeData = async () => {
    try {
        const { data } = await axios.get('https://www.lsu.edu/parking/availability.php'); 
        const $ = cheerio.load(data);

        const parkingLots = [];

        $('table tbody tr').each((i, el) => {
            const lotName = $(el).find('td:nth-child(1)').text().trim();
            const availabilityText = $(el).find('td:nth-child(2)').text().trim();
            const availability = parseInt(availabilityText, 10);

            const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]; 
            if (!isNaN(availability)) {
                days.forEach(day => {
                    parkingLots.push({ lotName, availability, day });
                });
            }
        });

        await Parking.deleteMany({});
        console.log('Old parking data cleared.');

        await Parking.insertMany(parkingLots);
        console.log('New parking data inserted successfully.');
    } catch (err) {
        console.error('Error during scraping or database operation:', err);
    } finally {
        mongoose.connection.close(); 
    }
};

scrapeData();
