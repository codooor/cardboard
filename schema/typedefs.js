import gql from "graphql-tag";

const typeDefs = gql`
  enum SportName {
    NFL
    College_Football
    NBA
    College_Basketball
    Major
    League
    Baseball
    WNBA
  }

  type Sport {
    id: ID!
    name: SportName!
  }

  enum BrandName {
    Panini
    Topps
    Leaf
    Bowman
  }

  type Brand {
    id: ID!
    name: BrandName!
  }

  enum Color {
    blue
    green
    purple
    tri_color
    cracked_ice
    blue_shimmer
  }

  type ProductVariation {
    boxname: String!
    yearMade: Int!
  }

  type CardVariation {
    id: ID!
    numbered: Boolean!
    autograph: Boolean!
    color: String!
  }

  type Card {
    id: ID!
    brand: BrandName!
    product: ProductVariation!
    cardNumber: Int!
  }

  type Player {
    id: ID!
    firstname: String!
    lastname: String!
    number: Int!
    team: String!
    position: String!
    sport: Sport!
  }

  type Query {
    getAllSports: [Sport]
    getSportById(id: ID!): Sport

    getAllBrands: [Brand]
    getBrandById(id: ID!): Brand

    getAllCards: [Card]
    getAllCardsById(id: ID!): Card

    getAllPlayers: [Player]
    getAllPlayersById(id: ID!): Player
  }

  type Mutation {
    addNewSport(name: String!): Sport

    addNewBrand(name: BrandName!): Brand

    addNewCard(brandId: ID!, productId: ID!, cardNumber: Int!): Card

    addNewPlayer(
      firstname: String!
      lastname: String!
      number: Int!
      team: String!
      position: String!
      sport: ID!
    ): Player
  }
`;

export default typeDefs;
