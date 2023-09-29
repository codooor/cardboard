import { gql } from "@apollo/server";

const typeDefs = gql`
  type Sport {
    id: ID!
    sport: String!
  }

  type Brand {
    id: ID!
    variation: String!
    year: Int!
  }

  type Variation {
    numbered: Boolean!
    autograph: Boolean!
    color: String!
  }

  type Card {
    id: ID!
    brand: String!
    cardNumber: Int!
  }

  type Player {
    playerName: String!
    playerNumber: Int!
    playerTeam: String!
    playerPositon: String!
    playerSport: Sport!
  }

  type Query {
    getAllSports: [Sport]
    getSportById(id: ID!): Sport

    getAllBrands: [Brands]
    getBrandById(id: ID!): Brand

    getAllVariations: [Variations]
    getAllVariationsById(id: ID!): Variation

    getAllCards: [Cards]
    getAllCardsById(id: ID!): Card

    getAllPlayers: [Player]
    getAllPlayersById(id: ID!): Player
  }

  type Mutations {
    addNewSport(sport: String!): Sport

    addNewBrand(variation: String!, year: Int!): Brand

    addNewVariation(
      numbered: Boolean!
      autograph: Boolean!
      color: String!
    ): Variation

    addNewCard(brand: Brand!, variation: Variation!, cardNumber: Int!): Card
    addNewPlayer(
      playerName: String!
      playerNumber: Int!
      playerTeam: String!
      playerPosition: String!
      playerSport: Sport
    ): Player
  }
`;
