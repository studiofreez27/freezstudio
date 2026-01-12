require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const Booking = require('./models/Booking');
const GalleryItem = require('./models/GalleryItem');
const Category = require('./models/Category');
const Stat = require('./models/Stat');
const Message = require('./models/Message');
const Review = require('./models/Review');
const User = require('./models/User');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'; // Move to .env in production

// Ensure uploads directory exists
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

// Middleware
app.use(cors({
    origin: ['http://localhost:5173', 'https://studioproject02.onrender.com'],
    credentials: true
}));
app.use(express.json());
app.use('/uploads', express.static(uploadDir)); // Serve uploaded files using absolute path

// Auth Middleware
const auth = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
        console.log('Auth failed: No token provided');
        return res.status(401).json({ error: 'Access denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (ex) {
        console.log('Auth failed:', ex.message);
        console.log('Token received:', token);
        console.log('Server Secret used:', JWT_SECRET);
        res.status(400).json({ error: 'Invalid token.' });
    }
};

// Multer Storage Configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir) // Use absolute path
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
});

const upload = multer({ storage: storage });

// Database Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/eternal-knot';

mongoose.connect(MONGODB_URI)
    .then(() => console.log('✅ Connected to MongoDB'))
    .catch(err => console.error('❌ MongoDB connection error:', err));

// Routes
app.get('/', (req, res) => {
    console.log('GET / request received');
    res.send('Eternal Knot Studio API is running');
});

