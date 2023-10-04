import express, { json } from "express";
import { config } from "dotenv";
import connectDb from "./config/db.js";
import cors from "cors";

import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import typeDefs from "./schema/typedefs.js";
import resolvers from "./schema/resolvers.js";

// import {
//   newSport,
//   getSportById,
//   getAllSports,
// } from "./routes/api/sportRoutes.js";

// import {
//   addNewBrand,
//   getBrandById,
//   getAllBrands,
// } from "./routes/api/brandRoutes.js";

// import { addBrandVariation } from "./routes/api/brandVariationRoutes.js";

const app = express();
config();
connectDb();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  status400ForVariableCoercionErrors: true,
});

await server.start();

app.use("/graphql", cors(), json(), expressMiddleware(server));

// // sport routes
// app.post("/sport", newSport);
// app.get("/sport/", getAllSports);
// app.get("/sport/:id", getSportById);

// // card brand variations
// app.post("/variations", addBrandVariation);

// // card brand routes
// app.post("/brand", addNewBrand);
// app.get("/brand/", getAllBrands);
// app.get("/brand/:id", getBrandById);

const PORT = process.env.PORT || 5555;
app.listen(PORT, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}`);
});

/********************* */
// @export models/Cards.js
// SetVariation,

// @import schema/resolvers.js
// SetVariation,

// schema/typeDefs.js (query)

// getAllSetVariation: [SetVariation]

// schema/typeDefs.js (mutations)

// type SetVariation {
//   id: ID!
//   setname: String!
//   numbered: Boolean!
//   autograph: Boolean!
//   color: Boolean!
//   base: Boolean!
//   cardSet: CardSet
// }

// addNewSetVariation(
//   setname: String!
//   numbered: Boolean!
//   autograph: Boolean!
//   base: Boolean!
//   color: Boolean!
//   cardset: ID!
// ): SetVariation

// const setVariationSchema = new Schema({
//   setname: String,
//   numbered: Boolean,
//   autograph: Boolean,
//   color: Boolean,
//   base: Boolean,
//   cardset: { type: Schema.Types.ObjectId, ref: "CardSet" },
// });

// const SetVariation = mongoose.model("SetVariation", setVariationSchema);

// @query schema/resolvers.js
// getAllSetVariation: async () => {
//   try {
//     return await SetVariation.find();
//   } catch (error) {
//     console.error("Error fetching all variations:", error);
//     throw new Error("Failed to fetch variations.");
//   }
// },
// getAllVariationsById: async (_, { id }) => {
//   try {
//     return await Variation.findById(id);
//   } catch (error) {
//     console.error(`Error fetching variation with ID ${id}:`, error);
//     throw new Error(`Failed to fetch variation with ID ${id}.`);
//   }
// },
// getAllProducts: async () => {
//   if (!Product) {
//     throw new Error("There are no products");
//   }
//   try {
//     return await Product.find();
//   } catch (error) {
//     console.error("Error fetching all products:", error);
//     throw new Error("Failed to fetch products.");
//   }
// },
// getProductById: async (_, { id }) => {
//   try {
//     return await Product.findById(id).populate("productVariations");
//   } catch (error) {
//     console.error(`Error fetching product with ID ${id}:`, error);
//     throw new Error(`Failed to fetch product with ID ${id}.`);
//   }
// },

/***************** */
// older code-
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

// addNewSetVariation: async (
//   _,
//   { setname, numbered, autograph, color, base, cardSetId },
//   __
// ) => {
//   const newSetVariation = new SetVariation({
//     setname,
//     numbered,
//     autograph,
//     color,
//     base,
//     cardset: cardSetId,
//   });

//   if (!newSetVariation) {
//     throw new Error(`Failed to create new variation due to empty fields`);
//   }

//   try {
//     await newSetVariation.save();

//     await CardSet.findByIdAndUpdate(
//       cardSetId,
//       { $push: { variant: newSetVariation } },
//       { new: true, useFindAndModify: false }
//     );

//     return newSetVariation;
//   } catch (err) {
//     console.error(err.message);
//     throw new Error("Failed to create a new product variation!");
//   }
// },
