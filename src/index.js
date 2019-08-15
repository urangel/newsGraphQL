const { GraphQLServer } = require('graphql-yoga')

// 1
// Defines GraphQL Schema
// ! means NOT NULL
const typeDefs = `
type Query {
  info: String!
}
`

//2 
// Implementation of the schema
const resolvers = {
  Query: {
    info: () => null
  }
}

// 3
const server = new GraphQLServer({
  typeDefs,
  resolvers
})

server.start( () => 
  console.log(`Server is running on port 4000`)
)