import gql from "graphql-tag";

const typeDefs = gql`
  type Sport {
    id: ID!
    name: String!
  }

  type Variation {
    id: ID!
    numbered: Boolean!
    autograph: Boolean!
    color: String!
  }

  type Product {
    id: ID!
    productName: String!
    yearMade: Int!
    productVariations: [Variation]!
  }

  type Brand {
    id: ID!
    name: String!
    products: [Product]!
    productSports: [Sport]!
  }

  type Card {
    id: ID!
    brand: Brand!
    product: Product!
    cardNumber: Int!
  }

  type Player {
    id: ID!
    playerName: String!
    playerNumber: Int!
    playerTeam: String!
    playerPosition: String!
    playerSport: Sport!
  }

  type Query {
    getAllSports: [Sport]
    getSportById(id: ID!): Sport

    getAllBrands: [Brand]
    getBrandById(id: ID!): Brand

    getAllVariations: [Variation]
    getAllVariationsById(id: ID!): Variation

    getAllProducts: [Product]
    getProductById(id: ID!): Product

    getAllCards: [Card]
    getAllCardsById(id: ID!): Card

    getAllPlayers: [Player]
    getAllPlayersById(id: ID!): Player
  }

  type Mutation {
    addNewSport(name: String!): Sport

    addNewBrand(name: String!, productId: ID!, sportId: ID!): Brand

    addNewVariation(
      numbered: Boolean!
      autograph: Boolean!
      color: String!
    ): Variation

    addNewProduct(
      productName: String!
      yearMade: Int!
      variationId: ID!
    ): Product

    addNewCard(brandId: ID!, productId: ID!, cardNumber: Int!): Card

    addNewPlayer(
      playerName: String!
      playerNumber: Int!
      playerTeam: String!
      playerPosition: String!
      sportId: ID!
    ): Player
  }
`;

export default typeDefs;
