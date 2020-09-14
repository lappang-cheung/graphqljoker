import { ApolloServer, gql } from 'apollo-server-micro';
import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge';
import connectDB from '../../lib/mongoose';

import { moviesResolvers } from '../../api/movies/resolvers/resolvers';
import { movieMutations } from '../../api/movies/mutations/mutation';
import Movies from '../../api/movies/Movies.graphql';

const fakeTypeDefs = gql`
    type Query {
        sayHello: String
    }
`;

const fakeResolvers = {
    Query: {
        sayHello: () => {
            return "Hello World"
        }
    }
};

const resolvers = mergeResolvers([
    fakeResolvers,
    moviesResolvers,
    movieMutations
]);

const typeDefs = mergeTypeDefs([
    fakeTypeDefs,
    Movies
])

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers
});

export const config = {
    api: {
        bodyParser: false
    }
}

const server = apolloServer.createHandler({ path: "/api/graphql"});
export default connectDB(server);