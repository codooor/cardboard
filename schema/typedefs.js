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

  type SetVariation {
    id: ID!
    setname: String!
    numbered: Boolean!
    autograph: Boolean!
    color: Boolean!
    base: Boolean!
    cardSet: CardSet
  }

  type CardSet {
    id: ID!
    boxname: String!
    year: Int!
    variant: [SetVariation]
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

    getCardSetById(id: ID!): CardSet
    getAllCardSet: [CardSet]

    getAllCards: [Card]
    getAllCardsById(id: ID!): Card

    getAllAthlete: [Athlete]
    getAllAthleteById(id: ID!): Athlete
  }

  type Mutation {
    addNewSport(name: SportName!): Sport

    addNewBrand(name: BrandName!): Brand

    addNewSetVariation(
      setname: String!
      numbered: Boolean!
      autograph: Boolean!
      base: Boolean!
      color: Boolean!
      cardset: ID!
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
