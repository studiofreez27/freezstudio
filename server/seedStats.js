const mongoose = require('mongoose');
const Stat = require('./models/Stat');
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/eternal-knot';

const stats = [
    {
        label: "Projects Completed",
        value: "500+",
        icon: "Camera",
        order: 1
    },
    {
        label: "Satisfied Customers",
        value: "100%",
        icon: "Heart",
        order: 2
    },
    {
        label: "Repeated Customers",
        value: "150+",
        icon: "Users",
        order: 3
    },
    {
        label: "Team Members",
        value: "15+",
        icon: "Award",
        order: 4
    }
];

mongoose.connect(MONGODB_URI)
    .then(async () => {
        console.log('Connected to MongoDB');

        try {
            await Stat.deleteMany({}); // Clear existing stats
            await Stat.insertMany(stats);
            console.log('Stats seeded successfully');
        } catch (error) {
            console.error('Error seeding stats:', error);
        }

        mongoose.connection.close();
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    });
