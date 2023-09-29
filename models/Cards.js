import mongoose, { Schema } from "mongoose";

// Sport Schema
const sportSchema = new Schema({
  name: String,
});

const Sport = mongoose.model("Sport", sportSchema);

// Variation Schema
const variationSchema = new Schema({
  numbered: Boolean,
  autograph: Boolean,
  color: String, // potentially use ENUMS (preferred)
});

const Variation = mongoose.model("Variation", variationSchema);

// Product Schema
const productSchema = new Schema({
  productName: String,
  yearMade: Number,
  productVariations: { type: Schema.Types.ObjectId, ref: "Variation" }, // Fixed the reference here
});

const Product = mongoose.model("Product", productSchema); // Fixed the model name here

// Brand Schema
const brandSchema = new Schema({
  name: String,
  product: { type: Schema.Types.ObjectId, ref: "Product" }, // Fixed the reference here
  productSport: { type: Schema.Types.ObjectId, ref: "Sport" },
});

const Brand = mongoose.model("Brand", brandSchema);

// Card Schema
const cardSchema = new Schema({
  brand: { type: Schema.Types.ObjectId, ref: "Brand" },
  product: { type: Schema.Types.ObjectId, ref: "Product" }, // renamed from productName and fixed the reference
  cardNumber: Number,
});

const Card = mongoose.model("Card", cardSchema);

// Player Schema
const playerSchema = new Schema({
  playerName: String,
  playerNumber: Number,
  playerTeam: String,
  playerPosition: String,
  playerSport: { type: Schema.Types.ObjectId, ref: "Sport" },
});

const Player = mongoose.model("Player", playerSchema);

export { Sport, Card, Player, Brand, Variation, Product }; // Added Product to the export
