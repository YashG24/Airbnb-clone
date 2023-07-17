const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  description: String,
  type: String,
  baseRate: Number,
  bedOptions: String,
  sleepsCount: Number,
  smokingAllowed: Boolean,
});

const reviewSchema = new mongoose.Schema({
  desc: String,
  name: String,
  month: String,
  year: Number,
});

const addressSchema = new mongoose.Schema({
  streetAddress: String,
  city: String,
  stateProvince: String,
  postalCode: Number,
  country: String,
});

const hotelSchema = new mongoose.Schema({
  hotelId: String,
  hotelName: String,
  description: String,
  category: String,
  owner: {
    name: String,
    email: String,
  },
  parkingIncluded: Boolean,
  rating: Number,
  reviews: [reviewSchema],
  address: addressSchema,
  location: String,
  rooms: [roomSchema],
  amenities: [String],
  links: [String],
});

const Hotel = mongoose.model("hotels", hotelSchema);

module.exports = { Hotel };
