const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLFloat } = graphql;
const DateTimeType = require("./DateTimeType");

const ListingType = new GraphQLObjectType({
  name: "Listing",
  fields: {
    // transaction detail
    id: { type: graphql.GraphQLID },
    timeStamp: { type: DateTimeType },

    // order detail
    price: { type: GraphQLFloat},
    title: { type: GraphQLString},
    course: { type: GraphQLString},
    // pictures: { type: GraphQLList(GraphQLString)},
    pictures: { type: new GraphQLList(GraphQLString)},
    description: { type: GraphQLString},

    // seller's info
    // sellerID: { type: graphql.GraphQLID }, // ? should this be string, or does this needed
    sellerEmail: {type: GraphQLString},
    contactEmail: { type: GraphQLString},
    contactPhone: { type: GraphQLString},
  },
});

module.exports = ListingType