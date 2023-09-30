import gql from "graphql-tag";

const typeDefs = gql`
  enum SportName {
    NFL
    CFB
    NBA
    MCB
    MLB
    WNBA
  }

  type Sport {
    id: ID!
    name: SportName!
  }

  type CardSet {
    id: ID!
    boxname: String!
    year: Int!
    variant: [SetVariation]
  }

  type SetVariation {
    id: ID!
    name: String!
    numbered: Boolean!
    autograph: Boolean!
    colors: String!
    base: Boolean!
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
    variation: [SetVariation]
  }

  type Card {
    id: ID!
    brand: BrandName!
    product: SetVariation!
    cardNumber: Int!
  }

  type Athlete {
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

    getAllSetVariation: [SetVariation]

    getAllCards: [Card]
    getAllCardsById(id: ID!): Card

    getAllAthlete: [Athlete]
    getAllAthleteById(id: ID!): Athlete
  }

  type Mutation {
    addNewSport(name: SportName!): Sport

    addNewBrand(name: BrandName!): Brand

    addNewSetVariation(
      boxname: String!
      year: Int!
      numbered: Boolean!
      autograph: Boolean!
      brandId: ID!
    ): SetVariation

    addNewCardSet(boxname: String!, year: Int!): CardSet

    addNewAthlete(
      firstname: String!
      lastname: String!
      number: Int!
      team: String!
      position: String!
      sport: ID!
    ): Athlete
  }
`;

export default typeDefs;
