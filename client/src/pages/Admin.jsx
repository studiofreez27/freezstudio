import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trash2, Upload, Plus } from 'lucide-react';

const Admin = () => {
    const [items, setItems] = useState([]);
    const [formData, setFormData] = useState({
        title: '',
        category: 'Wedding',
        image: null
    });
    const [status, setStatus] = useState('idle');

    useEffect(() => {
        fetchGalleryItems();
    }, []);

    const fetchGalleryItems = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/gallery');
            const data = await response.json();
            setItems(data);
        } catch (error) {
            console.error('Error fetching gallery:', error);
        }
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        const data = new FormData();
        data.append('title', formData.title);
        data.append('category', formData.category);
        data.append('image', formData.image);

        try {
            const response = await fetch('http://localhost:5000/api/gallery', {
                method: 'POST',
                body: data,
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ title: '', category: 'Wedding', image: null });
                fetchGalleryItems();
                // Reset file input manually
                document.getElementById('fileInput').value = "";
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Error uploading:', error);
            setStatus('error');
        } finally {
            setTimeout(() => setStatus('idle'), 3000);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this image?')) return;

        try {
            await fetch(`http://localhost:5000/api/gallery/${id}`, {
                method: 'DELETE',
            });
            setItems(items.filter(item => item._id !== id));
        } catch (error) {
            console.error('Error deleting:', error);
        }
    };

    return (
        <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-serif font-bold text-wedding-dark mb-8 text-center">Admin Dashboard</h1>

                {/* Upload Form */}
                <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto mb-16">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <Upload className="text-wedding-gold" /> Upload New Photo
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-wedding-gold outline-none"
                                placeholder="e.g. Sunset Couple"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-wedding-gold outline-none bg-white"
                            >
                                <option value="Wedding">Wedding</option>
                                <option value="Pre-Wedding">Pre-Wedding</option>
                                <option value="Candid">Candid</option>
                                <option value="Video">Video</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Image</label>
                            <input
                                type="file"
                                id="fileInput"
                                onChange={handleFileChange}
                                required
                                accept="image/*"
                                className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-wedding-gold/10 file:text-wedding-gold hover:file:bg-wedding-gold/20"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="w-full bg-wedding-gold text-white font-bold py-3 rounded-lg hover:bg-yellow-600 transition-colors flex justify-center items-center gap-2"
                        >
                            {status === 'loading' ? 'Uploading...' : <><Plus className="w-5 h-5" /> Add to Gallery</>}
                        </button>

                        {status === 'success' && <p className="text-green-500 text-center">Uploaded successfully!</p>}
                        {status === 'error' && <p className="text-red-500 text-center">Upload failed.</p>}
                    </form>
                </div>

                {/* Gallery List */}
                <h2 className="text-2xl font-bold mb-6 text-center">Manage Gallery Items</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {items.map((item) => (
                        <div key={item._id} className="bg-white rounded-lg shadow-md overflow-hidden group relative">
                            <img
                                src={`http://localhost:5000${item.imageUrl}`}
                                alt={item.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="font-bold text-gray-800 truncate">{item.title}</h3>
                                <p className="text-sm text-gray-500">{item.category}</p>
                            </div>
                            <button
                                onClick={() => handleDelete(item._id)}
                                className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                            >
                                <Trash2 className="w-4 h-4" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Admin;
