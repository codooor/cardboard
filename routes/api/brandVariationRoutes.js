// import { Variation } from "../../models/Cards.js";

// const addBrandVariation = async (req, res) => {
//   const { variation, year } = req.body;
//   try {
//     const newBrandVariation = new Variation({
//       variation: variation,
//       year: year,
//     });

//     if (!newBrandVariation) {
//       res.status(400).json({ message: "Cannot create brand" });
//     } else {
//       res.status(201).json(newBrandVariation);
//       console.log(newBrandVariation);
//     }

//     await newBrandVariation.save();
//   } catch (err) {
//     console.error(err);
//     res.status(501).json({ message: "internal server error" });
//   }
// };

// export { addBrandVariation };
