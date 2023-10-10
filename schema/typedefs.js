import gql from "graphql-tag";

const typeDefs = gql`
  type Sport {
    id: ID!
    name: String!
  }

  type Team {
    id: ID!
    name: String!
    sport: Sport
  }

  type Division {
    division: String!
    teams: [Team]
  }

  type Conference {
    name: String!
    teams: [Team]
    divisions: [Division]
  }

  type Athlete {
    id: ID!
    firstname: String!
    lastname: String!
    number: Int!
    team: [Team]
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

    getAllTeams: [Team]
    getTeamById(id: ID!): Team

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

    addNewConference(name: String!, sportId: ID!): Conference

    addNewDivision(division: String!, conferenceId: ID!): Division

    addNewTeam(
      name: String!
      sportId: ID!
      conferenceId: ID!
      divisionId: ID!
    ): Team

    addNewBrand(name: String!): Brand

    deleteBrandById(id: ID!): Brand

    addNewCardSet(boxname: String!, year: Int!, brandId: ID!): CardSet

    addNewCard(
      number: Int!
      isAutographed: Boolean!
      isNumberedTo: Boolean!
      athleteId: ID!
    ): Card

    deleteCardById(id: ID!): Card

    addNewAthlete(
      firstname: String!
      lastname: String!
      number: Int!
      team: String!
      position: String!
      sportId: ID!
    ): Athlete

    deleteSportByName(name: String!): Sport

    deleteSportById(id: ID!): Sport

    deleteCardSetById(id: ID!): CardSet

    deleteAthleteById(id: ID!): Athlete
  }
`;

export default typeDefs;
