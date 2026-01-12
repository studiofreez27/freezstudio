import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Trash2, LogOut, Upload, Image as ImageIcon, List, BarChart2, Save, MessageSquare, Mail, Phone, Calendar, Star } from 'lucide-react';
import config from '../config';

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('categories');
    const [categories, setCategories] = useState([]);
    const [galleryItems, setGalleryItems] = useState([]);
    const [stats, setStats] = useState([]);
    const [messages, setMessages] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [newCategory, setNewCategory] = useState('');

    // Gallery Form State
    const [galleryFormData, setGalleryFormData] = useState({
        title: '',
        category: 'Wedding',
        image: null
    });

    // Review Form State
    const [reviewFormData, setReviewFormData] = useState({
        name: '',
        role: '',
        rating: 5,
        text: '',
        image: null
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const token = localStorage.getItem('token');

    useEffect(() => {
        if (!token) {
            navigate('/admin/login');
            return;
        }
        fetchData();
    }, [token, navigate]);

    const fetchData = async () => {
        setLoading(true);
        await Promise.all([fetchCategories(), fetchGalleryItems(), fetchStats(), fetchMessages(), fetchReviews()]);
        setLoading(false);
    };

    const fetchCategories = async () => {
        try {
            const response = await fetch(`${config.API_URL}/api/categories`);
            if (response.ok) {
                const data = await response.json();
                setCategories(data);
                // Set default category for gallery form if available
                if (data.length > 0) {
                    setGalleryFormData(prev => ({ ...prev, category: data[0].name }));
                }
            }
        } catch (err) {
            console.error('Error fetching categories:', err);
        }
    };

    const fetchGalleryItems = async () => {
        try {
            const response = await fetch(`${config.API_URL}/api/gallery`);
            if (response.ok) {
                const data = await response.json();
                setGalleryItems(data);
            }
        } catch (err) {
            console.error('Error fetching gallery:', err);
        }
    };

    const fetchStats = async () => {
        try {
            const response = await fetch(`${config.API_URL}/api/stats`);
            if (response.ok) {
                const data = await response.json();
                setStats(data);
            }
        } catch (err) {
            console.error('Error fetching stats:', err);
        }
    };

    const fetchMessages = async () => {
        try {
            const response = await fetch(`${config.API_URL}/api/messages`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (response.ok) {
                const data = await response.json();
                setMessages(data);
            }
        } catch (err) {
            console.error('Error fetching messages:', err);
        }
    };

    const fetchReviews = async () => {
        try {
            const response = await fetch(`${config.API_URL}/api/reviews`);
            if (response.ok) {
                const data = await response.json();
                setReviews(data);
            }
        } catch (err) {
            console.error('Error fetching reviews:', err);
        }
    };

    // --- Category Handlers ---
    const handleAddCategory = async (e) => {
        e.preventDefault();
        if (!newCategory.trim()) return;
        setError('');
        setSuccess('');

        try {
            const response = await fetch(`${config.API_URL}/api/categories`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ name: newCategory }),
            });

            if (response.ok) {
                setNewCategory('');
                fetchCategories();
                setSuccess('Category added successfully');
            } else {
                const data = await response.json();
                setError(data.error || 'Failed to add category');
            }
        } catch (err) {
            setError('Error adding category');
        }
    };

    const handleDeleteCategory = async (id) => {
        if (!window.confirm('Are you sure you want to delete this category?')) return;
        setError('');

        try {
            const response = await fetch(`${config.API_URL}/api/categories/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (response.ok) {
                fetchCategories();
                setSuccess('Category deleted successfully');
            } else {
                setError('Failed to delete category');
            }
        } catch (err) {
            setError('Error deleting category');
        }
    };

    // --- Gallery Handlers ---
    const handleGalleryInputChange = (e) => {
        setGalleryFormData({ ...galleryFormData, [e.target.name]: e.target.value });
    };

    const handleGalleryFileChange = (e) => {
        setGalleryFormData({ ...galleryFormData, image: e.target.files[0] });
    };

    const handleUploadGallery = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        const data = new FormData();
        data.append('title', galleryFormData.title);
        data.append('category', galleryFormData.category);
        data.append('image', galleryFormData.image);

        try {
            const response = await fetch(`${config.API_URL}/api/gallery`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                body: data,
            });

            if (response.ok) {
                setSuccess('Image uploaded successfully');
                setGalleryFormData({ ...galleryFormData, title: '', image: null });
                fetchGalleryItems();
                document.getElementById('fileInput').value = "";
            } else {
                const resData = await response.json();
                setError(resData.error || 'Upload failed');
            }
        } catch (error) {
            setError('Error uploading image');
        }
    };

    const handleDeleteGalleryItem = async (id) => {
        if (!window.confirm('Are you sure you want to delete this image?')) return;
        setError('');

        try {
            const response = await fetch(`${config.API_URL}/api/gallery/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (response.ok) {
                setGalleryItems(galleryItems.filter(item => item._id !== id));
                setSuccess('Image deleted successfully');
            } else {
                setError('Failed to delete image');
            }
        } catch (error) {
            setError('Error deleting image');
        }
    };

    // --- Stats Handlers ---
    const handleStatChange = (id, field, value) => {
        setStats(stats.map(stat => stat._id === id ? { ...stat, [field]: value } : stat));
    };

    const handleUpdateStat = async (id) => {
        const statToUpdate = stats.find(s => s._id === id);
        if (!statToUpdate) return;
        setError('');
        setSuccess('');

        try {
            const response = await fetch(`${config.API_URL}/api/stats/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(statToUpdate),
            });

            if (response.ok) {
                setSuccess('Stat updated successfully');
            } else {
                setError('Failed to update stat');
            }
        } catch (error) {
            setError('Error updating stat');
        }
    };

    // --- Message Handlers ---
    const handleDeleteMessage = async (id) => {
        if (!window.confirm('Are you sure you want to delete this message?')) return;
        setError('');

        try {
            const response = await fetch(`${config.API_URL}/api/messages/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (response.ok) {
                setMessages(messages.filter(msg => msg._id !== id));
                setSuccess('Message deleted successfully');
            } else {
                setError('Failed to delete message');
            }
        } catch (error) {
            setError('Error deleting message');
        }
    };

    // --- Review Handlers ---
    const handleReviewInputChange = (e) => {
        setReviewFormData({ ...reviewFormData, [e.target.name]: e.target.value });
    };

    const handleReviewFileChange = (e) => {
        setReviewFormData({ ...reviewFormData, image: e.target.files[0] });
    };

    const handleAddReview = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        const data = new FormData();
        data.append('name', reviewFormData.name);
        data.append('role', reviewFormData.role);
        data.append('rating', reviewFormData.rating);
        data.append('text', reviewFormData.text);
        data.append('image', reviewFormData.image);

        try {
            const response = await fetch(`${config.API_URL}/api/reviews`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                body: data,
            });

            if (response.ok) {
                setSuccess('Review added successfully');
                setReviewFormData({ name: '', role: '', rating: 5, text: '', image: null });
                fetchReviews();
                document.getElementById('reviewFileInput').value = "";
            } else {
                const resData = await response.json();
                setError(resData.error || 'Failed to add review');
            }
        } catch (error) {
            setError('Error adding review');
        }
    };

    const handleDeleteReview = async (id) => {
        if (!window.confirm('Are you sure you want to delete this review?')) return;
        setError('');

        try {
            const response = await fetch(`${config.API_URL}/api/reviews/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (response.ok) {
                setReviews(reviews.filter(review => review._id !== id));
                setSuccess('Review deleted successfully');
            } else {
                setError('Failed to delete review');
            }
        } catch (error) {
            setError('Error deleting review');
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/admin/login');
    };

    if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

    return (
        <div className="min-h-screen bg-gray-50 p-8 pt-24">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-serif font-bold text-wedding-dark">Admin Dashboard</h1>
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 text-red-600 hover:text-red-700 font-medium px-4 py-2 rounded-lg hover:bg-red-50 transition-colors"
                    >
                        <LogOut size={20} />
                        Logout
                    </button>
                </div>

                {/* Tabs */}
                <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
                    <button
                        onClick={() => setActiveTab('categories')}
                        className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all whitespace-nowrap ${activeTab === 'categories' ? 'bg-wedding-gold text-white shadow-md' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
                    >
                        <List size={20} /> Categories
                    </button>
                    <button
                        onClick={() => setActiveTab('gallery')}
                        className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all whitespace-nowrap ${activeTab === 'gallery' ? 'bg-wedding-gold text-white shadow-md' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
                    >
                        <ImageIcon size={20} /> Gallery
                    </button>
                    <button
                        onClick={() => setActiveTab('stats')}
                        className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all whitespace-nowrap ${activeTab === 'stats' ? 'bg-wedding-gold text-white shadow-md' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
                    >
                        <BarChart2 size={20} /> Stats
                    </button>
                    <button
                        onClick={() => setActiveTab('messages')}
                        className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all whitespace-nowrap ${activeTab === 'messages' ? 'bg-wedding-gold text-white shadow-md' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
                    >
                        <MessageSquare size={20} /> Messages
                    </button>
                    <button
                        onClick={() => setActiveTab('reviews')}
                        className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all whitespace-nowrap ${activeTab === 'reviews' ? 'bg-wedding-gold text-white shadow-md' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
                    >
                        <Star size={20} /> Reviews
                    </button>
                </div>

                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6 flex justify-between items-center">
                        {error}
                        <button onClick={() => setError('')} className="font-bold">&times;</button>
                    </div>
                )}

                {success && (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6 flex justify-between items-center">
                        {success}
                        <button onClick={() => setSuccess('')} className="font-bold">&times;</button>
                    </div>
                )}

                {activeTab === 'categories' && (
                    <div className="bg-white rounded-lg shadow-md p-6 mb-8 animate-fade-in-up">
                        <h2 className="text-xl font-semibold mb-4 text-gray-800">Manage Categories</h2>

                        <form onSubmit={handleAddCategory} className="flex gap-4 mb-6">
                            <input
                                type="text"
                                value={newCategory}
                                onChange={(e) => setNewCategory(e.target.value)}
                                placeholder="New Category Name"
                                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-wedding-gold"
                            />
                            <button
                                type="submit"
                                className="bg-wedding-gold text-white px-6 py-2 rounded-md hover:bg-yellow-600 transition-colors flex items-center gap-2"
                            >
                                <Plus size={20} />
                                Add
                            </button>
                        </form>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {categories.map((category) => (
                                <div key={category._id} className="flex justify-between items-center p-4 bg-gray-50 rounded-md border border-gray-200">
                                    <span className="font-medium text-gray-700">{category.name}</span>
                                    <button
                                        onClick={() => handleDeleteCategory(category._id)}
                                        className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded-full transition-colors"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'gallery' && (
                    <div className="space-y-8 animate-fade-in-up">
                        {/* Upload Form */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                                <Upload className="text-wedding-gold" size={24} /> Upload New Photo
                            </h2>

                            <form onSubmit={handleUploadGallery} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                                    <input
                                        type="text"
                                        name="title"
                                        value={galleryFormData.title}
                                        onChange={handleGalleryInputChange}
                                        required
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-wedding-gold outline-none"
                                        placeholder="e.g. Sunset Couple"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                                    <select
                                        name="category"
                                        value={galleryFormData.category}
                                        onChange={handleGalleryInputChange}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-wedding-gold outline-none bg-white"
                                    >
                                        {categories.map(cat => (
                                            <option key={cat._id} value={cat.name}>{cat.name}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Image</label>
                                    <input
                                        type="file"
                                        id="fileInput"
                                        onChange={handleGalleryFileChange}
                                        required
                                        accept="image/*"
                                        className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-wedding-gold/10 file:text-wedding-gold hover:file:bg-wedding-gold/20"
                                    />
                                </div>

                                <div className="md:col-span-3">
                                    <button
                                        type="submit"
                                        className="w-full bg-wedding-gold text-white font-bold py-3 rounded-lg hover:bg-yellow-600 transition-colors flex justify-center items-center gap-2"
                                    >
                                        <Plus className="w-5 h-5" /> Add to Gallery
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Gallery Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {galleryItems.map((item) => (
                                <div key={item._id} className="bg-white rounded-lg shadow-md overflow-hidden group relative">
                                    <img
                                        src={`${config.API_URL}${item.imageUrl}`}
                                        alt={item.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-4">
                                        <h3 className="font-bold text-gray-800 truncate">{item.title}</h3>
                                        <p className="text-sm text-gray-500">{item.category}</p>
                                    </div>
                                    <button
                                        onClick={() => handleDeleteGalleryItem(item._id)}
                                        className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600 shadow-lg"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'stats' && (
                    <div className="bg-white rounded-lg shadow-md p-6 mb-8 animate-fade-in-up">
                        <h2 className="text-xl font-semibold mb-6 text-gray-800">Manage Stats</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {stats.map((stat) => (
                                <div key={stat._id} className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Label</label>
                                        <input
                                            type="text"
                                            value={stat.label}
                                            onChange={(e) => handleStatChange(stat._id, 'label', e.target.value)}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-wedding-gold"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Value</label>
                                        <input
                                            type="text"
                                            value={stat.value}
                                            onChange={(e) => handleStatChange(stat._id, 'value', e.target.value)}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-wedding-gold"
                                        />
                                    </div>
                                    <button
                                        onClick={() => handleUpdateStat(stat._id)}
                                        className="w-full bg-wedding-gold text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors flex items-center justify-center gap-2"
                                    >
                                        <Save size={18} /> Update
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'messages' && (
                    <div className="bg-white rounded-lg shadow-md p-6 mb-8 animate-fade-in-up">
                        <h2 className="text-xl font-semibold mb-6 text-gray-800">Messages ({messages.length})</h2>

                        <div className="space-y-4">
                            {messages.length === 0 ? (
                                <p className="text-gray-500 text-center py-8">No messages yet.</p>
                            ) : (
                                messages.map((msg) => (
                                    <div key={msg._id} className="p-6 bg-gray-50 rounded-lg border border-gray-200 relative group">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                            <div className="flex items-center gap-2 text-gray-700">
                                                <List className="w-4 h-4 text-wedding-gold" />
                                                <span className="font-bold">{msg.name}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-gray-600">
                                                <Mail className="w-4 h-4 text-wedding-gold" />
                                                <a href={`mailto:${msg.email}`} className="hover:text-wedding-gold">{msg.email}</a>
                                            </div>
                                            <div className="flex items-center gap-2 text-gray-600">
                                                <Phone className="w-4 h-4 text-wedding-gold" />
                                                <a href={`tel:${msg.phone}`} className="hover:text-wedding-gold">{msg.phone}</a>
                                            </div>
                                            <div className="flex items-center gap-2 text-gray-500 text-sm">
                                                <Calendar className="w-4 h-4 text-wedding-gold" />
                                                {new Date(msg.createdAt).toLocaleString()}
                                            </div>
                                        </div>

                                        <div className="border-t border-gray-200 pt-4 mt-2">
                                            <h4 className="font-bold text-gray-800 mb-2">{msg.subject}</h4>
                                            <p className="text-gray-600 whitespace-pre-wrap">{msg.message}</p>
                                        </div>

                                        <button
                                            onClick={() => handleDeleteMessage(msg._id)}
                                            className="absolute top-4 right-4 text-red-400 hover:text-red-600 p-2 hover:bg-red-50 rounded-full transition-colors opacity-0 group-hover:opacity-100"
                                            title="Delete Message"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                )}

                {activeTab === 'reviews' && (
                    <div className="space-y-8 animate-fade-in-up">
                        {/* Add Review Form */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                                <Plus className="text-wedding-gold" size={24} /> Add New Review
                            </h2>

                            <form onSubmit={handleAddReview} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Customer Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={reviewFormData.name}
                                        onChange={handleReviewInputChange}
                                        required
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-wedding-gold outline-none"
                                        placeholder="e.g. Priya & Rahul"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Role / Event</label>
                                    <input
                                        type="text"
                                        name="role"
                                        value={reviewFormData.role}
                                        onChange={handleReviewInputChange}
                                        required
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-wedding-gold outline-none"
                                        placeholder="e.g. Wedding Couple"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Rating (1-5)</label>
                                    <input
                                        type="number"
                                        name="rating"
                                        min="1"
                                        max="5"
                                        value={reviewFormData.rating}
                                        onChange={handleReviewInputChange}
                                        required
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-wedding-gold outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Customer Photo</label>
                                    <input
                                        type="file"
                                        id="reviewFileInput"
                                        onChange={handleReviewFileChange}
                                        required
                                        accept="image/*"
                                        className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-wedding-gold/10 file:text-wedding-gold hover:file:bg-wedding-gold/20"
                                    />
                                </div>

                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Review Text</label>
                                    <textarea
                                        name="text"
                                        value={reviewFormData.text}
                                        onChange={handleReviewInputChange}
                                        required
                                        rows="3"
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-wedding-gold outline-none resize-none"
                                        placeholder="Enter the customer's review..."
                                    ></textarea>
                                </div>

                                <div className="md:col-span-2">
                                    <button
                                        type="submit"
                                        className="w-full bg-wedding-gold text-white font-bold py-3 rounded-lg hover:bg-yellow-600 transition-colors flex justify-center items-center gap-2"
                                    >
                                        <Plus className="w-5 h-5" /> Add Review
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Reviews List */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {reviews.map((review) => (
                                <div key={review._id} className="bg-white rounded-lg shadow-md p-6 relative group">
                                    <div className="flex items-start gap-4">
                                        <img
                                            src={`${config.API_URL}${review.image}`}
                                            alt={review.name}
                                            className="w-16 h-16 rounded-full object-cover border-2 border-wedding-gold"
                                        />
                                        <div>
                                            <h3 className="font-bold text-gray-800">{review.name}</h3>
                                            <p className="text-sm text-wedding-gold font-medium uppercase">{review.role}</p>
                                            <div className="flex gap-1 mt-1">
                                                {[...Array(review.rating)].map((_, i) => (
                                                    <Star key={i} size={14} className="fill-wedding-gold text-wedding-gold" />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <p className="mt-4 text-gray-600 italic">"{review.text}"</p>

                                    <button
                                        onClick={() => handleDeleteReview(review._id)}
                                        className="absolute top-4 right-4 text-red-400 hover:text-red-600 p-2 hover:bg-red-50 rounded-full transition-colors opacity-0 group-hover:opacity-100"
                                        title="Delete Review"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminDashboard;