// --- Auth Routes ---
app.post('/api/auth/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user) return res.status(400).json({ error: 'Invalid username or password' });

        const validPassword = await user.comparePassword(password);
        if (!validPassword) return res.status(400).json({ error: 'Invalid username or password' });

        const token = jwt.sign({ _id: user._id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// --- Booking Routes ---

// POST /api/bookings - Create a new booking
app.post('/api/bookings', async (req, res) => {
    try {
        const { name, phone, eventDate, eventType, location, message } = req.body;

        if (!name || !phone || !eventDate || !location) {
            return res.status(400).json({ error: 'Please fill in all required fields.' });
        }

        const newBooking = new Booking({
            name,
            phone,
            eventDate,
            eventType,
            location,
            message
        });

        const savedBooking = await newBooking.save();
        console.log('New Booking Received:', savedBooking);
        res.status(201).json({ message: 'Booking request received successfully!', booking: savedBooking });
    } catch (error) {
        console.error('Error saving booking:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// --- Gallery Routes ---

// GET /api/gallery - Get all gallery items
app.get('/api/gallery', async (req, res) => {
    try {
        const items = await GalleryItem.find().sort({ createdAt: -1 });
        res.json(items);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching gallery items' });
    }
});

// POST /api/gallery - Upload a new gallery item (Admin)
app.post('/api/gallery', auth, upload.single('image'), async (req, res) => {
    try {
        const { title, category } = req.body;
        const imageUrl = req.file ? `/uploads/${req.file.filename}` : '';

        if (!imageUrl) {
            return res.status(400).json({ error: 'Image is required' });
        }

        const newItem = new GalleryItem({
            title,
            category,
            imageUrl
        });

        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (error) {
        console.error('Error uploading gallery item:', error);
        res.status(500).json({ error: 'Error uploading gallery item' });
    }
});

// DELETE /api/gallery/:id - Delete a gallery item (Admin)
app.delete('/api/gallery/:id', auth, async (req, res) => {
    try {
        const item = await GalleryItem.findById(req.params.id);
        if (!item) {
            return res.status(404).json({ error: 'Item not found' });
        }

        // Delete file from filesystem
        const filePath = path.join(__dirname, item.imageUrl);
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }

        await GalleryItem.findByIdAndDelete(req.params.id);
        res.json({ message: 'Item deleted successfully' });
    } catch (error) {
        console.error('Error deleting gallery item:', error);
        res.status(500).json({ error: 'Error deleting gallery item' });
    }
});

// --- Category Routes ---

// GET /api/categories - Get all categories
app.get('/api/categories', async (req, res) => {
    try {
        const categories = await Category.find().sort({ createdAt: 1 });
        res.json(categories);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching categories' });
    }
});

// POST /api/categories - Create a new category (Admin)
app.post('/api/categories', auth, async (req, res) => {
    try {
        const { name } = req.body;
        if (!name) {
            return res.status(400).json({ error: 'Category name is required' });
        }

        const newCategory = new Category({ name });
        const savedCategory = await newCategory.save();
        res.status(201).json(savedCategory);
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ error: 'Category already exists' });
        }
        res.status(500).json({ error: 'Error creating category' });
    }
});

// DELETE /api/categories/:id - Delete a category (Admin)
app.delete('/api/categories/:id', auth, async (req, res) => {
    try {
        await Category.findByIdAndDelete(req.params.id);
        res.json({ message: 'Category deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting category' });
    }
});

// --- Stats Routes ---

// GET /api/stats - Get all stats
app.get('/api/stats', async (req, res) => {
    console.log('GET /api/stats request received');
    try {
        const stats = await Stat.find().sort({ order: 1 });
        console.log('Stats found:', stats.length);
        res.json(stats);
    } catch (error) {
        console.error('Error in /api/stats:', error);
        res.status(500).json({ error: 'Error fetching stats' });
    }
});

// POST /api/stats - Create a new stat (Admin)
app.post('/api/stats', auth, async (req, res) => {
    try {
        const { label, value, icon, order } = req.body;
        const newStat = new Stat({ label, value, icon, order });
        const savedStat = await newStat.save();
        res.status(201).json(savedStat);
    } catch (error) {
        res.status(500).json({ error: 'Error creating stat' });
    }
});

// PUT /api/stats/:id - Update a stat (Admin)
app.put('/api/stats/:id', auth, async (req, res) => {
    console.log('PUT /api/stats request received for ID:', req.params.id);
    console.log('Body:', req.body);
    try {
        const { label, value, icon, order } = req.body;
        const updatedStat = await Stat.findByIdAndUpdate(
            req.params.id,
            { label, value, icon, order },
            { new: true }
        );
        console.log('Stat updated:', updatedStat);
        res.json(updatedStat);
    } catch (error) {
        console.error('Error updating stat:', error);
        res.status(500).json({ error: 'Error updating stat' });
    }
});

// DELETE /api/stats/:id - Delete a stat (Admin)
app.delete('/api/stats/:id', auth, async (req, res) => {
    try {
        await Stat.findByIdAndDelete(req.params.id);
        res.json({ message: 'Stat deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting stat' });
    }
});

// --- Message Routes ---

// POST /api/messages - Submit a new message (Public)
app.post('/api/messages', async (req, res) => {
    try {
        const { name, email, phone, subject, message } = req.body;

        // Basic validation
        if (!name || !email || !phone || !subject || !message) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const newMessage = new Message({ name, email, phone, subject, message });
        await newMessage.save();
        res.status(201).json({ message: 'Message sent successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error sending message' });
    }
});

// GET /api/messages - Get all messages (Admin)
app.get('/api/messages', auth, async (req, res) => {
    try {
        const messages = await Message.find().sort({ createdAt: -1 });
        res.json(messages);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching messages' });
    }
});

// DELETE /api/messages/:id - Delete a message (Admin)
app.delete('/api/messages/:id', auth, async (req, res) => {
    try {
        await Message.findByIdAndDelete(req.params.id);
        res.json({ message: 'Message deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting message' });
    }
});

// --- Review Routes ---

// GET /api/reviews - Get all reviews (Public)
app.get('/api/reviews', async (req, res) => {
    try {
        const reviews = await Review.find().sort({ createdAt: -1 });
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching reviews' });
    }
});

// POST /api/reviews - Add a new review (Admin)
app.post('/api/reviews', auth, upload.single('image'), async (req, res) => {
    try {
        const { name, role, rating, text } = req.body;
        const image = req.file ? `/uploads/${req.file.filename}` : '';

        if (!name || !role || !image || !rating || !text) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const newReview = new Review({ name, role, image, rating, text });
        await newReview.save();
        res.status(201).json(newReview);
    } catch (error) {
        res.status(500).json({ error: 'Error adding review' });
    }
});

// DELETE /api/reviews/:id - Delete a review (Admin)
app.delete('/api/reviews/:id', auth, async (req, res) => {
    try {
        await Review.findByIdAndDelete(req.params.id);
        res.json({ message: 'Review deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting review' });
    }
});

// --- Serve Static Assets in Production ---

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/dist')));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
