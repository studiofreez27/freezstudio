const mongoose = require('mongoose');
const Category = require('./models/Category');
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/eternal-knot';

const categories = [
    "Wedding",
    "Pre-Wedding",
    "Candid",
    "Video",
    "Maternity",
    "Kids",
    "Newborn",
    "Corporate"
];

mongoose.connect(MONGODB_URI)
    .then(async () => {
        console.log('Connected to MongoDB');

        for (const name of categories) {
            try {
                await Category.create({ name });
                console.log(`Created category: ${name}`);
            } catch (error) {
                if (error.code === 11000) {
                    console.log(`Category already exists: ${name}`);
                } else {
                    console.error(`Error creating ${name}:`, error);
                }
            }
        }

        console.log('Seeding complete');
        mongoose.connection.close();
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    });
