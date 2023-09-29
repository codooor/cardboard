import mongoose, { Schema } from "mongoose";

const brand = ["Panini", "Topps", "Leaf", "Bowman"];
const sports = [
  "NFL",
  "College Football",
  "NBA",
  "College Basketball",
  "Major League Baseball",
  "WNBA",
];

// Sport Schema
const sportSchema = new Schema({
  name: {
    type: String,
    enum: sports,
  },
});

const Sport = mongoose.model("Sport", sportSchema);

// Player Schema
const playerSchema = new Schema({
  firstname: String,
  lastname: String,
  number: Number,
  team: String,
  position: String,
  sport: { type: String, enum: sports, required: true },
});

const Player = mongoose.model("Player", playerSchema);

const productVariationSchema = new Schema({
  boxname: String,
  yearMade: Number,
});

const ProductVariation = mongoose.model(
  "ProductVariation",
  productVariationSchema
);

// Product Schema

// const productSchema = new Schema({
//   name: String,
//   yearMade: Number,
//   productVariation: [productVariationSchema], // Fixed the reference here
// });

// const Product = mongoose.model("Product", productSchema);

// Brand Schema
const brandSchema = new Schema({
  name: { type: String, enum: brand, required: true },
  variation: [{ type: Schema.Types.ObjectId, ref: "Product Variation" }],
});

const Brand = mongoose.model("Brand", brandSchema);

const color = [
  "blue",
  "green",
  "purple",
  "tri-color",
  "cracked ice",
  "blue shimmer",
];
// Variation Schema
const cardVariationSchema = new Schema({
  numbered: Boolean,
  autograph: Boolean,
  color: { type: String, enum: color, required: true }, // potentially use ENUMS (preferred)
});

const CardVariation = mongoose.model("CardVariation", cardVariationSchema);

// Card Schema
const cardSchema = new Schema({
  brand: [brandSchema],
  product: [productSchema],
  cardNumber: Number,
});

const Card = mongoose.model("Card", cardSchema);

export { Card, Player, Brand, CardVariation, ProductVariation, Sport }; // Added Product to the export
