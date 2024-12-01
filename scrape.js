const axios = require('axios');
const cheerio = require('cheerio');
const mongoose = require('mongoose');
const Parking = require('./models/parking');

mongoose.connect('mongodb://localhost:27017/parking', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("MongoDB Connected");
}).catch(err => {
    console.log("Connection Error", err);
});

const scrapeData = async () => {
    try {
        const { data } = await axios.get('https://www.lsu.edu/parking/availability.php');
        const $ = cheerio.load(data);

        const parkingLots = [];

        $('table tbody tr').each((i, el) => {
            const lotName = $(el).find('td:nth-child(1)').text().trim();
            const availabilityText = $(el).find('td:nth-child(2)').text().trim();
            const availability = parseInt(availabilityText, 10);

            const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]; // Add all days

            if (!isNaN(availability)) {
                // Create an entry for each day
                days.forEach(day => {
                    parkingLots.push({ lotName, availability, day });
                });
            } else {
                console.log(`Skipping invalid availability value: ${availabilityText} for ${lotName}`);
            }
        });

        // Clear and insert new data
        await Parking.deleteMany({});
        await Parking.insertMany(parkingLots);

        console.log("Scraped and Saved Data");
    } catch (err) {
        console.error("Error during scraping:", err);
    } finally {
        mongoose.connection.close();
    }
};

scrapeData();
