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


  // enum Color {
  //   blue
  //   green
  //   purple
  //   tri_color
  //   cracked_ice
  //   blue_shimmer
  // }


      // addNewProduct: async (_, { productName, yearMade, varitaionId }, __) => {
    //   const newProd = new Product({
    //     productName,
    //     yearMade,
    //     varitaionId,
    //   });

    //   if (!newProd) {
    //     throw new Error("no new product");
    //   } else {
    //     console.log("New product creation success:", newProd);
    //   }

    //   try {
    //     await newProd.save();
    //     return newProd;
    //   } catch (err) {
    //     console.error(err);
    //     throw new Error("failed to create new product");
    //   }
    // },

     type ProductVariation {
    id: ID!
    boxname: String!
    yearMade: Int!
  }

  type CardVariation {
    id: ID!
    numbered: Boolean!
    autograph: Boolean!
    color: String!
  }