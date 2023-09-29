import gql from "graphql-tag";

const typeDefs = gql`
  enum SportName {
    "NFL"
    "College Football"
    "NBA"
    "College Basketball"
    "Major League Baseball"
    "WNBA"
  }

  type Sport {
    id: ID!
    name: SportName!
  }

  enum BrandName {
    "Panini" 
    "Topps" 
    "Leaf" 
    "Bowman"
   }

   type Brand {
    id: ID!
    name: BrandName!
   }

   enum Color {
    "blue"
    "green"
    "purple"
    "tri-color"
    "cracked ice"
    "blue shimmer"
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

  // type Product {
  //   id: ID!
  //   productName: String!
  //   yearMade: Int!
  //   productVariations: [Variation]!
  // }

 
  type Card {
    id: ID!
    brand: Brand!
    product: Product!
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
      firstname: String!
      lastname
      number: Int!
      team: String!
      position: String!
      sport: ID!
    ): Player
  }
`;

export default typeDefs;
