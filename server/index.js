import { ApolloServer } from 'apollo-server';
import { typeDefs } from './data/schema';
const PORT = 8080;
// basic schema
const typeDefs = gql`
  type Query {
    testString: String
  }
`;
const server = new ApolloServer({ typeDefs, mocks: true });
server
  .listen({ port: PORT })
  .then(({ url }) => console.log(`🚀 Server ready at ${url}`));
