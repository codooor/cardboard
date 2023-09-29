Card companies have cards
Cards have variations

Teams have Players
Players have names, numbers, etc

``````
  getAllVariations: [Variation]
    getAllVariationsById(id: ID!): Variation
``````

``````
  addNewProduct(
      productName: String!
      yearMade: Int!
      variationId: ID!
    ): Product
``````

``````
    addNewVariation(
      numbered: Boolean!
      autograph: Boolean!
      color: String!
    ): Variation
``````

``````
 getAllProducts: [Product]
    getProductById(id: ID!): Product
``````