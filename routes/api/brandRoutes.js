// import { Brand } from "../../models/Cards.js";

// const addNewBrand = async (req, res) => {
//   const { variation, year } = req.body;
//   try {
//     const newBrand = new Brand({ variation: variation, year: year });

//     if (!newBrand) {
//       res.status(400).json({ message: "Cannot create this card brand" });
//     } else {
//       res.status(201).json(newBrand);
//       console.log(newBrand);
//     }

//     newBrand.save();
//   } catch (err) {
//     console.error(err);
//     res.status(501).json({ message: "internal server error" });
//   }
// };

// const getBrandById = async (req, res) => {
//   const cardBrandId = req.params.id;
//   try {
//     const foundCardBrand = await Card.findById(cardBrandId);

//     if (!foundCardBrand) {
//       res.status(404).json({ message: "no card brands by that name." });
//     } else {
//       res.status(200).json(foundCardBrand);
//     }
//   } catch (err) {
//     console.error(err);
//     res.status(501).json({ message: "internal server error" });
//   }
// };

// const getAllBrands = async (req, res) => {
//   try {
//     const allCards = await Card.find();

//     if (!allCards) {
//       res.status(404).json({ message: "Sports not found" });
//     } else {
//       res.status(200).json(allCards);
//     }
//   } catch (err) {
//     console.error(err);
//     res.status(501).json({ message: "internal server error" });
//   }
// };

// export { addNewBrand, getBrandById, getAllBrands };
