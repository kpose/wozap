import { ApolloServer } from 'apollo-server';
import { typeDefs } from './data/schema';
import { mocks } from './data/mocks';
import { resolvers } from './data/resolvers';
const PORT = 8080;
// basic schema
const server = new ApolloServer({
  resolvers,
  typeDefs
  // mocks,
});

const server = new ApolloServer({ typeDefs, mocks });
server
  .listen({ port: PORT })
  .then(({ url }) => console.log(`🚀 Server ready at ${url}`));
