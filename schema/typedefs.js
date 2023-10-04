import gql from "graphql-tag";

const typeDefs = gql`
  type Sport {
    id: ID!
    name: String!
  }

  type Athlete {
    id: ID!
    firstname: String!
    lastname: String!
    number: Int!
    team: String!
    position: String!
    sport: Sport
    cards: [Card]
  }

  type Brand {
    id: ID!
    name: String!
    cardset: [CardSet]
  }

  type CardSet {
    id: ID!
    boxname: String!
    year: Int!
    brand: Brand
  }

  type Card {
    id: ID!
    number: Int!
    isAutographed: Boolean!
    isNumberedTo: Boolean!
    athlete: Athlete
  }

  type Query {
    getAllSports: [Sport]
    getSportById(id: ID!): Sport

    getAllBrands: [Brand]
    getBrandById(id: ID!): Brand

    getAllCardSet: [CardSet]
    getCardSetById(id: ID!): CardSet

    getAllCards: [Card]
    getCardById(id: ID!): Card

    getAllAthlete: [Athlete]
    getAthleteById(id: ID!): Athlete
  }

  type Mutation {
    addNewSport(name: String!): Sport

    addNewBrand(name: String!): Brand

    addNewCardSet(boxname: String!, year: Int!, brandId: ID!): CardSet

    addNewCard(
      number: Int!
      isAutographed: Boolean!
      isNumberedTo: Boolean!
      athleteId: ID!
    ): Card

    addNewAthlete(
      firstname: String!
      lastname: String!
      number: Int!
      team: String!
      position: String!
      sportId: ID!
    ): Athlete

    deleteSportByName(name: String!): Sport
    deleteCardSetById(id: ID!): CardSet
  }
`;

export default typeDefs;
