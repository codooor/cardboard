import mongoose, { Schema } from "mongoose";

/* ******

strong identifiers = strong entity
weak entity does not have an indetifying attribute
  -Tasks have taskcodes tasknames durationtimes = no unique attribute
******* */

// database ENUMS
const brand = ["Panini", "Topps", "Leaf", "Bowman"];
// const sports = ["NFL", "CFB", "NBA", "MCB", "MLB", "WNBA"];
// const color = [
//   "blue",
//   "green",
//   "purple",
//   "tri-color",
//   "cracked ice",
//   "blue shimmer",
// ];

// Sport Schema ********************************
const sportSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const Sport = mongoose.model("Sport", sportSchema);

// Player Schema ******************************
const athleteSchema = new Schema({
  firstname: String,
  lastname: String,
  number: Number,
  team: String,
  position: String,
  sport: { type: Schema.Types.ObjectId, ref: "Sport" },
});

const Athlete = mongoose.model("Athlete", athleteSchema);

// CardVariation Schema ***********************************
const cardSetSchema = new Schema({
  boxname: String,
  year: Number,
  brand: { type: Schema.Types.ObjectId, ref: "Brand" },
  variant: [{ type: Schema.Types.ObjectId, ref: "SetVariation" }],
});

// cardSetSchema.index({ boxname: 1, year: 1 }, { unique: true });
const CardSet = mongoose.model("CardSet", cardSetSchema);

//Brand Schema ****************************************
const brandSchema = new Schema({
  name: { type: String, enum: brand, required: true },
  cardset: [{ type: Schema.Types.ObjectId, ref: "CardSet" }],
});

const Brand = mongoose.model("Brand", brandSchema);

// Card Schema ********************************************
const cardSchema = new Schema({
  brand: { type: String, enum: brand, required: true },
  cardNumber: Number,
});

const Card = mongoose.model("Card", cardSchema);

export { Card, Athlete, Brand, CardSet, Sport };
