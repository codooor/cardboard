import mongoose, { Schema } from "mongoose";

/* ******

strong identifiers = strong entity
weak entity does not have an indetifying attribute
  -Tasks have taskcodes tasknames durationtimes = no unique attribute
******* */

// database ENUMS
const brand = ["Panini", "Topps", "Leaf", "Bowman"];
const sports = ["NFL", "CFB", "NBA", "MCB", "MLB", "WNBA"];
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
    enum: sports,
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
  sport: { type: String, enum: sports, required: true },
});

const Athlete = mongoose.model("Athlete", athleteSchema);

// ProductVariation *****************************
// const productVariationSchema = new Schema({
//   boxname: String,
//   yearMade: Number,
//   cardvariant: [cardSetSchema],
// });

// ProductVariation index

// const ProductVariation = mongoose.model(
//   "ProductVariation",
//   productVariationSchema
// );

const setVariationSchema = new Schema({
  name: String,
  numbered: Boolean,
  autograph: Boolean,
  colors: String,
  base: Boolean,
});

setVariationSchema.index({ boxname: 1, year: 1 }, { unique: true });

const SetVariation = mongoose.model("SetVariation", setVariationSchema);

// CardVariation Schema ***********************************
const cardSetSchema = new Schema({
  boxname: String,
  year: Number,
  variant: [setVariationSchema],
});

const CardSet = mongoose.model("CardSet", cardSetSchema);

//Brand Schema ****************************************
const brandSchema = new Schema({
  name: { type: String, enum: brand, required: true },
  variation: [cardSetSchema],
});

const Brand = mongoose.model("Brand", brandSchema);

// Card Schema ********************************************
const cardSchema = new Schema({
  brand: { type: String, enum: brand, required: true },
  setvariant: [setVariationSchema],
  cardNumber: Number,
});

const Card = mongoose.model("Card", cardSchema);

export { Card, Athlete, Brand, CardSet, SetVariation, Sport };
