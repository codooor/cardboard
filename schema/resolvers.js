import {
  Brand,
  Card,
  Athlete,
  Sport,
  CardSet,
  SetVariation,
} from "../models/Cards.js";

// CardSet
// SetVariation

const resolvers = {
  Query: {
    getAllSports: async () => {
      try {
        return await Sport.find();
      } catch (error) {
        console.error("Error fetching all sports:", error);
        throw new Error("Failed to fetch sports.");
      }
    },
    getSportById: async (_, { id }) => {
      try {
        return await Sport.findById(id);
      } catch (error) {
        console.error(`Error fetching sport with ID ${id}:`, error);
        throw new Error(`Failed to fetch sport with ID ${id}.`);
      }
    },
    getAllBrands: async () => {
      try {
        return await Brand.find();
      } catch (error) {
        console.error("Error fetching all brands:", error);
        throw error;
      }
    },
    getBrandById: async (_, { id }) => {
      // console.log(`ID #${id} is being passed through!`);
      try {
        const brand = await Brand.findById(id).populate("variation");

        if (brand.variation.some((variation) => variation === null)) {
          throw new Error(`Failed to fully populate id:${id} with variations`);
        }

        // const brandObj = brand.toObject();
        // console.log("Full payload:", JSON.stringify(brandObj, null, 2));

        return brand;
      } catch (error) {
        console.error(`Error fetching brand name: ${id}:`, error);
        throw new Error(`Failed to fetch brand name: ${id}.`);
      }
    },
    getAllSetVariation: async () => {
      try {
        return await SetVariation.find();
      } catch (error) {
        console.error("Error fetching all variations:", error);
        throw new Error("Failed to fetch variations.");
      }
    },
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
    getAllCardSet: async () => {
      try {
        return await CardSet.find();
      } catch (error) {
        console.error("Error fetching all cards:", error);
        throw new Error("Failed to fetch cards.");
      }
    },
    getCardSetById: async (_, { id }) => {
      try {
        return await CardSet.findById(id).populate("variant");
      } catch (error) {
        console.error(`Error fetching card with ID ${id}:`, error.essage);
        throw new Error(`Failed to fetch card with ID ${id}.`);
      }
    },
    getAllAthlete: async () => {
      try {
        return await Athlete.find();
      } catch (error) {
        console.error("Error fetching all players:", error);
        throw new Error("Failed to fetch athletes.");
      }
    },
    getAllAthleteById: async (_, { id }) => {
      try {
        return await Athlete.findById(id);
      } catch (error) {
        console.error(`Error fetching player with ID ${id}:`, error);
        throw new Error(`Failed to fetch player with ID ${id}.`);
      }
    },
  },

  Mutation: {
    addNewSport: async (_, { name }, __) => {
      // Ensure you destructure { name } here
      const newSport = new Sport({
        name: name,
      });

      if (!newSport) {
        throw new Error("No Sport Created");
      } else {
        console.log("saved:", newSport);
      }

      try {
        await newSport.save();
        return newSport; // Return the new Sport instance after it has been saved
      } catch (error) {
        console.error(error); // Log any errors
        throw new Error("Failed to save new sport"); // Throw an error to the client
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
    addNewSetVariation: async (
      _,
      { setname, numbered, autograph, color, base, cardSetId },
      __
    ) => {
      const newSetVariation = new SetVariation({
        setname,
        numbered,
        autograph,
        color,
        base,
        cardset: cardSetId,
      });

      if (!newSetVariation) {
        throw new Error(`Failed to create new variation due to empty fields`);
      }

      try {
        await newSetVariation.save();

        await CardSet.findByIdAndUpdate(
          cardSetId,
          { $push: { variant: newSetVariation } },
          { new: true, useFindAndModify: false }
        );

        return newSetVariation;
      } catch (err) {
        console.error(err.message);
        throw new Error("Failed to create a new product variation!");
      }
    },
    addNewCardSet: async (_, { boxname, year }) => {
      const newCardSet = new CardSet({
        boxname,
        year,
      });

      if (!newCardSet) {
        throw new Error(`Card set not complete. Fill in all fields`);
      } else {
        console.log(`New card set: ${newCardSet} created.`);
      }

      try {
        await newCardSet.save();

        return newCardSet;
      } catch (err) {
        console.error(err);
        throw new Error("Card set save unsuccessful.");
      }
    },
  },
};

export default resolvers;
