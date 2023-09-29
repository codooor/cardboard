// import { Sport } from "../../models/Cards.js";

// const newSport = async (req, res) => {
//   const { sport } = req.body;
//   try {
//     const newSport = new Sport({ sport: sport });

//     if (!sport) {
//       res.status(501).json({ message: "No sport created" });
//     } else {
//       res.status(201).json({ message: "new sport created" });
//       console.log("Saved:", newSport);
//     }

//     newSport.save();
//   } catch (err) {
//     console.error(err);
//     res.status(501).json({ message: "internal error" });
//   }
// };

// const getSportById = async (req, res) => {
//   const sportId = req.params.id;
//   try {
//     const foundSport = await Sport.findById(sportId);

//     if (!foundSport) {
//       res.status(401).json({ message: "No sport with this ID" });
//     } else {
//       res.status(201).json({ message: "Found sport with correct ID" });
//       console.log(foundSport);
//     }
//   } catch (err) {
//     console.error(err);
//     res.status(501).json({ message: "internal server error" });
//   }
// };

// const getAllSports = async (req, res) => {
//   try {
//     const allSports = await Sport.find();

//     if (!allSports) {
//       res.status(404).json({ message: "Sports not found" });
//     } else {
//       res.status(200).json(allSports);
//     }
//   } catch (err) {
//     console.error(err);
//     res.status(501).json({ message: "internal server error" });
//   }
// };

// export { newSport, getSportById, getAllSports };
