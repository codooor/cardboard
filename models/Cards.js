import mongoose, { Schema } from "mongoose";

/* ******

strong identifiers = strong entity
weak entity does not have an indetifying attribute
  -Tasks have taskcodes tasknames durationtimes = no unique attribute
******* */

// Sport Schema ********************************
const sportSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const Sport = mongoose.model("Sport", sportSchema);

const teamSchema = new Schema({
  name: String,
  sport: { type: Schema.Types.ObjectId, ref: "Sport" },
  division: { type: Schema.Types.ObjectId, ref: "Division" },
});

const Team = mongoose.model("Team", teamSchema);

const leagueDivisionSchema = new Schema({
  division: String,
  teams: [{ type: Schema.Types.ObjectId, ref: "Team" }],
});

const Division = mongoose.model("Division", leagueDivisionSchema);

const conferenceSchema = new Schema({
  name: String,
  teams: [{ type: Schema.Types.ObjectId, ref: "Team" }],
  divisions: [{ type: Schema.Types.ObjectId, ref: "Division" }],
});

const Conference = mongoose.model("Conference", conferenceSchema);

// Player Schema ******************************
const athleteSchema = new Schema({
  firstname: String,
  lastname: String,
  number: Number,
  team: String,
  position: String,
  sport: { type: Schema.Types.ObjectId, ref: "Sport" },
  cards: [{ type: Schema.Types.ObjectId, ref: "Card" }],
});

const Athlete = mongoose.model("Athlete", athleteSchema);

// Card Schema ********************************************
const cardSchema = new Schema({
  number: Number,
  isAutographed: Boolean,
  isNumberedTo: Boolean,
  athlete: { type: Schema.Types.ObjectId, ref: "Athlete" },
});

const Card = mongoose.model("Card", cardSchema);

//Brand Schema ****************************************
const brandSchema = new Schema({
  name: String,
  cardset: [{ type: Schema.Types.ObjectId, ref: "CardSet" }],
});

const Brand = mongoose.model("Brand", brandSchema);

// CardVariation Schema ***********************************
const cardSetSchema = new Schema({
  boxname: String,
  year: Number,
  brand: { type: Schema.Types.ObjectId, ref: "Brand" },
  cards: [{ type: Schema.Types.ObjectId, ref: "Card" }],
});

// cardSetSchema.index({ boxname: 1, year: 1 }, { unique: true });
const CardSet = mongoose.model("CardSet", cardSetSchema);

export { Card, Athlete, Brand, CardSet, Sport, Team, Division, Conference };
