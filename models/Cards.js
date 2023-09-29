import mongoose, { Schema } from "mongoose";

const sportSchema = new Schema({
  sport: String,
});

const Sport = mongoose.model("Sport", sportSchema);

const brandSchema = new Schema({
  variation: String,
  year: Number,
});

const Brand = mongoose.model("Brand", brandSchema);

const variationSchema = new Schema({
  numbered: Boolean,
  autograph: Boolean,
  color: String, // potentially use ENUMS (preferred)
});

const Variation = mongoose.model("Variation", variationSchema);

const cardSchema = new Schema({
  brand: { type: Schema.Types.ObjectId, ref: "Brand" },
  variation: { type: Schema.Types.ObjectId, ref: "Variation" },
  cardNumber: Number,
});

const Card = mongoose.model("Card", cardSchema);

const playerSchema = new Schema({
  playerName: String,
  playerNumber: Number,
  playerTeam: String,
  playerPosition: String,
  playerSport: { type: Schema.Types.ObjectId, ref: "Sport" },
});

const Player = mongoose.model("Player", playerSchema);

export { Sport, Card, Player, Brand, Variation };
