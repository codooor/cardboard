import mongoose, { Schema } from "mongoose";

// Sport Schema
const sportSchema = new Schema({
  name: String,
});

const Sport = mongoose.model("Sport", sportSchema);

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
  name: String,
  variation: [{ type: Schema.Types.ObjectId, ref: "Product Variation" }],
});

const Brand = mongoose.model("Brand", brandSchema);

// Variation Schema
const cardVariationSchema = new Schema({
  numbered: Boolean,
  autograph: Boolean,
  color: String, // potentially use ENUMS (preferred)
});

const CardVariation = mongoose.model("CardVariation", cardVariationSchema);

// Card Schema
const cardSchema = new Schema({
  brand: [brandSchema],
  product: [productSchema], // renamed from productName and fixed the reference
  cardNumber: Number,
});

const Card = mongoose.model("Card", cardSchema);

// Player Schema
const playerSchema = new Schema({
  playerName: String,
  playerNumber: Number,
  playerTeam: String,
  playerPosition: String,
  playerSport: [sportSchema],
});

const Player = mongoose.model("Player", playerSchema);

export { Sport, Card, Player, Brand, CardVariation, ProductVariation }; // Added Product to the export
