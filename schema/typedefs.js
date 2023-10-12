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
    division: Division
    conference: Conference
  }

  type Division {
    id: ID!
    name: String!
    teams: [Team]
  }

  type Conference {
    id: ID!
    name: String!
    sport: Sport
    divisions: [Division]
    teams: [Team]
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

    getConferences: [Conference]
  }

  type Mutation {
    createSport(name: String!): Sport
    createConference(name: String!): Conference
    createDivision(name: String!): Division

    addTeamsToSport(sportId: ID!, teamIds: [ID!]!): Sport
    addConferenceToSport(sportId: ID!, conferenceIds: [ID!]!): Sport
    addDivisionsToConferences(
      conferenceId: ID!
      divisionIds: [ID!]!
    ): Conference

    addNewTeam(
      name: String!
      sportId: ID!
      conferenceId: ID!
      divisionId: ID!
    ): Team

    addDivision(name: String!): Division

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
