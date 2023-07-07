const userData = require("../MOCK_DATA_USER.json");
const listingData = require("../MOCK_DATA.json");
const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLID,
  GraphQLFloat
} = graphql;
const UserType = require("./TypeDefs/UserType");
const ListingType = require("./TypeDefs/ListingType");
const { v4: uuidv4 } = require("uuid");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    // getAllUsers: {
    //   type: new GraphQLList(UserType),
    //   // args: {id: {type: GraphQLInt}},
    //   resolve(parent, args) {
    //     return userData
    //   }
    // },
    getAllListing: {
      type: new GraphQLList(ListingType),
      resolve(parent, args) {
        return listingData;
      },
    },
    getlistingByID: {
      type: ListingType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        const requestedListing = listingData.find(
          (elem) => elem.id === args.id
        );
        return requestedListing;
      },
    },
  },
});
const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: {
      type: UserType,
      args: {
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        email: { type: GraphQLString },
      },
      resolve(parent, args) {
        userData.push({
          id: userData.length + 1,
          firstName: args.firstName,
          lastName: args.lastName,
          email: args.email,
        });
        return args;
      },
    },
    createListing: {
      type: ListingType,
      args: {
        price: { type: GraphQLFloat },
        title: { type: GraphQLString },
        course: { type: GraphQLString },
        pictures: { type: GraphQLList(GraphQLString) },
        description: { type: GraphQLString },
        sellerEmail: { type: GraphQLString },
        contactEmail: { type: GraphQLString },
        contactPhone: { type: GraphQLString },
      },
      resolve(parent, args) {
        const newListing = {
          id: uuidv4(),
          timeStamp: new Date().toLocaleString("en-US",{timeZone:"America/Los_Angeles"}),

          price: args.price,
          title: args.title,
          course: args.course,
          pictures: args.pictures,
          description: args.description,
          sellerEmail: args.sellerEmail,
          contactEmail: args.contactEmail,
          contactPhone: args.contactPhone,
        };
        listingData.push(newListing);
        return newListing;
      },
    },
  },
});

module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation });
