const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, default: 0 },
  category: { type: String, required: true },
  imageUrls: [{ type: String }], // Array of image links
  specifications: { type: mongoose.Schema.Types.Mixed }, // JSON field for specifications
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Product', productSchema);
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, default: 0 },
  category: { type: String, required: true },
  imageUrls: [{ type: String }], // Array of image links
  specifications: { type: mongoose.Schema.Types.Mixed }, // JSON field for specifications
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Product', productSchema);
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, default: 0 },
  category: { type: String, required: true },
  imageUrls: [{ type: String }], // Array of image links
  specifications: { type: mongoose.Schema.Types.Mixed }, // JSON field for specifications
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Product', productSchema);
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, default: 0 },
  category: { type: String, required: true },
  imageUrls: [{ type: String }], // Array of image links
  specifications: { type: mongoose.Schema.Types.Mixed }, // JSON field for specifications
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Product', productSchema);
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, default: 0 },
  category: { type: String, required: true },
  imageUrls: [{ type: String }], // Array of image links
  specifications: { type: mongoose.Schema.Types.Mixed }, // JSON field for specifications
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Product', productSchema);
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, default: 0 },
  category: { type: String, required: true },
  imageUrls: [{ type: String }], // Array of image links
  specifications: { type: mongoose.Schema.Types.Mixed }, // JSON field for specifications
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Product', productSchema);
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, default: 0 },
  category: { type: String, required: true },
  imageUrls: [{ type: String }], // Array of image links
  specifications: { type: mongoose.Schema.Types.Mixed }, // JSON field for specifications
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Product', productSchema);
