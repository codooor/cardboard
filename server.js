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
