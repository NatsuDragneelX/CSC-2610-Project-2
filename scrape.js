const axios = require('axios');
const cheerio = require('cheerio');
const mongoose = require('mongoose');
const Parking = require('./models/parking');

mongoose.connect('mongodb://localhost:27017/parking', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB connection error:", err));

const scrapeData = async () => {
    try {
        const res = await axios.get('https://www.lsu.edu/parking/availability.php');
        const $ = cheerio.load(res.data);
        const parkingLots = [];

        $('table tbody tr').each((_, row) => {
            const lotName = $(row).find('td:nth-child(1)').text().trim();
            const availabilityText = $(row).find('td:nth-child(2)').text().trim();
            const availability = parseInt(availabilityText, 10);

            if (!isNaN(availability)) {
                ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].forEach(day => {
                    parkingLots.push({ lotName, availability, day });
                });
            } else {
                console.log(`Skipping invalid availability: "${availabilityText}" for "${lotName}"`);
            }
        });

        await Parking.deleteMany({});
        await Parking.insertMany(parkingLots);
        console.log("Parking data updated successfully");
    } catch (error) {
        console.error("Error scraping data:", error);
    } finally {
        mongoose.connection.close();
    }
};

scrapeData();
