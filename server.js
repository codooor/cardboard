import express from "express";
import { config } from "dotenv";
import connectDb from "./config/db.js";

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
app.use(express.json());

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
  console.log(`Listening on http://localhost:${PORT}`);
});
