const mongoose = require('mongoose');
const User = require('./models/User');
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/eternal-knot';

mongoose.connect(MONGODB_URI)
    .then(async () => {
        console.log('Connected to MongoDB');

        const adminUsername = 'admin';
        const adminPassword = 'password123'; // Change this in production!

        try {
            const existingAdmin = await User.findOne({ username: adminUsername });
            if (existingAdmin) {
                console.log('Admin user already exists');
            } else {
                const newAdmin = new User({
                    username: adminUsername,
                    password: adminPassword
                });
                await newAdmin.save();
                console.log(`Admin user created. Username: ${adminUsername}, Password: ${adminPassword}`);
            }
        } catch (error) {
            console.error('Error creating admin user:', error);
        }

        mongoose.connection.close();
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    });
