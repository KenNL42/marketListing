const cors = require("cors")
const express = require("express")
const app = express();
const PORT = 4444;
const {graphqlHTTP} = require("express-graphql");

const schema = require("./Schemas")

// Enable CORS
// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//   res.setHeader('Access-Control-Allow-Methods', 'POST');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   if (req.method === 'OPTIONS') {
//     return res.sendStatus(200);
//   }
//   next();
// });
app.use(cors())

app.use('/graphql', 
  // cors<cors.CorsRequest>({ origin: ['http://localhost:3000', 'https://studio.apollographql.com'] }), // ! Configure CORS with correct uri later
  graphqlHTTP({
  schema,
  graphiql: true,
}))

app.listen(PORT, () => {
  console.log("Server running");
})