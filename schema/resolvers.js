import { Brand, Athlete, Sport, CardSet, Card } from "../models/Cards.js";

// CardSet
// SetVariation

const resolvers = {
  Query: {
    // GET:

    getAllSports: async () => {
      try {
        return await Sport.find();
      } catch (err) {
        console.error(err.message);
        throw new Error("Failed to fetch sports.");
      }
    },
    getSportById: async (_, { id }) => {
      try {
        return await Sport.findById(id);
      } catch (err) {
        console.error(err.message);
        throw new Error(`Failed to fetch sport with ID ${id}.`);
      }
    },
    getAllBrands: async () => {
      try {
        const allBrands = await Brand.find().populate("cardset");

        return allBrands;
      } catch (err) {
        console.error(err.message);
        throw new Error("Cannot find any brands");
      }
    },
    getBrandById: async (_, { id }) => {
      // console.log(`ID #${id} is being passed through!`);
      try {
        const brand = await Brand.findById(id).populate("cardset");
        console.log(brand);

        // const brandObj = brand.toObject();
        // console.log("Full payload:", JSON.stringify(brandObj, null, 2));

        return brand;
      } catch (err) {
        console.error(err.message);
        throw new Error(`Failed to fetch brand name: ${id}.`);
      }
    },

    getAllCardSet: async () => {
      try {
        return await CardSet.find().populate("brand");
      } catch (err) {
        console.error(err.message);
        throw new Error("Failed to fetch cards.");
      }
    },
    getCardSetById: async (_, { id }) => {
      try {
        return await CardSet.findById(id);
      } catch (err) {
        console.error(err.message);
        throw new Error(`Failed to fetch card with ID ${id}.`);
      }
    },
    getAllAthlete: async () => {
      try {
        return await Athlete.find();
      } catch (err) {
        console.error(err.message);
        throw new Error("Failed to fetch athletes.");
      }
    },
    getAthleteById: async (_, { id }) => {
      try {
        return await Athlete.findById(id).populate("sport").populate("cards");
      } catch (err) {
        console.error(err.message);
        throw new Error(`Failed to fetch player with ID ${id}.`);
      }
    },
    getAllCards: async () => {
      try {
        const allCardsInDB = await Card.find().populate("athlete");

        return allCardsInDB;
      } catch (err) {
        console.error(err.message);
      }
    },
    getCardById: async (_, { id }) => {
      try {
        const card = await Card.findById(id).populate("athlete");

        if (!card) {
          throw new Error(`No card ID: ${id} found in this DB`);
        }

        return card;
      } catch (err) {
        console.error(err.message);
        throw new Error(`Error fetching this card`);
      }
    },
  },

  Mutation: {
    // POST:

    addNewSport: async (_, { name }, __) => {
      const newSport = new Sport({
        name: name,
      });

      try {
        await newSport.save();
        return newSport; // Return the newly created sport
      } catch (err) {
        console.error(err.message);
        throw new Error(`Error saving new sport`);
      }
    },

    addNewAthlete: async (
      _,
      { firstname, lastname, number, team, position, sportId }
    ) => {
      try {
        // Check if the specified sportId exists in the Sport collection
        const existingSport = await Sport.findById(sportId);
        if (!existingSport) {
          throw new Error(`Sport with ID ${sportId} does not exist.`);
        }

        // Create a new athlete with the provided information and the specified sportId
        const newAthlete = new Athlete({
          firstname,
          lastname,
          number,
          team,
          position,
          sport: sportId, // Assign the sportId to the athlete's sport field
        });

        // Save the new athlete to the database
        await newAthlete.save();

        // Return the newly created athlete
        const populatedAthlete = await Athlete.findById(
          newAthlete._id
        ).populate("sport");

        return populatedAthlete;
      } catch (err) {
        console.error("Athlete: ", err.message);
        throw new Error("Failed to add a new athlete.");
      }
    },
    addNewBrand: async (_, { name }, __) => {
      const newBrand = new Brand({
        name: name,
      });

      if (!newBrand) {
        throw new Error("No Brand created");
      } else {
        console.log("saved:", newBrand);
      }

      try {
        await newBrand.save();
        return newBrand;
      } catch (err) {
        console.error(err);
        throw new Error("failed to create new brand");
      }
    },
    addNewCardSet: async (_, { boxname, year, brandId }) => {
      const existingBrand = await Brand.findById(brandId);
      if (!existingBrand) {
        throw new Error(`No existing brand with this ID: ${brandId}`);
      }
      const newCardSet = new CardSet({
        boxname,
        year,
        brand: brandId,
      });

      try {
        await newCardSet.save();

        existingBrand.cardset.push(newCardSet._id);
        await existingBrand.save();

        const populatedCardSet = await CardSet.findById(
          newCardSet._id
        ).populate("brand");

        return populatedCardSet;
      } catch (err) {
        console.error(err);
        throw new Error("Card set save unsuccessful.");
      }
    },
    addNewCard: async (
      _,
      { number, isAutographed, isNumberedTo, athleteId }
    ) => {
      try {
        const existingAthlete = await Athlete.findById(athleteId);
        if (!existingAthlete) {
          throw new Error(`No existing athlete with this ID: ${athleteId}`);
        }

        const newCard = new Card({
          number,
          isAutographed,
          isNumberedTo,
          athlete: athleteId,
        });

        await newCard.save();

        existingAthlete.cards.push(newCard._id);
        await existingAthlete.save();

        const populatedCard = await Card.findById(newCard._id).populate(
          "athlete"
        );

        return populatedCard;
      } catch (err) {
        console.error(err.message);
        throw new Error(`Unable to create new card`);
      }
    },

    // DELETE:

    deleteSportByName: async (_, { name }, __) => {
      try {
        const deletedSports = await Sport.deleteMany({
          name: new RegExp(name, "i"),
        });

        return console.log(`Successful Deletion:`, deletedSports);
      } catch (err) {
        console.error(err.message);
        throw new Error("Failed to delete sports");
      }
    },
    deleteCardSetById: async (_, { id }) => {
      try {
        const deletedCardSet = await CardSet.findByIdAndDelete(id);

        if (!deletedCardSet) {
          console.log(`No CardSet with ID: ${id}`);
          return null;
        }

        await Brand.updateMany({ cardset: id }, { $pull: { cardset: id } });

        console.log(`Deleting CardSet: ${deletedCardSet}`);
        return deletedCardSet;
      } catch (err) {
        console.error(err.message);
      }
    },
    deleteAthleteById: async (_, { id }) => {
      try {
        const existingAthlete = await Athlete.findById(id);

        if (!existingAthlete) {
          console.log(`No Athlete with ID: ${id}`);
          return null;
        }

        await Card.deleteMany({ athlete: id });

        const deletedAthlete = await Athlete.findByIdAndDelete(id);

        console.log(`Deleting Athlete: ${deletedAthlete}`);
        return deletedAthlete;
      } catch (err) {
        console.error(err.message);
        throw new Error(`Unable to delete Athlete with ID: ${id}`);
      }
    },
    deleteCardById: async (_, { id }) => {
      try {
        const deletedCard = await Card.findByIdAndDelete(id);

        return deletedCard;
      } catch (err) {
        console.error(err.message);
        throw new Error(`Cannot delete this card with ID: ${id}`);
      }
    },
  },
};

export default resolvers;
