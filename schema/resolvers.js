import {
  Sport,
  Brand,
  Variation,
  Product,
  Card,
  Player,
} from "../models/Cards.js";

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
        throw new Error("Failed to fetch brands.");
      }
    },
    getBrandById: async (_, { id }) => {
      try {
        return await Brand.findById(id)
          .populate("products")
          .populate("productSports");
      } catch (error) {
        console.error(`Error fetching brand with ID ${id}:`, error);
        throw new Error(`Failed to fetch brand with ID ${id}.`);
      }
    },
    getAllVariations: async () => {
      try {
        return await Variation.find();
      } catch (error) {
        console.error("Error fetching all variations:", error);
        throw new Error("Failed to fetch variations.");
      }
    },
    getAllVariationsById: async (_, { id }) => {
      try {
        return await Variation.findById(id);
      } catch (error) {
        console.error(`Error fetching variation with ID ${id}:`, error);
        throw new Error(`Failed to fetch variation with ID ${id}.`);
      }
    },
    getAllProducts: async () => {
      try {
        return await Product.find();
      } catch (error) {
        console.error("Error fetching all products:", error);
        throw new Error("Failed to fetch products.");
      }
    },
    getProductById: async (_, { id }) => {
      try {
        return await Product.findById(id).populate("productVariations");
      } catch (error) {
        console.error(`Error fetching product with ID ${id}:`, error);
        throw new Error(`Failed to fetch product with ID ${id}.`);
      }
    },
    getAllCards: async () => {
      try {
        return await Card.find();
      } catch (error) {
        console.error("Error fetching all cards:", error);
        throw new Error("Failed to fetch cards.");
      }
    },
    getAllCardsById: async (_, { id }) => {
      try {
        return await Card.findById(id).populate("brand").populate("product");
      } catch (error) {
        console.error(`Error fetching card with ID ${id}:`, error);
        throw new Error(`Failed to fetch card with ID ${id}.`);
      }
    },
    getAllPlayers: async () => {
      try {
        return await Player.find();
      } catch (error) {
        console.error("Error fetching all players:", error);
        throw new Error("Failed to fetch players.");
      }
    },
    getAllPlayersById: async (_, { id }) => {
      try {
        return await Player.findById(id).populate("playerSport");
      } catch (error) {
        console.error(`Error fetching player with ID ${id}:`, error);
        throw new Error(`Failed to fetch player with ID ${id}.`);
      }
    },
  },

  Mutation: {
    addNewSport: async (_, { name }) => {
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
  },
};

export default resolvers;
