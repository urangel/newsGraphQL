const { GraphQLServer } = require('graphql-yoga')

// List kept in global namespace until database is implemented
let links = [{
  id: 'link-0',
  url: 'https://ulises.io',
  description: 'My portfolio website'
},
{
  id: 'link-1',
  url: 'www.howtographql.com',
  description: 'Thanks for the fullstack tutorial for GraphQL'
}]

let idCount = links.length

// Implementation of the schema
// Every field in the schema needs a resolver function that returns data for that field
const resolvers = {
  Query: {
    info: () => "This is the application's API",
    feed: () => links 
  },
  Mutation: {
    post: (parent, args) => {
      const link = {
        id: `link-${idCount++}`,
        description: args.description,
        url: args.url
      }
      links.push(link)
      return link
    }
  }
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers
})

server.start( () => 
  console.log(`Server is running on port 4000`)
)