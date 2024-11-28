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

const seedData = [
    { lotName: 'Lot A', availability: 80, day: 'Monday' },
    { lotName: 'Lot B', availability: 60, day: 'Tuesday' },
    { lotName: 'Lot C', availability: 90, day: 'Wednesday' },
];

const seedDB = async () => {
    await Parking.deleteMany({});
    await Parking.insertMany(seedData);
    console.log("Database Seeded");
    mongoose.connection.close();
};

seedDB();
