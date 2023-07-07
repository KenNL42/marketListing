const { GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language');

const DateTimeType = new GraphQLScalarType({
  name: 'DateTime',
  description: 'Custom scalar type representing a date and time',
  serialize(value) {
    // Convert outgoing value to a string for JSON serialization
    return value.toISOString();
  },
  parseValue(value) {
    // Convert incoming value to a Date object
    return new Date(value);
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      // Convert string literal to a Date object
      return new Date(ast.value);
    }
    return null;
  },
});

module.exports = DateTimeType